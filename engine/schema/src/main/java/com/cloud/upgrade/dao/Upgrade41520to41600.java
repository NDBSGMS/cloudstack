// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

package com.cloud.upgrade.dao;

import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;

import com.cloud.storage.GuestOSHypervisorMapping;
import com.cloud.upgrade.GuestOsMapper;
import com.cloud.upgrade.RolePermissionChecker;
import com.cloud.upgrade.SystemVmTemplateRegistration;
import org.apache.cloudstack.acl.RoleType;
import org.apache.log4j.Logger;

import com.cloud.utils.exception.CloudRuntimeException;
import java.math.BigInteger;
import java.util.UUID;


public class Upgrade41520to41600 implements DbUpgrade, DbUpgradeSystemVmTemplate {

    final static Logger LOG = Logger.getLogger(Upgrade41520to41600.class);
    private SystemVmTemplateRegistration systemVmTemplateRegistration;
    private RolePermissionChecker rolePermissionChecker = new RolePermissionChecker();
    private GuestOsMapper guestOsMapper = new GuestOsMapper();

    public Upgrade41520to41600() {
    }

    @Override
    public String[] getUpgradableVersionRange() {
        return new String[] {"4.15.2.0", "4.16.0.0"};
    }

    @Override
    public String getUpgradedVersion() {
        return "4.16.0.0";
    }

    @Override
    public boolean supportsRollingUpgrade() {
        return false;
    }

    @Override
    public InputStream[] getPrepareScripts() {
        final String scriptFile = "META-INF/db/schema-41520to41600.sql";
        final InputStream script = Thread.currentThread().getContextClassLoader().getResourceAsStream(scriptFile);
        if (script == null) {
            throw new CloudRuntimeException("Unable to find " + scriptFile);
        }

        return new InputStream[] {script};
    }

    @Override
    public void performDataMigration(Connection conn) {
        generateUuidForExistingSshKeyPairs(conn);
        populateAnnotationPermissions(conn);
        correctGuestOsIdsInHypervisorMapping(conn);
        fixWrongPoolUuid(conn);
    }

    public void fixWrongPoolUuid(Connection conn) {
        LOG.debug("Replacement of faulty pool uuids");
        try (PreparedStatement pstmt = conn.prepareStatement("SELECT id,uuid FROM storage_pool "
                + "WHERE uuid NOT LIKE \"%-%-%-%\" AND removed IS NULL;"); ResultSet rs = pstmt.executeQuery()) {
            PreparedStatement updateStmt = conn.prepareStatement("update storage_pool set uuid = ? where id = ?");
            while (rs.next()) {
                    UUID poolUuid = new UUID(
                            new BigInteger(rs.getString(2).substring(0, 16), 16).longValue(),
                            new BigInteger(rs.getString(2).substring(16), 16).longValue()
                    );
                    updateStmt.setLong(2, rs.getLong(1));
                    updateStmt.setString(1, poolUuid.toString());
                    updateStmt.addBatch();
            }
            updateStmt.executeBatch();
        } catch (SQLException ex) {
            String errorMsg = "fixWrongPoolUuid:Exception while updating faulty pool uuids";
            LOG.error(errorMsg,ex);
            throw new CloudRuntimeException(errorMsg, ex);
        }
    }

    private void correctGuestOsIdsInHypervisorMapping(final Connection conn) {
        LOG.debug("Correcting guest OS ids in hypervisor mappings");
        guestOsMapper.updateGuestOsIdInHypervisorMapping(conn, 10, "Ubuntu 20.04 LTS", new GuestOSHypervisorMapping("Xenserver", "8.2.0", "Ubuntu Focal Fossa 20.04"));
    }

    private void populateAnnotationPermissions(Connection conn) {
        List<String> annotationRules = Arrays.asList("listAnnotations", "addAnnotation", "removeAnnotation");
        for (RoleType roleType : Arrays.asList(RoleType.ResourceAdmin, RoleType.DomainAdmin, RoleType.User)) {
            checkAndPersistAnnotationPermissions(conn, roleType, annotationRules);
        }
    }

    private void checkAndPersistAnnotationPermissions(Connection conn, RoleType roleType, List<String> rules) {
        LOG.debug("Checking the annotation permissions for the role: " + roleType.getId());
        for (String rule : rules) {
            LOG.debug("Checking the annotation permissions for the role: " + roleType.getId() + " and rule: " + rule);
            if (!rolePermissionChecker.existsRolePermissionByRoleIdAndRule(conn, roleType.getId(), rule)) {
                LOG.debug("Inserting role permission for role: " + roleType.getId() + " and rule: " + rule);
                rolePermissionChecker.insertAnnotationRulePermission(conn, roleType.getId(), rule);
            } else {
                LOG.debug("Found existing role permission for role: " + roleType.getId() + " and rule: " + rule +
                        ", not updating it");
            }
        }
    }

    private void generateUuidForExistingSshKeyPairs(Connection conn) {
        LOG.debug("Generating uuid for existing ssh key-pairs");
        try {
            PreparedStatement pstmt = conn.prepareStatement("SELECT id FROM `cloud`.`ssh_keypairs` WHERE uuid is null");
            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                long sshKeyId = rs.getLong(1);
                pstmt = conn.prepareStatement("UPDATE `cloud`.`ssh_keypairs` SET `uuid` = UUID() WHERE id = ?");
                pstmt.setLong(1, sshKeyId);
                pstmt.executeUpdate();
            }
            if (!rs.isClosed())  {
                rs.close();
            }
            if (!pstmt.isClosed())  {
                pstmt.close();
            }
            LOG.debug("Successfully generated uuid for existing ssh key-pairs");
        } catch (SQLException e) {
            String errMsg = "Exception while generating uuid for existing ssh key-pairs: " + e.getMessage();
            LOG.error(errMsg, e);
            throw new CloudRuntimeException(errMsg, e);
        }
    }

    private void initSystemVmTemplateRegistration() {
        systemVmTemplateRegistration = new SystemVmTemplateRegistration();
    }

    @Override
    @SuppressWarnings("serial")
    public void updateSystemVmTemplates(final Connection conn) {
        LOG.debug("Updating System Vm template IDs");
        initSystemVmTemplateRegistration();
        try {
            systemVmTemplateRegistration.updateSystemVmTemplates(conn);
        } catch (Exception e) {
            throw new CloudRuntimeException("Failed to find / register SystemVM template(s)");
        }
    }

    @Override
    public InputStream[] getCleanupScripts() {
        final String scriptFile = "META-INF/db/schema-41520to41600-cleanup.sql";
        final InputStream script = Thread.currentThread().getContextClassLoader().getResourceAsStream(scriptFile);
        if (script == null) {
            throw new CloudRuntimeException("Unable to find " + scriptFile);
        }

        return new InputStream[] {script};
    }
}
