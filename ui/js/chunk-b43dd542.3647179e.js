(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b43dd542"],{dc1e:function(e,t,s){"use strict";var a=s("f619"),i=s.n(a);i.a},ebc5:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=this,s=t.$createElement,a=t._self._c||s;return a("a-spin",{attrs:{spinning:t.loading}},[a("div",{staticClass:"form"},[a("div",{staticClass:"form__item"},[a("div",{staticClass:"form__label"},[a("span",{staticClass:"required"},[t._v("* ")]),t._v(t._s(t.$t("label.zonenamelabel")))]),a("a-select",{on:{change:t.fetchPods},model:{value:t.zoneId,callback:function(e){t.zoneId=e},expression:"zoneId"}},t._l(t.zonesList,(function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("div",{staticClass:"form__item"},[a("div",{staticClass:"form__label"},[a("span",{staticClass:"required"},[t._v("* ")]),t._v(t._s(t.$t("label.podname")))]),a("a-select",{on:{change:t.fetchClusters},model:{value:t.podId,callback:function(e){t.podId=e},expression:"podId"}},t._l(t.podsList,(function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("div",{staticClass:"form__item"},[a("div",{staticClass:"form__label"},[a("span",{staticClass:"required"},[t._v("* ")]),t._v(t._s(t.$t("label.clustername")))]),a("a-select",{on:{change:t.handleChangeCluster},model:{value:t.clusterId,callback:function(e){t.clusterId=e},expression:"clusterId"}},t._l(t.clustersList,(function(e){return a("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),a("div",{staticClass:"form__item required-field"},[a("div",{staticClass:"form__label"},[a("span",{staticClass:"required"},[t._v("* ")]),t._v(t._s("VMware"===t.selectedClusterHyperVisorType?t.$t("label.esx.host"):t.$t("label.hostnamelabel")))]),a("span",{staticClass:"required required-label"},[t._v(t._s(t.$t("label.required")))]),a("a-input",{model:{value:t.hostname,callback:function(e){t.hostname=e},expression:"hostname"}})],1),"VMware"!==t.selectedClusterHyperVisorType?a("div",{staticClass:"form__item required-field"},[a("div",{staticClass:"form__label"},[a("span",{staticClass:"required"},[t._v("* ")]),t._v(t._s(t.$t("label.username")))]),a("span",{staticClass:"required required-label"},[t._v(t._s(t.$t("label.required")))]),a("a-input",{attrs:{placeholder:t.placeholder.username},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1):t._e(),"VMware"!==t.selectedClusterHyperVisorType?a("div",{staticClass:"form__item required-field"},[a("div",{staticClass:"form__label"},[a("span",{staticClass:"required"},[t._v("* ")]),t._v(t._s(t.$t("label.password")))]),a("span",{staticClass:"required required-label"},[t._v(t._s(t.$t("label.required")))]),a("a-input",{attrs:{placeholder:t.placeholder.password,type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1):t._e(),"Ovm3"===t.selectedClusterHyperVisorType?[a("div",{staticClass:"form__item"},[a("div",{staticClass:"form__label"},[t._v(t._s(t.$t("label.agent.username")))]),a("a-input",{model:{value:t.agentusername,callback:function(e){t.agentusername=e},expression:"agentusername"}})],1),a("div",{staticClass:"form__item required-field"},[a("div",{staticClass:"form__label"},[a("span",{staticClass:"required"},[t._v("* ")]),t._v(t._s(t.$t("label.agent.password")))]),a("span",{staticClass:"required required-label"},[t._v(t._s(t.$t("label.required")))]),a("a-input",{attrs:{type:"password"},model:{value:t.agentpassword,callback:function(e){t.agentpassword=e},expression:"agentpassword"}})],1),a("div",{staticClass:"form__item"},[a("div",{staticClass:"form__label"},[t._v(t._s(t.$t("label.agentport")))]),a("a-input",{model:{value:t.agentport,callback:function(e){t.agentport=e},expression:"agentport"}})],1)]:t._e(),a("div",{staticClass:"form__item"},[a("div",{staticClass:"form__label"},[t._v(t._s(t.$t("label.hosttags")))]),a("a-select",{attrs:{mode:"tags",placeholder:t.placeholder.hosttags},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}},t._l(t.hostTagsList,(function(e){return a("a-select-option",{key:e.name},[t._v(t._s(e.name))])})),1)],1),a("div",{staticClass:"form__item"},[a("div",{staticClass:"form__label"},[t._v(t._s(t.$t("label.isdedicated")))]),a("a-checkbox",{on:{change:t.toggleDedicated}})],1),t.showDedicated?[a("DedicateDomain",{attrs:{error:t.domainError},on:{domainChange:function(e){return t.dedicatedDomainId=e},accountChange:function(e){return t.dedicatedAccount=e}}})]:t._e(),a("a-divider"),a("div",{staticClass:"actions"},[a("a-button",{on:{click:function(){return e.$parent.$parent.close()}}},[t._v(t._s(t.$t("label.cancel")))]),a("a-button",{attrs:{type:"primary"},on:{click:t.handleSubmitForm}},[t._v(t._s(t.$t("label.ok")))])],1)],2)])},i=[],n=(s("a4d3"),s("e01a"),s("99af"),s("7db0"),s("4160"),s("c975"),s("a15b"),s("b0c0"),s("b64b"),s("d3b7"),s("159b"),s("365c")),r=s("7e77"),o={name:"HostAdd",components:{DedicateDomain:r["a"]},props:{resource:{type:Object,required:!0}},inject:["parentFetchData","parentToggleLoading"],data:function(){return{loading:!1,zoneId:null,podId:null,clusterId:null,hostname:null,username:null,password:null,selectedTags:[],zonesList:[],clustersList:[],podsList:[],hostTagsList:[],url:null,agentusername:null,agentpassword:null,agentport:null,selectedCluster:null,selectedClusterHyperVisorType:null,showDedicated:!1,dedicatedDomainId:null,dedicatedAccount:null,domainError:!1,params:[],placeholder:{username:null,password:null,hosttags:null}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.fetchZones(),this.fetchHostTags(),this.params=this.$store.getters.apis.addHost.params,Object.keys(this.placeholder).forEach((function(t){e.returnPlaceholder(t)}))},fetchZones:function(){var e=this;this.loading=!0,Object(n["a"])("listZones").then((function(t){e.zonesList=t.listzonesresponse.zone||[],e.zoneId=e.zonesList[0].id||null,e.fetchPods()})).catch((function(t){e.$notifyError(t)})).finally((function(){e.loading=!1}))},fetchPods:function(){var e=this;this.loading=!0,Object(n["a"])("listPods",{zoneid:this.zoneId}).then((function(t){e.podsList=t.listpodsresponse.pod||[],e.podId=e.podsList[0].id||null,e.fetchClusters()})).catch((function(t){e.$notifyError(t),e.podsList=[],e.podId=""})).finally((function(){e.loading=!1}))},fetchClusters:function(){var e=this;this.loading=!0,Object(n["a"])("listClusters",{podid:this.podId}).then((function(t){e.clustersList=t.listclustersresponse.cluster||[],e.clusterId=e.clustersList[0].id||null,e.clusterId&&e.handleChangeCluster()})).catch((function(t){e.$notifyError(t),e.clustersList=[],e.clusterId=null})).finally((function(){e.loading=!1}))},fetchHostTags:function(){var e=this;this.loading=!0,Object(n["a"])("listHostTags").then((function(t){e.hostTagsList=t.listhosttagsresponse.hosttag||[]})).catch((function(t){e.$notifyError(t),e.hostTagsList=[]})).finally((function(){e.loading=!1}))},handleChangeCluster:function(){var e=this;this.selectedCluster=this.clustersList.find((function(t){return t.id===e.clusterId})),this.selectedClusterHyperVisorType=this.selectedCluster.hypervisortype},toggleDedicated:function(){this.dedicatedDomainId=null,this.dedicatedAccount=null,this.showDedicated=!this.showDedicated},handleSubmitForm:function(){var e=this,t=document.querySelectorAll(".required-field");if(t.forEach((function(e){var t=e.querySelector(".ant-input");t.value?t.parentNode.querySelector(".required-label").classList.remove("required-label--error"):t.parentNode.querySelector(".required-label").classList.add("required-label--error")})),!(this.$el.querySelectorAll(".required-label--error").length>0)){"VMware"===this.selectedClusterHyperVisorType&&(this.username="",this.password=""),-1===this.hostname.indexOf("http://")?this.url="http://".concat(this.hostname):this.url=this.hostname;var s={zoneid:this.zoneId,podid:this.podId,clusterid:this.clusterId,hypervisor:this.selectedClusterHyperVisorType,clustertype:this.selectedCluster.clustertype,hosttags:this.selectedTags.join(),username:this.username,password:this.password,url:this.url,agentusername:this.agentusername,agentpassword:this.agentpassword,agentport:this.agentport};Object.keys(s).forEach((function(e){return null==s[e]&&delete s[e]})),this.loading=!0,Object(n["a"])("addHost",{},"POST",s).then((function(t){var s=t.addhostresponse.host[0]||{};s.id&&e.showDedicated&&e.dedicateHost(s.id),e.parentFetchData(),e.$parent.$parent.close()})).catch((function(t){e.$notification.error({message:"".concat(e.$t("label.error")," ").concat(t.response.status),description:t.response.data.addhostresponse.errortext,duration:0})})).finally((function(){e.loading=!1}))}},dedicateHost:function(e){var t=this;this.loading=!0,Object(n["a"])("dedicateHost",{hostId:e,domainId:this.dedicatedDomainId,account:this.dedicatedAccount}).then((function(e){t.$pollJob({jobId:e.dedicatehostresponse.jobid,successMessage:t.$t("message.host.dedicated"),successMethod:function(){t.loading=!1,t.$store.dispatch("AddAsyncJob",{title:t.$t("message.host.dedicated"),jobid:e.dedicatehostresponse.jobid,description:"".concat(t.$t("label.domainid")," : ").concat(t.dedicatedDomainId),status:"progress"})},errorMessage:t.$t("error.dedicate.host.failed"),errorMethod:function(){t.loading=!1},loadingMessage:t.$t("message.dedicating.host"),catchMessage:t.$t("error.fetching.async.job.result"),catchMethod:function(){t.loading=!1}})})).catch((function(e){t.$notification.error({message:"".concat(t.$t("label.error")," ").concat(e.response.status),description:e.response.data.errorresponse.errortext,duration:0}),t.loading=!1}))},returnPlaceholder:function(e){var t=this;this.params.find((function(s){s.name===e&&(t.placeholder[e]=s.description)}))}}},l=o,d=(s("dc1e"),s("2877")),c=Object(d["a"])(l,a,i,!1,null,"359c0be8",null);t["default"]=c.exports},f619:function(e,t,s){}}]);
//# sourceMappingURL=chunk-b43dd542.3647179e.js.map