(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b510c82"],{"32a2":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"form-layout"},[t("a-form",{attrs:{form:e.form,layout:"vertical"},on:{submit:e.handleSubmit}},[t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.ip")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ip",{rules:[{required:!0,message:e.$t("message.error.required.input")}]}],expression:"['ip', {\n              rules: [{ required: true, message: $t('message.error.required.input') }]\n            }]"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.username")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:e.$t("message.error.required.input")}]}],expression:"['username', {\n              rules: [{ required: true, message: $t('message.error.required.input') }]\n            }]"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.password")}},[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("message.error.required.input")}]}],expression:"['password', {\n              rules: [{ required: true, message: $t('message.error.required.input') }]\n            }]"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.networkdevicetype")}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["networkdevicetype",{rules:[{required:!0,message:e.$t("message.error.select")}]}],expression:"['networkdevicetype', {\n              rules: [{ required: true, message: $t('message.error.select') }]\n            }]"}]},e._l(e.networkDeviceType,(function(r){return t("a-select-option",{key:r.id},[e._v(e._s(e.$t(r.description)))])})),1)],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.publicinterface")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["publicinterface"],expression:"['publicinterface']"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.privateinterface")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["privateinterface"],expression:"['privateinterface']"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.gslbprovider")}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["gslbprovider",{initialValue:!1}],expression:"['gslbprovider', { initialValue: false }]"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.gslbproviderpublicip")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["gslbproviderpublicip"],expression:"['gslbproviderpublicip']"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.gslbproviderprivateip")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["gslbproviderprivateip"],expression:"['gslbproviderprivateip']"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:12,lg:12}},[t("a-form-item",{attrs:{label:e.$t("label.numretries")}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["numretries",{initialValue:2}],expression:"['numretries', { initialValue: 2 }]"}],staticStyle:{width:"100%"}})],1)],1),t("a-col",{attrs:{md:12,lg:12}},[t("a-form-item",{attrs:{label:e.$t("label.dedicated")}},[t("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["dedicated",{initialValue:!1}],expression:"['dedicated', { initialValue: false }]"}]})],1)],1)],1),t("a-row",{attrs:{gutter:12}},[t("a-col",{attrs:{md:24,lg:24}},[t("a-form-item",{attrs:{label:e.$t("label.capacity")}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["capacity"],expression:"['capacity']"}]})],1)],1)],1),t("div",{staticClass:"action-button",attrs:{span:24}},[t("a-button",{attrs:{loading:e.loading},on:{click:e.onCloseAction}},[e._v(e._s(this.$t("label.cancel")))]),t("a-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleSubmit}},[e._v(e._s(this.$t("label.ok")))])],1)],1)],1)},i=[],n=(t("a15b"),t("b0c0"),t("b64b"),t("d3b7"),t("f3f3")),s=(t("96cf"),t("c964")),o=t("365c"),c={name:"AddNetscalerLoadBalancer",props:{resource:{type:Object,default:function(){}},action:{type:Object,default:function(){}}},data:function(){return{loading:!1,nsp:{}}},computed:{networkDeviceType:function(){var e=[];return e.push({id:"NetscalerMPXLoadBalancer",description:"label.netscaler.mpx"}),e.push({id:"NetscalerVPXLoadBalancer",description:"label.netscaler.vpx"}),e.push({id:"NetscalerSDXLoadBalancer",description:"label.netscaler.sdx"}),e}},beforeCreate:function(){this.form=this.$form.createForm(this)},mounted:function(){this.resource&&Object.keys(this.resource).length>0&&(this.nsp=this.resource)},inject:["provideCloseAction","provideReload","provideCloseAction","parentPollActionCompletion"],methods:{onCloseAction:function(){this.provideCloseAction()},handleSubmit:function(e){var r=this;e.preventDefault(),this.form.validateFields(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,a){var i,s,o,c,l,u,d,p,m,v,b,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:if(i={},i.physicalnetworkid=r.resource.physicalnetworkid,i.username=a.username,i.password=a.password,i.networkdevicetype=a.networkdevicetype,i.gslbprovider=!!a.gslbprovider&&a.gslbprovider,i.gslbproviderpublicip=a.gslbproviderpublicip?a.gslbproviderpublicip:null,i.gslbproviderprivateip=a.gslbproviderprivateip?a.gslbproviderprivateip:null,s=[],o=a.ip,s.push("https://"+o),c=!1,l=a.publicinterface?a.publicinterface:null,null!=l&&l.length>0&&(c?s.push("&"):(s.push("?"),c=!0),s.push("publicinterface="+l)),u=a.privateinterface?a.privateinterface:null,null!=u&&u.length>0&&(c?s.push("&"):(s.push("?"),c=!0),s.push("privateinterface="+l)),d=a.numretries?a.numretries:null,null!=d&&d.length>0&&(c?s.push("&"):(s.push("?"),c=!0),s.push("numretries="+d)),p=a.capacity?a.capacity:null,null!=p&&p.length>0&&(c?s.push("&"):(s.push("?"),c=!0),s.push("lbdevicecapacity="+p)),m=!!a.dedicated&&a.dedicated,c?s.push("&"):(s.push("?"),c=!0),s.push("lbdevicededicated="+m),i.url=s.join(""),r.loading=!0,e.prev=27,r.nsp.id){e.next=36;break}return v={},v.name=r.resource.name,v.physicalnetworkid=r.resource.physicalnetworkid,e.next=34,r.addNetworkServiceProvider(v);case 34:b=e.sent,r.nsp=Object(n["a"])(Object(n["a"])({},r.resource),b);case 36:return i.id=r.nsp.id,e.next=39,r.addNetscalerLoadBalancer(i);case 39:if(f=e.sent,!f){e.next=45;break}return e.next=43,r.$store.dispatch("AddAsyncJob",{title:r.$t(r.action.label),jobid:f,description:r.$t(r.nsp.name),status:"progress"});case 43:return e.next=45,r.parentPollActionCompletion(f,r.action);case 45:return r.loading=!1,e.next=48,r.provideCloseAction();case 48:e.next=54;break;case 50:e.prev=50,e.t0=e["catch"](27),r.loading=!1,r.$notification.error({message:r.$t("message.request.failed"),description:e.t0.response&&e.t0.response.headers&&e.t0.response.headers["x-description"]||e.t0.message});case 54:case"end":return e.stop()}}),e,null,[[27,50]])})));return function(r,t){return e.apply(this,arguments)}}())},addNetworkServiceProvider:function(e){var r=this;return new Promise((function(t,a){Object(o["a"])("addNetworkServiceProvider",e).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(i){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=i.addnetworkserviceproviderresponse.jobid,!n){e.next=9;break}return e.next=4,r.pollJob(n);case 4:if(s=e.sent,2!==s.jobstatus){e.next=8;break}return a(s.jobresult.errortext),e.abrupt("return");case 8:t(s.jobresult.networkserviceprovider);case 9:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).catch((function(e){a(e)}))}))},addNetscalerLoadBalancer:function(e){return new Promise((function(r,t){Object(o["a"])("addNetscalerLoadBalancer",e).then((function(e){var t=e.addnetscalerloadbalancerresponse.jobid||null;r(t)})).catch((function(e){t(e)}))}))},pollJob:function(e){return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r){var t=setInterval((function(){Object(o["a"])("queryAsyncJobResult",{jobId:e}).then(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=a.queryasyncjobresultresponse,0!==i.jobstatus){e.next=3;break}return e.abrupt("return");case 3:clearInterval(t),r(i);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}),1e3)})));case 1:case"end":return r.stop()}}),r)})))()}}},l=c,u=(t("9a95"),t("2877")),d=Object(u["a"])(l,a,i,!1,null,"87062ab6",null);r["default"]=d.exports},"935e":function(e,r,t){},"9a95":function(e,r,t){"use strict";var a=t("935e"),i=t.n(a);i.a}}]);
//# sourceMappingURL=chunk-5b510c82.f2826a6b.js.map