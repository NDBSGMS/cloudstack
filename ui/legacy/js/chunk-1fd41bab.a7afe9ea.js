(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fd41bab"],{"632c":function(t,e,a){},db78:function(t,e,a){"use strict";var r=a("632c"),i=a.n(r);i.a},fc2b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-row",{attrs:{gutter:12}},[a("a-col",{attrs:{md:24}},[a("a-card",{staticClass:"breadcrumb-card"},[a("a-col",{staticStyle:{display:"flex"},attrs:{md:24}},[a("breadcrumb",{staticStyle:{"padding-top":"6px","padding-left":"8px"}}),a("a-button",{staticStyle:{"margin-left":"12px","margin-top":"4px"},attrs:{loading:t.loading,icon:"reload",size:"small",shape:"round"},on:{click:function(e){return t.fetchData()}}},[t._v(" "+t._s(t.$t("label.refresh"))+" ")]),a("a-button",{staticStyle:{"margin-left":"12px","margin-top":"4px"},attrs:{icon:"safety-certificate",size:"small",shape:"round"},on:{click:function(e){t.sslFormVisible=!0}}},[t._v(" "+t._s(t.$t("label.sslcertificates"))+" ")]),a("a-modal",{attrs:{title:t.$t("label.sslcertificates"),visible:t.sslFormVisible,footer:null,maskClosable:!1,cancelText:t.$t("label.cancel")},on:{cancel:t.sslModalClose}},[a("p",[t._v(" "+t._s(t.$t("message.update.ssl"))+" ")]),a("a-form",{ref:"sslForm",attrs:{form:t.form},on:{submit:function(e){return e.preventDefault(),t.handleSslFormSubmit(e)}}},[a("a-form-item",{attrs:{required:!0}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.root.certificate"))+" "),a("a-tooltip",{attrs:{placement:"bottom",title:t.apiParams.name.description}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["root",{rules:[{required:!0,message:""+t.$t("label.required")}],validateTrigger:"change"}],expression:"[\n                  'root',\n                  {rules: [{ required: true, message: `${$t('label.required')}` }], validateTrigger:'change'}\n                ]"}],attrs:{id:"rootCert",rows:"2",placeholder:t.$t("label.root.certificate"),autoFocus:!0,name:"rootCert"}})],1),a("transition-group",{attrs:{name:"fadeInUp",tag:"div"}},t._l(t.intermediateCertificates,(function(e,r){return a("a-form-item",{key:"key-"+r,staticClass:"intermediate-certificate"},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.intermediate.certificate")+" "+(r+1)+" ")+" "),a("a-tooltip",{attrs:{placement:"bottom",title:t.apiParams.id.description}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["intermediate"+(r+1),{validateTrigger:"change"}],expression:"[\n                    `intermediate${index + 1}`,\n                    {validateTrigger:'change'}\n                  ]"}],attrs:{id:"intermediateCert"+r,rows:"2",placeholder:t.$t("label.intermediate.certificate")+" "+(r+1),name:"intermediateCert"+r}})],1)})),1),a("a-form-item",[a("a-button",{on:{click:t.addIntermediateCert}},[a("a-icon",{attrs:{type:"plus-circle"}}),t._v(" "+t._s(t.$t("label.add.intermediate.certificate"))+" ")],1)],1),a("a-form-item",{attrs:{required:!0}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.server.certificate"))+" "),a("a-tooltip",{attrs:{placement:"bottom",title:t.apiParams.certificate.description}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["server",{rules:[{required:!0,message:""+t.$t("label.required")}],validateTrigger:"change"}],expression:"[\n                  'server',\n                  {rules: [{ required: true, message: `${$t('label.required')}` }], validateTrigger:'change'}\n                ]"}],attrs:{id:"serverCert",rows:"2",placeholder:t.$t("label.server.certificate"),name:"serverCert"}})],1),a("a-form-item",{attrs:{required:!0}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.pkcs.private.certificate"))+" "),a("a-tooltip",{attrs:{placement:"bottom",title:t.apiParams.privatekey.description}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["pkcs",{rules:[{required:!0,message:""+t.$t("label.required")}],validateTrigger:"change"}],expression:"[\n                  'pkcs',\n                  {rules: [{ required: true, message: `${$t('label.required')}` }], validateTrigger:'change'}\n                ]"}],attrs:{id:"pkcsKey",rows:"2",placeholder:t.$t("label.pkcs.private.certificate"),name:"pkcsKey"}})],1),a("a-form-item",{attrs:{required:!0}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t.$t("label.domain.suffix"))+" "),a("a-tooltip",{attrs:{placement:"bottom",title:t.apiParams.domainsuffix.description}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.45)"},attrs:{type:"info-circle"}})],1)],1),a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dns",{rules:[{required:!0,message:""+t.$t("label.required")}],validateTrigger:"change"}],expression:"[\n                  'dns',\n                  {rules: [{ required: true, message: `${$t('label.required')}` }], validateTrigger:'change'}\n                ]"}],attrs:{id:"dnsSuffix",placeholder:t.$t("label.domain.suffix"),name:"dnsSuffix"}})],1),a("a-form-item",{staticClass:"controls"},[a("a-button",{staticClass:"close-button",on:{click:this.sslModalClose}},[t._v(" "+t._s(t.$t("label.cancel"))+" ")]),a("a-button",{attrs:{type:"primary",htmlType:"submit",loading:t.sslFormSubmitting}},[t._v(" "+t._s(t.$t("label.submit"))+" ")])],1)],1)],1)],1)],1)],1),t._l(t.sections,(function(e,r){return t.routes[e]?a("a-col",{key:r,staticStyle:{"margin-bottom":"12px"},attrs:{md:6}},[a("chart-card",{attrs:{loading:t.loading}},[a("div",{staticClass:"chart-card-inner"},[a("router-link",{attrs:{to:{name:e.substring(0,e.length-1)}}},[a("h2",[t._v(t._s(t.$t(t.routes[e].title)))]),a("h2",[a("a-icon",{attrs:{type:t.routes[e].icon}}),t._v(" "+t._s(t.stats[e]))],1)])],1)])],1):t._e()}))],2)},i=[],s=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("4160"),a("caad"),a("b0c0"),a("b64b"),a("d3b7"),a("2532"),a("3ca3"),a("159b"),a("ddb0"),a("365c")),o=a("a18c"),l=a("2f47"),n=a("d3d3"),c={name:"InfraSummary",components:{Breadcrumb:l["a"],ChartCard:n["a"]},data:function(){return{loading:!0,routes:{},sections:["zones","pods","clusters","hosts","storagepools","imagestores","systemvms","routers","cpusockets","managementservers","alerts","ilbvms"],sslFormVisible:!1,stats:{},intermediateCertificates:[],sslFormSubmitting:!1,maxCerts:0}},beforeCreate:function(){var t=this;this.form=this.$form.createForm(this),this.apiParams={};var e=this.$store.getters.apis.uploadCustomCertificate||{};e.params.forEach((function(e){t.apiParams[e.name]=e}))},mounted:function(){this.fetchData()},methods:{fetchData:function(){this.routes={};var t=!0,e=!1,a=void 0;try{for(var r,i=this.sections[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value,l=o["a"].resolve({name:s.substring(0,s.length-1)});this.routes[s]={title:l.route.meta.title,icon:l.route.meta.icon}}}catch(n){e=!0,a=n}finally{try{t||null==i.return||i.return()}finally{if(e)throw a}}this.listInfra()},listInfra:function(){var t=this;this.loading=!0,Object(s["a"])("listInfrastructure").then((function(e){t.stats=[],e&&e.listinfrastructureresponse&&e.listinfrastructureresponse.infrastructure&&(t.stats=e.listinfrastructureresponse.infrastructure)})).finally((function(e){t.loading=!1}))},resetSslFormData:function(){this.form.resetFields(),this.intermediateCertificates=[],this.sslFormSubmitting=!1,this.sslFormVisible=!1},sslModalClose:function(){this.resetSslFormData()},addIntermediateCert:function(){this.intermediateCertificates.push("")},pollActionCompletion:function(t,e){var a=this;Object(s["a"])("queryAsyncJobResult",{jobid:t}).then((function(r){var i=r.queryasyncjobresultresponse;1===i.jobstatus&&a.maxCerts===e?(a.$message.success("".concat(a.$t("label.certificate.upload"),": ").concat(i.jobresult.customcertificate.message)),a.$notification.success({message:a.$t("label.certificate.upload"),description:i.jobresult.customcertificate.message||a.$t("message.success.certificate.upload")})):2===i.jobstatus?a.$notification.error({message:a.$t("label.certificate.upload.failed"),description:i.jobresult.errortext||a.$t("label.certificate.upload.failed.description"),duration:0}):0===i.jobstatus&&a.$message.loading("".concat(a.$t("message.certificate.upload.processing"),": ").concat(e),2).then((function(){return a.pollActionCompletion(t,e)}))})).catch((function(t){console.log(a.$t("error.fetching.async.job.result")+t)}))},handleSslFormSubmit:function(){var t=this;this.sslFormSubmitting=!0,this.form.validateFields((function(e){if(e)t.sslFormSubmitting=!1;else{var a=t.form.getFieldsValue();t.maxCerts=2+Object.keys(a).length;var r=1,i={id:r,certificate:a.root,domainsuffix:a.dns,name:"root"};Object(s["a"])("uploadCustomCertificate",{},"POST",i).then((function(e){t.pollActionCompletion(e.uploadcustomcertificateresponse.jobid,r)})).then((function(){t.sslModalClose()})),Object.keys(a).forEach((function(e){if(e.includes("intermediate")){r+=1;var i={id:r,certificate:a[e],domainsuffix:a.dns,name:e};Object(s["a"])("uploadCustomCertificate",{},"POST",i).then((function(e){t.pollActionCompletion(e.uploadcustomcertificateresponse.jobid,r)})).then((function(){t.sslModalClose()}))}})),r=r<=2?3:r+1,i={id:r,certificate:a.server,domainsuffix:a.dns,privatekey:a.pkcs},Object(s["a"])("uploadCustomCertificate",{},"POST",i).then((function(e){t.pollActionCompletion(e.uploadcustomcertificateresponse.jobid,r)})).then((function(){t.sslModalClose()}))}}))}}},u=c,d=(a("db78"),a("2877")),m=Object(d["a"])(u,r,i,!1,null,"100d7ef2",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-1fd41bab.a7afe9ea.js.map