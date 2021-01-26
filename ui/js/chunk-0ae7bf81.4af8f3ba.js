(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ae7bf81"],{1723:function(t,e,s){},"474f":function(t,e,s){"use strict";var c=s("1723"),a=s.n(c);a.a},6253:function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form"},[t.loading?s("div",{staticClass:"loading"},[s("a-icon",{attrs:{type:"loading"}})],1):t._e(),s("div",{staticClass:"form__item"},[s("p",{staticClass:"form__label"},[t._v(t._s(t.$t("label.operation")))]),s("a-select",{attrs:{defaultValue:t.$t("label.add")},on:{change:t.fetchData},model:{value:t.selectedOperation,callback:function(e){t.selectedOperation=e},expression:"selectedOperation"}},[s("a-select-option",{attrs:{value:t.$t("label.add")}},[t._v(t._s(t.$t("label.add")))]),s("a-select-option",{attrs:{value:t.$t("label.remove")}},[t._v(t._s(t.$t("label.remove")))]),s("a-select-option",{attrs:{value:t.$t("label.reset")}},[t._v(t._s(t.$t("label.reset")))])],1)],1),t.selectedOperation!==t.$t("label.reset")?[s("div",{staticClass:"form__item"},[s("p",{staticClass:"form__label"},[s("span",{staticClass:"required"},[t._v("*")]),t._v(" "+t._s(t.$t("label.sharewith"))+" ")]),s("a-select",{attrs:{defaultValue:t.$t("label.account")},on:{change:t.fetchData},model:{value:t.selectedShareWith,callback:function(e){t.selectedShareWith=e},expression:"selectedShareWith"}},[s("a-select-option",{attrs:{value:t.$t("label.account")}},[t._v(t._s(t.$t("label.account")))]),s("a-select-option",{attrs:{value:t.$t("label.project")}},[t._v(t._s(t.$t("label.project")))])],1)],1),t.selectedShareWith===t.$t("label.account")?[s("div",{staticClass:"form__item"},[s("p",{staticClass:"form__label"},[t._v(" "+t._s(t.$t("label.account"))+" ")]),t.showAccountSelect?s("div",[s("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:"Select Accounts",value:t.selectedAccounts},on:{change:t.handleChange}},t._l(t.accountsList,(function(e){return s("a-select-option",{key:e.name},[t._v(" "+t._s(e.name)+" ")])})),1)],1):s("div",[s("a-input",{attrs:{placeholder:t.$t("label.comma.separated.list.description")},model:{value:t.selectedAccountsList,callback:function(e){t.selectedAccountsList=e},expression:"selectedAccountsList"}})],1)])]:[s("div",{staticClass:"form__item"},[s("p",{staticClass:"form__label"},[t._v(" "+t._s(t.$t("label.project"))+" ")]),s("a-select",{staticStyle:{width:"100%"},attrs:{mode:"multiple",placeholder:t.$t("label.select.projects"),value:t.selectedProjects},on:{change:t.handleChange}},t._l(t.projectsList,(function(e){return s("a-select-option",{key:e.name},[t._v(" "+t._s(e.name)+" ")])})),1)],1)]]:t._e(),s("div",{staticClass:"actions"},[s("a-button",{on:{click:t.closeModal}},[t._v(" "+t._s(t.$t("label.cancel"))+" ")]),s("a-button",{attrs:{type:"primary"},on:{click:t.submitData}},[t._v(" "+t._s(t.$t("label.ok"))+" ")])],1)],2)},a=[],i=(s("99af"),s("4de4"),s("caad"),s("a15b"),s("d81d"),s("b0c0"),s("d3b7"),s("2532"),s("fc11")),o=s("365c"),n={name:"UpdateTemplateIsoPermissions",props:{resource:{type:Object,required:!0}},inject:["parentFetchData"],data:function(){return{projects:[],accounts:[],permittedAccounts:[],permittedProjects:[],selectedAccounts:[],selectedProjects:[],selectedAccountsList:"",selectedOperation:this.$t("label.add"),selectedShareWith:this.$t("label.account"),accountError:!1,projectError:!1,showAccountSelect:!0,loading:!1,isImageTypeIso:!1}},computed:{accountsList:function(){var t=this;return this.accounts.length>0?this.accounts.filter((function(e){return t.selectedOperation===t.$t("label.add")?!t.permittedAccounts.includes(e.name):t.permittedAccounts.includes(e.name)})):this.accounts},projectsList:function(){var t=this;return this.projects>0?this.projects.filter((function(e){return t.selectedOperation===t.$t("label.add")?!t.permittedProjects.includes(e.id):t.permittedProjects.includes(e.id)})):this.projects}},mounted:function(){this.isImageTypeIso="iso"===this.$route.meta.name,this.fetchData()},methods:{fetchData:function(){this.isImageTypeIso?this.fetchIsoPermissions():this.fetchTemplatePermissions(),this.selectedShareWith===this.$t("label.account")?(this.selectedAccounts=[],this.fetchAccounts()):(this.selectedProjects=[],this.fetchProjects()),this.showAccountSelect=this.$store.getters.features.allowuserviewalldomainaccounts||!("User"===this.$store.getters.userInfo.roletype)},fetchAccounts:function(){var t=this;this.loading=!0,Object(o["a"])("listAccounts",{listall:!0}).then((function(e){t.accounts=e.listaccountsresponse.account.filter((function(e){return e.name!==t.resource.account}))})).finally((function(e){t.loading=!1}))},fetchProjects:function(){var t=this;Object(o["a"])("listProjects",{details:"min",listall:!0}).then((function(e){t.projects=e.listprojectsresponse.project})).finally((function(e){t.loading=!1}))},fetchTemplatePermissions:function(){var t=this;this.loading=!0,Object(o["a"])("listTemplatePermissions",{id:this.resource.id}).then((function(e){var s=e.listtemplatepermissionsresponse.templatepermission;s&&s.account&&(t.permittedAccounts=s.account),s&&s.projectids&&(t.permittedProjects=s.projectids)})).finally((function(e){t.loading=!1}))},fetchIsoPermissions:function(){var t=this;this.loading=!0,Object(o["a"])("listIsoPermissions",{id:this.resource.id}).then((function(e){var s=e.listtemplatepermissionsresponse.templatepermission;s&&s.account&&(t.permittedAccounts=s.account),s&&s.projectids&&(t.permittedProjects=s.projectids)})).finally((function(e){t.loading=!1}))},handleChange:function(t){this.selectedOperation!==this.$t("label.add")&&this.selectedOperation!==this.$t("label.remove")||(this.selectedShareWith===this.$t("label.account")?this.selectedAccounts=t:this.selectedProjects=t)},closeModal:function(){this.$parent.$parent.close()},submitData:function(){var t,e=this,s="",c="";this.selectedShareWith===this.$t("label.account")?(s="accounts",c=this.showAccountSelect?this.selectedAccounts.map((function(t){return t})).join(","):this.selectedAccountsList):(s="projectids",c=this.projects.filter((function(t){return e.selectedProjects.includes(t.name)})).map((function(t){return t.id})).join(",")),this.loading=!0;var a=this.isImageTypeIso?"updateIsoPermissions":"updateTemplatePermissions",n=this.isImageTypeIso?"ISO":"template";Object(o["a"])(a,(t={},Object(i["a"])(t,s,c),Object(i["a"])(t,"id",this.resource.id),Object(i["a"])(t,"ispublic",this.resource.isPublic),Object(i["a"])(t,"isextractable",this.resource.isExtractable),Object(i["a"])(t,"featured",this.resource.featured),Object(i["a"])(t,"op",this.selectedOperation.toLowerCase()),t)).then((function(t){e.$notification.success({message:"".concat(e.$t("label.success.updated")," ").concat(n," ").concat(e.$t("label.permissions"))}),e.closeModal(),e.parentFetchData()})).catch((function(t){e.$notifyError(t)})).finally((function(t){e.loading=!1}))}}},l=n,r=(s("474f"),s("2877")),u=Object(r["a"])(l,c,a,!1,null,"39b70c3f",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0ae7bf81.4af8f3ba.js.map