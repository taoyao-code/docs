"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[96960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=o,b=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>l,toc:()=>s});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={title:"API\u8bf4\u660e",sidebar_position:1},c="OpenIMServer APIs",l={unversionedId:"introduction",id:"introduction",title:"API\u8bf4\u660e",description:"\ud83d\ude80 REST API",source:"@site/docs/restapi/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/zh-Hans/restapi/introduction",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1704855135,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",sidebarPosition:1,frontMatter:{title:"API\u8bf4\u660e",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5bfc\u5165\uff08\u6ce8\u518c\uff09\u7528\u6237",permalink:"/zh-Hans/restapi/apis/userManagement/userRegister"}},u={},s=[{value:"\ud83d\ude80 REST API",id:"-rest-api",level:2},{value:"\ud83d\udd17 Webhooks",id:"-webhooks",level:2}],f={toc:s},m="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"openimserver-apis"},"OpenIMServer APIs"),(0,n.kt)("h2",{id:"-rest-api"},"\ud83d\ude80 REST API"),(0,n.kt)("p",null,"OpenIMServer \u63d0\u4f9b\u4e86 ",(0,n.kt)("strong",{parentName:"p"},"REST API")," \u4f9b\u4e1a\u52a1\u7cfb\u7edf\u4f7f\u7528\uff0c\u4ee5\u589e\u5f3a\u4e1a\u52a1\u529f\u80fd\u3002\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udee0 \u5efa\u7acb\u7fa4\u7ec4"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcec \u63a8\u9001\u6d88\u606f")),(0,n.kt)("p",null,"\u66f4\u591a\u529f\u80fd\u53c2\u8003\u540e\u9762\u7684API\u6587\u6863"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u8c03\u7528 ",(0,n.kt)("strong",{parentName:"p"},"REST API")," \uff0c\u9700\u8981\u4ee5 ",(0,n.kt)("strong",{parentName:"p"},"APP \u7ba1\u7406\u5458")," \u8eab\u4efd\u8fdb\u884c\uff0c\u6b64\u670d\u52a1\u7531\u7aef\u53e3 ",(0,n.kt)("inlineCode",{parentName:"p"},"10002")," \u63d0\u4f9b\u3002\u6240\u8c13 ",(0,n.kt)("strong",{parentName:"p"},"APP \u7ba1\u7406\u5458"),"\uff0c\u5373\u6709\u8d85\u7ea7\u6743\u9650\u7684\u7528\u6237\u3002OpenIMServer \u5185\u7f6e\u4e86\u4e00\u4e2a APP\u7ba1\u7406\u5458\uff0c\u5b83\u7684userID \u4e3aimAdmin")),(0,n.kt)("p",null,"\u5728\u5f00\u59cb\u8c03\u7528 API \u4e4b\u524d\uff0c\u9700\u9996\u5148\u901a\u8fc7 ",(0,n.kt)("a",{parentName:"p",href:"./apis/authenticationManagement/getUserToken"},"\u83b7\u53d6token"),"\u4f7f\u7528secret\u83b7\u53d6 APP \u7ba1\u7406\u5458\u7684 token\u3002\n\u6b64\u5916\uff0c\u5bf9\u4e8e",(0,n.kt)("a",{parentName:"p",href:"./apis/userManagement/userRegister"},"\u7528\u6237\u6ce8\u518c")," \u63a5\u53e3\uff0c\u4e5f\u9700\u8981\u4f7f\u7528secret\u9a8c\u8bc1\u3002"),(0,n.kt)("h2",{id:"-webhooks"},"\ud83d\udd17 Webhooks"),(0,n.kt)("p",null,"OpenIMServer \u8fd8\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u56de\u8c03\u529f\u80fd\uff0c\u4ee5\u6ee1\u8db3\u66f4\u591a\u7684\u4e1a\u52a1\u9700\u6c42\u3002",(0,n.kt)("strong",{parentName:"p"},"\u56de\u8c03")," \u7684\u5b9a\u4e49\u662f\uff0c\u5f53\u67d0\u4e8b\u4ef6\u53d1\u751f\u524d\u6216\u540e\uff0cOpenIMServer \u4f1a\u5411\u4e1a\u52a1\u670d\u52a1\u5668\u53d1\u51fa\u8bf7\u6c42\u3002\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce4 \u53d1\u9001\u6d88\u606f\u524d\u7684\u56de\u8c03"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce5 \u53d1\u9001\u6d88\u606f\u540e\u7684\u56de\u8c03")))}b.isMDXComponent=!0}}]);