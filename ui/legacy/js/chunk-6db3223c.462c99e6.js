(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6db3223c"],{"4aa1":function(e,t,r){},b0d5:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-layout"},[r("a-form",{attrs:{form:e.form,layout:"vertical"},on:{submit:e.handleSubmit}},[r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:24,lg:24}},[r("a-form-item",{attrs:{label:e.$t("label.ip")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ip",{rules:[{required:!0,message:e.$t("message.error.required.input")}]}],expression:"['ip', {\n              rules: [{ required: true, message: $t('message.error.required.input') }]\n            }]"}]})],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:24,lg:24}},[r("a-form-item",{attrs:{label:e.$t("label.username")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:e.$t("message.error.required.input")}]}],expression:"['username', {\n              rules: [{ required: true, message: $t('message.error.required.input') }]\n            }]"}]})],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:24,lg:24}},[r("a-form-item",{attrs:{label:e.$t("label.password")}},[r("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("message.error.required.input")}]}],expression:"['password', {\n              rules: [{ required: true, message: $t('message.error.required.input') }]\n            }]"}]})],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:24,lg:24}},[r("a-form-item",{attrs:{label:e.$t("label.networkdevicetype")}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["networkdevicetype",{rules:[{required:!0,message:e.$t("message.error.select")}]}],expression:"['networkdevicetype', {\n              rules: [{ required: true, message: $t('message.error.select') }]\n            }]"}]},e._l(e.networkDeviceType,(function(t){return r("a-select-option",{key:t.id},[e._v(e._s(e.$t(t.description)))])})),1)],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:24,lg:24}},[r("a-form-item",{attrs:{label:e.$t("label.publicinterface")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["publicinterface"],expression:"['publicinterface']"}]})],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:24,lg:24}},[r("a-form-item",{attrs:{label:e.$t("label.privateinterface")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["privateinterface"],expression:"['privateinterface']"}]})],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:24,lg:24}},[r("a-form-item",{attrs:{label:e.$t("label.usageinterface")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["usageinterface"],expression:"['usageinterface']"}]})],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:12,lg:12}},[r("a-form-item",{attrs:{label:e.$t("label.numretries")}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["numretries",{initialValue:2}],expression:"['numretries', { initialValue: 2 }]"}],staticStyle:{width:"100%"}})],1)],1),r("a-col",{attrs:{md:12,lg:12}},[r("a-form-item",{attrs:{label:e.$t("label.timeout")}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["timeout",{initialValue:300}],expression:"['timeout', { initialValue: 300 }]"}],staticStyle:{width:"100%"}})],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:12,lg:12}},[r("a-form-item",{attrs:{label:e.$t("label.publicnetwork")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["publicnetwork",{initialValue:"untrusted"}],expression:"['publicnetwork', { initialValue: 'untrusted' }]"}],attrs:{disabled:!0}})],1)],1),r("a-col",{attrs:{md:12,lg:12}},[r("a-form-item",{attrs:{label:e.$t("label.privatenetwork")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["privatenetwork",{initialValue:"trusted"}],expression:"['privatenetwork', { initialValue: 'trusted' }]"}],attrs:{disabled:!0}})],1)],1)],1),r("a-row",{attrs:{gutter:12}},[r("a-col",{attrs:{md:24,lg:24}},[r("a-form-item",{attrs:{label:e.$t("label.capacity")}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["capacity"],expression:"['capacity']"}]})],1)],1)],1),r("div",{staticClass:"action-button",attrs:{span:24}},[r("a-button",{attrs:{loading:e.loading},on:{click:e.onCloseAction}},[e._v(e._s(this.$t("label.cancel")))]),r("a-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(this.$t("label.ok")))])],1)],1)],1)},n=[],i=(r("a15b"),r("b0c0"),r("b64b"),r("d3b7"),r("f3f3")),s=(r("96cf"),r("c964")),o=r("365c"),u={name:"AddSrxFirewall",props:{resource:{type:Object,default:function(){}},action:{type:Object,default:function(){}}},data:function(){return{loading:!1,nsp:{}}},computed:{networkDeviceType:function(){var e=[];return e.push({id:"JuniperSRXFirewall",description:"label.srx.firewall"}),e}},beforeCreate:function(){this.form=this.$form.createForm(this)},mounted:function(){this.resource&&Object.keys(this.resource).length>0&&(this.nsp=this.resource)},inject:["provideCloseAction","provideReload","provideCloseAction","parentPollActionCompletion"],methods:{onCloseAction:function(){this.provideCloseAction()},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r,a){var n,s,o,u,l,c,p,d,m,v,b,f,w,h,g,k;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=2;break}return e.abrupt("return");case 2:if(n={},n.physicalnetworkid=t.resource.physicalnetworkid,n.username=a.username,n.password=a.password,n.networkdevicetype=a.networkdevicetype,s=[],o=a.ip,s.push("https://"+o),u=!1,l=a.publicinterface?a.publicinterface:null,null!=l&&l.length>0&&(u?s.push("&"):(s.push("?"),u=!0),s.push("publicinterface="+l)),c=a.privateinterface?a.privateinterface:null,null!=c&&c.length>0&&(u?s.push("&"):(s.push("?"),u=!0),s.push("privateinterface="+l)),p=a.usageinterface?a.usageinterface:null,null!=p&&p.length>0&&(u?s.push("&"):(s.push("?"),u=!0),s.push("usageinterface="+p)),d=a.numretries?a.numretries:null,null!=d&&d.length>0&&(u?s.push("&"):(s.push("?"),u=!0),s.push("numretries="+d)),m=a.timeout?a.timeout:null,null!=m&&m.length>0&&(u?s.push("&"):(s.push("?"),u=!0),s.push("timeout="+m)),v=a.publicnetwork?a.publicnetwork:null,null!=v&&v.length>0&&(u?s.push("&"):(s.push("?"),u=!0),s.push("publicnetwork="+v)),b=a.privatenetwork?a.privatenetwork:null,null!=b&&b.length>0&&(u?s.push("&"):(s.push("?"),u=!0),s.push("privatenetwork="+b)),f=a.capacity?a.capacity:null,null!=f&&f.length>0&&(u?s.push("&"):(s.push("?"),u=!0),s.push("lbdevicecapacity="+f)),w=!!a.dedicated&&a.dedicated,u?s.push("&"):(s.push("?"),u=!0),s.push("lbdevicededicated="+w),n.url=s.join(""),t.loading=!0,e.prev=32,t.nsp.id){e.next=41;break}return h={},h.name=t.resource.name,h.physicalnetworkid=t.resource.physicalnetworkid,e.next=39,t.addNetworkServiceProvider(h);case 39:g=e.sent,t.nsp=Object(i["a"])(Object(i["a"])({},t.resource),g);case 41:return n.id=t.nsp.id,e.next=44,t.addSrxFirewall(n);case 44:if(k=e.sent,!k){e.next=50;break}return e.next=48,t.$store.dispatch("AddAsyncJob",{title:t.$t(t.action.label),jobid:k,description:t.$t(t.nsp.name),status:"progress"});case 48:return e.next=50,t.parentPollActionCompletion(k,t.action);case 50:return t.loading=!1,e.next=53,t.provideCloseAction();case 53:e.next=59;break;case 55:e.prev=55,e.t0=e["catch"](32),t.loading=!1,t.$notification.error({message:t.$t("message.request.failed"),description:e.t0.response&&e.t0.response.headers&&e.t0.response.headers["x-description"]||e.t0.message});case 59:case"end":return e.stop()}}),e,null,[[32,55]])})));return function(t,r){return e.apply(this,arguments)}}())},addNetworkServiceProvider:function(e){var t=this;return new Promise((function(r,a){Object(o["a"])("addNetworkServiceProvider",e).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=n.addnetworkserviceproviderresponse.jobid,!i){e.next=9;break}return e.next=4,t.pollJob(i);case 4:if(s=e.sent,2!==s.jobstatus){e.next=8;break}return a(s.jobresult.errortext),e.abrupt("return");case 8:r(s.jobresult.networkserviceprovider);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){a(e)}))}))},addSrxFirewall:function(e){return new Promise((function(t,r){Object(o["a"])("addSrxFirewall",e).then((function(e){var r=e.addsrxfirewallresponse.jobid||null;t(r)})).catch((function(e){r(e)}))}))},pollJob:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var r=setInterval((function(){Object(o["a"])("queryAsyncJobResult",{jobId:e}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=a.queryasyncjobresultresponse,0!==n.jobstatus){e.next=3;break}return e.abrupt("return");case 3:clearInterval(r),t(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),1e3)})));case 1:case"end":return t.stop()}}),t)})))()}}},l=u,c=(r("f188"),r("2877")),p=Object(c["a"])(l,a,n,!1,null,"35bdef18",null);t["default"]=p.exports},f188:function(e,t,r){"use strict";var a=r("4aa1"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-6db3223c.462c99e6.js.map