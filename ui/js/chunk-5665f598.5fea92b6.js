(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5665f598"],{b2d6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-layout"},[a("a-spin",{attrs:{spinning:t.loading}},[a("a-form",{attrs:{form:t.form,layout:"vertical"},on:{submit:t.handleSubmit}},[a("a-form-item",{attrs:{label:t.$t("label.state")}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["state",{rules:[{required:!0}]}],expression:"['state', {\n            rules: [{ required: true }]\n          }]"}],attrs:{id:"state-selection",showSearch:"",optionFilterProp:"children",filterOption:function(t,e){return e.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0},loading:t.stateLoading,placeholder:t.apiParams.state.description}},t._l(this.states,(function(e,s){return a("a-select-option",{key:s},[t._v(" "+t._s(e.name||e.description)+" ")])})),1)],1),a("div",{staticClass:"action-button",attrs:{span:24}},[a("a-button",{on:{click:t.closeAction}},[t._v(t._s(this.$t("label.cancel")))]),a("a-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleSubmit}},[t._v(t._s(this.$t("label.ok")))])],1)],1)],1)],1)},i=[],n=(a("99af"),a("4160"),a("b0c0"),a("b64b"),a("d3b7"),a("159b"),a("365c")),r={name:"UpdateKubernetesSupportedVersion",props:{resource:{type:Object,required:!0}},data:function(){return{states:[],stateLoading:!1,loading:!1}},beforeCreate:function(){var t=this;this.form=this.$form.createForm(this),this.apiConfig=this.$store.getters.apis.updateKubernetesSupportedVersion||{},this.apiParams={},this.apiConfig.params.forEach((function(e){t.apiParams[e.name]=e}))},created:function(){this.states=[{id:"Enabled",name:this.$t("state.enabled")},{id:"Disabled",name:this.$t("state.disabled")}]},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=0;if(!this.isObjectEmpty(this.resource))for(var e=0;e<this.states.length;++e)if(this.states[e].id===this.resource.state){t=e;break}this.form.setFieldsValue({state:t})},isValidValueForKey:function(t,e){return e in t&&null!=t[e]},arrayHasItems:function(t){return null!==t&&void 0!==t&&Array.isArray(t)&&t.length>0},isObjectEmpty:function(t){return!(null!==t&&void 0!==t&&Object.keys(t).length>0&&t.constructor===Object)},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t,a){if(!t){e.loading=!0;var s={id:e.resource.id};e.isValidValueForKey(a,"state")&&e.arrayHasItems(e.states)&&(s.state=e.states[a.state].id),Object(n["a"])("updateKubernetesSupportedVersion",s).then((function(t){e.$message.success("".concat(e.$t("message.success.update.kubeversion"),": ").concat(e.resource.name)),e.$emit("refresh-data"),e.closeAction()})).catch((function(t){e.$notifyError(t)})).finally((function(){e.loading=!1}))}}))},closeAction:function(){this.$emit("close-action")}}},o=r,c=(a("f625"),a("2877")),u=Object(c["a"])(o,s,i,!1,null,"d8a773a0",null);e["default"]=u.exports},e180:function(t,e,a){},f625:function(t,e,a){"use strict";var s=a("e180"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-5665f598.5fea92b6.js.map