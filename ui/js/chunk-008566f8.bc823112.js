(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-008566f8"],{"817e":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-layout"},[s("a-spin",{attrs:{spinning:t.loading}},[s("a-alert",{attrs:{type:"warning"}},[s("span",{attrs:{slot:"message"},domProps:{innerHTML:t._s(t.$t("message.action.start.instance"))},slot:"message"})]),s("br"),s("a-form",{attrs:{form:t.form,layout:"vertical"},on:{submit:t.handleSubmit}},["Admin"===this.$store.getters.userInfo.roletype?s("div",[s("a-form-item",[s("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.podid"))+" "),s("a-tooltip",{attrs:{title:t.apiParams.podid.description}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),s("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["podid",{}],expression:"['podid', {}]"}],attrs:{showSearch:"",optionFilterProp:"children",filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},loading:t.podsLoading,placeholder:t.apiParams.podid.description},on:{change:t.handlePodChange}},t._l(this.pods,(function(e){return s("a-select-option",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),1)],1),s("a-form-item",[s("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.clusterid"))+" "),s("a-tooltip",{attrs:{title:t.apiParams.clusterid.description}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),s("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["clusterid",{}],expression:"['clusterid', {}]"}],attrs:{id:"cluster-selection",showSearch:"",optionFilterProp:"children",filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},loading:t.clustersLoading,placeholder:t.apiParams.clusterid.description},on:{change:t.handleClusterChange}},t._l(this.clusters,(function(e){return s("a-select-option",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),1)],1),s("a-form-item",[s("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.hostid"))+" "),s("a-tooltip",{attrs:{title:t.apiParams.hostid.description}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),s("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["hostid",{}],expression:"['hostid', {}]"}],attrs:{id:"host-selection",showSearch:"",optionFilterProp:"children",filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},loading:t.hostsLoading,placeholder:t.apiParams.hostid.description}},t._l(this.hosts,(function(e){return s("a-select-option",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),1)],1)],1):t._e(),"VMware"===t.resource.hypervisor?s("a-form-item",[s("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.bootintosetup"))+" "),s("a-tooltip",{attrs:{title:t.apiParams.bootintosetup.description}},[s("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),s("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["bootintosetup"],expression:"['bootintosetup']"}]})],1):t._e(),s("div",{staticClass:"action-button",attrs:{span:24}},[s("a-button",{on:{click:t.closeAction}},[t._v(t._s(this.$t("label.cancel")))]),s("a-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleSubmit}},[t._v(t._s(this.$t("label.ok")))])],1)],1)],1)],1)},i=[],a=(s("99af"),s("4160"),s("b0c0"),s("d3b7"),s("159b"),s("365c")),n={name:"StartVirtualMachine",props:{resource:{type:Object,required:!0}},data:function(){return{pods:[],clusters:[],hosts:[],podsLoading:!1,clustersLoading:!1,hostsLoading:!1,loading:!1}},inject:["parentFetchData"],beforeCreate:function(){var t=this;this.form=this.$form.createForm(this),this.apiConfig=this.$store.getters.apis.startVirtualMachine||{},this.apiParams={},this.apiConfig.params.forEach((function(e){t.apiParams[e.name]=e}))},mounted:function(){"Admin"===this.$store.getters.userInfo.roletype&&(this.fetchPods(),this.fetchClusters(),this.fetchHosts())},methods:{fetchPods:function(){var t=this;this.pods=[],this.podsLoading=!0;var e={zoneid:this.resource.zoneid};Object(a["a"])("listPods",e).then((function(e){t.pods=e.listpodsresponse.pod||[],0===t.pods.length&&t.$notification.error({message:"No pods found",duration:0})})).finally((function(){t.podsLoading=!1}))},fetchClusters:function(t){var e=this;this.clusters=[],this.clustersLoading=!0;var s={zoneid:this.resource.zoneid};t&&(s.podid=t),Object(a["a"])("listClusters",s).then((function(t){e.clusters=t.listclustersresponse.cluster||[],0===e.clusters.length&&e.$notification.error({message:"No clusters found",duration:0})})).finally((function(){e.clustersLoading=!1}))},fetchHosts:function(t,e){var s=this;this.hosts=[],this.hostsLoading=!0;var o={zoneid:this.resource.zoneid,type:"Routing",state:"Up"};t&&(o.podid=t),e&&(o.clusterid=e),Object(a["a"])("listHosts",o).then((function(t){s.hosts=t.listhostsresponse.host||[],0===s.hosts.length&&s.$notification.error({message:"No hosts found",duration:0})})).finally((function(){s.hostsLoading=!1}))},handlePodChange:function(t){this.form.clearField("clusterid"),this.form.clearField("hostid"),this.fetchClusters(t),this.fetchHosts(t)},handleClusterChange:function(t){this.form.clearField("hostid"),this.fetchHosts("",t)},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,s){if(!t){e.loading=!0;var o={id:e.resource.id};for(var i in s)s[i]&&(o[i]=s[i]);Object(a["a"])("startVirtualMachine",o).then((function(t){var s=t.startvirtualmachineresponse.jobid;e.$store.dispatch("AddAsyncJob",{title:e.$t("label.action.start.instance"),jobid:s,description:e.resource.name,status:"progress"}),e.$pollJob({jobId:s,loadingMessage:"".concat(e.$t("label.action.start.instance")," ").concat(e.resource.name),catchMessage:e.$t("error.fetching.async.job.result"),successMessage:"".concat(e.$t("label.action.start.instance")," ").concat(e.resource.name),successMethod:function(){e.parentFetchData()},response:function(t){return t.virtualmachine&&t.virtualmachine.password?"Password of the VM is ".concat(t.virtualmachine.password):null}}),e.closeAction()})).catch((function(t){e.$notifyError(t)})).finally((function(){e.loading=!1}))}}))},closeAction:function(){this.$emit("close-action")}}},r=n,c=(s("e0d5"),s("2877")),l=Object(c["a"])(r,o,i,!1,null,"716a75ca",null);e["default"]=l.exports},d325:function(t,e,s){},e0d5:function(t,e,s){"use strict";var o=s("d325"),i=s.n(o);i.a}}]);
//# sourceMappingURL=chunk-008566f8.bc823112.js.map