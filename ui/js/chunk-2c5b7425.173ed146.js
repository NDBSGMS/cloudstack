(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5b7425"],{"63f3":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row-project-invitation"},[r("a-spin",{attrs:{spinning:e.loading}},[r("a-form",{attrs:{form:e.form,layout:"vertical"},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:e.$t("label.projectid")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectid",{rules:[{required:!0,message:""+this.$t("message.error.required.input")}]}],expression:"['projectid', {\n            rules: [{ required: true, message: `${this.$t('message.error.required.input')}` }]\n          }]"}],attrs:{placeholder:e.apiParams.projectid.description}})],1),r("a-form-item",{attrs:{label:e.$t("label.token")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["token",{rules:[{required:!0,message:""+this.$t("message.error.required.input")}]}],expression:"['token', {\n            rules: [{ required: true, message: `${this.$t('message.error.required.input')}` }]\n          }]"}],attrs:{placeholder:e.apiParams.token.description}})],1),r("div",{staticClass:"card-footer"},[r("a-button",{on:{click:function(){return e.$emit("close-action")}}},[e._v(e._s(this.$t("label.cancel")))]),r("a-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(this.$t("label.ok")))])],1)],1)],1)],1)},a=[],n=(r("4160"),r("caad"),r("b0c0"),r("d3b7"),r("2532"),r("159b"),r("365c")),o={name:"InvitationTokenTemplate",beforeCreate:function(){var e=this;this.form=this.$form.createForm(this),this.apiConfig=this.$store.getters.apis.updateProjectInvitation||{},this.apiParams={},this.apiConfig.params.forEach((function(t){e.apiParams[t.name]=t}))},data:function(){return{loading:!1}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){if(!e){var i=t.$t("label.accept.project.invitation"),a=t.$t("label.projectid")+" "+r.projectid,o=t.$message.loading(i+"".concat(t.$t("label.in.progress.for")," ")+a,0);t.loading=!0,Object(n["a"])("updateProjectInvitation",r).then((function(e){t.checkForAddAsyncJob(e,i,a),t.$emit("close-action")})).catch((function(e){t.$notifyError(e)})).finally((function(){t.$emit("refresh-data"),t.loading=!1,setTimeout(o,1e3)}))}}))},checkForAddAsyncJob:function(e,t,r){var i=!1;for(var a in e)if(a.includes("response"))for(var n in e[a])if("jobid"===n){i=!0;var o=e[a][n];this.$store.dispatch("AddAsyncJob",{title:t,jobid:o,description:r,status:"progress"})}return i}}},s=o,c=(r("fc00"),r("2877")),l=Object(c["a"])(s,i,a,!1,null,"67b3bf8e",null);t["default"]=l.exports},8308:function(e,t,r){},fc00:function(e,t,r){"use strict";var i=r("8308"),a=r.n(i);a.a}}]);
//# sourceMappingURL=chunk-2c5b7425.173ed146.js.map