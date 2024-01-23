"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[30174],{3905:(t,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>o});var e=a(67294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function p(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function i(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=e.createContext({}),d=function(t){var n=e.useContext(m),a=n;return t&&(a="function"==typeof t?t(n):p(p({},n),t)),a},u=function(t){var n=d(t.components);return e.createElement(m.Provider,{value:n},t.children)},k="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},N=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,o=k["".concat(m,".").concat(N)]||k[N]||g[N]||l;return a?e.createElement(o,p(p({ref:n},u),{},{components:a})):e.createElement(o,p({ref:n},u))}));function o(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return e.createElement.apply(null,p)}return e.createElement.apply(null,a)}N.displayName="MDXCreateElement"},17743:(t,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>m,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>k});a(67294);var e=a(3905);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):function(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})),t}function p(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},m="GroupApplicationInfo",d={unversionedId:"class/group/groupApplicationInfo",id:"class/group/groupApplicationInfo",title:"GroupApplicationInfo",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/class/group/groupApplicationInfo.mdx",sourceDirName:"class/group",slug:"/class/group/groupApplicationInfo",permalink:"/zh-Hans/sdks/class/group/groupApplicationInfo",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/class/group/groupApplicationInfo.mdx",tags:[],version:"current",lastUpdatedAt:1705991458,formattedLastUpdatedAt:"2024\u5e741\u670823\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"\u7fa4\u7ec4\u76f8\u5173",permalink:"/zh-Hans/sdks/class/group/"},next:{title:"GroupInfo",permalink:"/zh-Hans/sdks/class/group/groupInfo"}},u={},k=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"GroupApplicationInfo",id:"groupapplicationinfo-1",level:3},{value:"OIMGroupApplicationInfo",id:"oimgroupapplicationinfo",level:3},{value:"GroupApplicationInfo",id:"groupapplicationinfo-2",level:3},{value:"GroupApplicationItem",id:"groupapplicationitem",level:3},{value:"GroupApplicationItem",id:"groupapplicationitem-1",level:3}],g=t=>function(n){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",n)},N=g("Tabs"),o=g("TabItem"),s={toc:k},b="wrapper";function c(t){var{components:n}=t,a=p(t,["components"]);return(0,e.kt)(b,l(function(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},e=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),e.forEach((function(n){r(t,n,a[n])}))}return t}({},s,a),{components:n,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"groupapplicationinfo"},"GroupApplicationInfo"),(0,e.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,e.kt)("admonition",{type:"info"},(0,e.kt)("p",{parentName:"admonition"},"\u7fa4\u7533\u8bf7\u4fe1\u606f\u3002")),(0,e.kt)(N,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,e.kt)(o,{value:"Flutter",mdxType:"TabItem"},(0,e.kt)("h3",{id:"groupapplicationinfo-1"},"GroupApplicationInfo"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupName"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"notification"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u516c\u544a")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"introduction"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7b80\u4ecb")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"status"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u72b6\u6001\uff1a0 \u6b63\u5e38\uff0c1 \u88ab\u5c01\uff0c2 \u89e3\u6563\uff0c3 \u7981\u8a00")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"creatorUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5efa\u7fa4\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupType"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupType"},"int")),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7c7b\u578b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u6570\u91cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"nickname"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"int")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u52a0\u7fa4\u7684\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fdb\u7fa4\u7684\u7528\u6237 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fd1\u671f\u7533\u8bf7\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"joinSource"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/joinSource"},"int")),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u65b9\u5f0f 2\uff1a\u901a\u8fc7\u9080\u8bf7 3\uff1a\u901a\u8fc7\u641c\u7d22 4\uff1a\u901a\u8fc7\u4e8c\u7ef4\u7801")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"inviterUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u7fa4\u7528\u6237 ID"))))),(0,e.kt)(o,{value:"iOS",mdxType:"TabItem"},(0,e.kt)("h3",{id:"oimgroupapplicationinfo"},"OIMGroupApplicationInfo"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupName"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"notification"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u516c\u544a")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"introduction"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7b80\u4ecb")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"status"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupStatus"},"GroupStatus")),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u72b6\u6001")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"creatorUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5efa\u7fa4\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupType"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupType"},"GroupType")),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7c7b\u578b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,e.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u6570\u91cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"nickname"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"OIMApplicationStatus")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u52a0\u7fa4\u7684\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqTime"),(0,e.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fdb\u7fa4\u7684\u7528\u6237 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledTime"),(0,e.kt)("td",{parentName:"tr",align:null},"NSInteger"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fd1\u671f\u7533\u8bf7\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"joinSource"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/joinSource"},"OIMJoinType")),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u65b9\u5f0f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"inviterUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"NSString"),(0,e.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u7fa4\u7528\u6237 ID"))))),(0,e.kt)(o,{value:"Android",mdxType:"TabItem"},(0,e.kt)("h3",{id:"groupapplicationinfo-2"},"GroupApplicationInfo"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupName"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"notification"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u516c\u544a")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"introduction"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7b80\u4ecb")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"status"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupStatus"},"GroupStatus")," \u7fa4\u72b6\u6001")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"creatorUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5efa\u7fa4\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupType"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupType"},"GroupType")," \u7fa4\u7c7b\u578b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u6570\u91cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"nickname"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"ApplyhandleResult")," \u5904\u7406\u7ed3\u679c")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u52a0\u7fa4\u7684\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fdb\u7fa4\u7684\u7528\u6237 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledTime"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fd1\u671f\u7533\u8bf7\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"joinSource"),(0,e.kt)("td",{parentName:"tr",align:null},"int"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/joinSource"},"JoinSource")," \u8fdb\u7fa4\u65b9\u5f0f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"inviterUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"String"),(0,e.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u7fa4\u7528\u6237 ID"))))),(0,e.kt)(o,{value:"Web",mdxType:"TabItem"},(0,e.kt)("h3",{id:"groupapplicationitem"},"GroupApplicationItem"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupName"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"notification"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u516c\u544a")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"introduction"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7b80\u4ecb")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"status"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupStatus"},"GroupStatus")),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u72b6\u6001")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"creatorUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5efa\u7fa4\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupType"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupType"},"GroupType")),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7c7b\u578b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u6570\u91cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"nickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"ApplicationHandleResult")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u52a0\u7fa4\u7684\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fdb\u7fa4\u7684\u7528\u6237 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fd1\u671f\u7533\u8bf7\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"joinSource"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/joinSource"},"JoinSource")),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u65b9\u5f0f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"inviterUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u7fa4\u7528\u6237 ID"))))),(0,e.kt)(o,{value:"uni-app",mdxType:"TabItem"},(0,e.kt)("h3",{id:"groupapplicationitem-1"},"GroupApplicationItem"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,e.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,e.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupName"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u540d\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"notification"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u516c\u544a")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"introduction"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7b80\u4ecb")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"createTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"status"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupStatus"},"GroupStatus")),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u72b6\u6001")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"creatorUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5efa\u7fa4\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"groupType"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/groupType"},"GroupType")),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u7c7b\u578b")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u4e3b ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"memberCount"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7fa4\u6210\u5458\u6570\u91cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"nickname"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u6635\u79f0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"userFaceURL"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u7533\u8bf7\u8005\u5934\u50cf")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleResult"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/handleResult"},"ApplicationHandleResult")),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u7ed3\u679c")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u52a0\u7fa4\u7684\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledMsg"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u9644\u52a0\u4fe1\u606f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"reqTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7533\u8bf7\u8fdb\u7fa4\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handleUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fdb\u7fa4\u7684\u7528\u6237 ID")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"handledTime"),(0,e.kt)("td",{parentName:"tr",align:null},"number"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u8fd1\u671f\u7533\u8bf7\u65f6\u95f4")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ex"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u5b57\u6bb5")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"joinSource"),(0,e.kt)("td",{parentName:"tr",align:null},(0,e.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/enum/joinSource"},"JoinSource")),(0,e.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7fa4\u65b9\u5f0f")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"inviterUserID"),(0,e.kt)("td",{parentName:"tr",align:null},"string"),(0,e.kt)("td",{parentName:"tr",align:null},"\u9080\u8bf7\u8fdb\u7fa4\u7528\u6237 ID")))))))}c.isMDXComponent=!0}}]);