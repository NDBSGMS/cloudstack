(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa214"],{1065:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-table",{attrs:{size:"small",loading:t.loading,columns:t.columns,dataSource:t.dataSource,rowKey:function(t){return t.name},pagination:!1,scroll:{y:"55vh"}},scopedSlots:t._u([{key:"quota",fn:function(e){return[null!==e?a("span",[t._v(t._s(t.currency+" "+e))]):t._e()]}},{key:"credit",fn:function(e){return[null!==e?a("span",[t._v(t._s(t.currency+" "+e))]):t._e()]}}])})],1)},c=[],r=(a("d81d"),a("d3b7"),a("96cf"),a("c964")),u=a("365c"),o=a("c1df"),i=a.n(o),s={name:"QuotaBalance",props:{resource:{type:Object,required:!0},tab:{type:String,default:function(){return""}}},data:function(){return{loading:!1,pattern:"YYYY-MM-DD",currency:"",dataSource:[],account:null}},computed:{columns:function(){return[{title:this.$t("label.date"),dataIndex:"date",width:"calc(100% / 3)",scopedSlots:{customRender:"date"}},{title:this.$t("label.quota.value"),dataIndex:"quota",width:"calc(100% / 3)",scopedSlots:{customRender:"quota"}},{title:this.$t("label.credit"),dataIndex:"credit",width:"calc(100% / 3)",scopedSlots:{customRender:"credit"}}]}},watch:{tab:function(t,e){this.tab=t,"quota.statement.balance"===this.tab&&this.fetchData()}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dataSource=[],t.loading=!0,t.account=t.$route.query&&t.$route.query.account?t.$route.query.account:null,e.prev=3,e.next=6,t.fetchResource();case 6:return a=e.sent,e.next=9,t.quotaBalance(a);case 9:return n=e.sent,t.currency=n.currency,e.next=13,t.createDataSource(n);case 13:t.dataSource=e.sent,t.loading=!1,e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](3),console.log(e.t0),t.loading=!1;case 21:case"end":return e.stop()}}),e,null,[[3,17]])})))()},createDataSource:function(t){var e=this,a=[],n=t.credits||[];return a.push({date:i()(t.enddate).format(this.pattern),quota:t.endquota,credit:null}),a.push({date:i()(t.startdate).format(this.pattern),quota:t.startquota,credit:null}),n.map((function(t){a.push({date:i()(t.updated_on).format(e.pattern),quota:null,credit:t.credits})})),a},fetchResource:function(){var t=this;return new Promise((function(e,a){var n={};n.domainid=t.resource.domainid,n.account=t.account,Object(u["a"])("quotaBalance",n).then((function(t){var a=t.quotabalanceresponse.balance||{};e(a)})).catch((function(t){a(t)}))}))},quotaBalance:function(t){var e=this;return new Promise((function(a,n){var c={};c.domainid=e.resource.domainid,c.account=e.account,c.startdate=i()(e.resource.startdate).format(e.pattern),c.enddate=i()(t.startdate).format(e.pattern),Object(u["a"])("quotaBalance",c).then((function(t){var e=t.quotabalanceresponse.balance||{};a(e)})).catch((function(t){n(t)}))}))}}},d=s,l=a("2877"),f=Object(l["a"])(d,n,c,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0aa214.a9fc02aa.js.map