"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[1452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},u="onSyncServerFailed",s={unversionedId:"callback/onSyncServerFailed",id:"callback/onSyncServerFailed",title:"onSyncServerFailed",description:"Feature Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs-sdks/current/callback/onSyncServerFailed.mdx",sourceDirName:"callback",slug:"/callback/onSyncServerFailed",permalink:"/sdks/callback/onSyncServerFailed",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/callback/onSyncServerFailed.mdx",tags:[],version:"current",lastUpdatedAt:1704855135,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"onSelfInfoUpdated",permalink:"/sdks/callback/onSelfUserInfoUpdate"},next:{title:"onSyncServerFinish",permalink:"/sdks/callback/onSyncServerFinish"}},c={},p=[{value:"Feature Introduction",id:"feature-introduction",level:2},{value:"Return Prototype",id:"return-prototype",level:3},{value:"Return Result",id:"return-result",level:3},{value:"Return Prototype",id:"return-prototype-1",level:3},{value:"Return Result",id:"return-result-1",level:3},{value:"Return Prototype",id:"return-prototype-2",level:3},{value:"Return Result",id:"return-result-2",level:3},{value:"Return Prototype",id:"return-prototype-3",level:3},{value:"Return Result",id:"return-result-3",level:3},{value:"Example Call",id:"example-call",level:3},{value:"Return Prototype",id:"return-prototype-4",level:3},{value:"Return Result",id:"return-result-4",level:3},{value:"Example Call",id:"example-call-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("Tabs"),y=d("TabItem"),b={toc:p},v="wrapper";function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(v,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"onsyncserverfailed"},"onSyncServerFailed"),(0,n.kt)("h2",{id:"feature-introduction"},"Feature Introduction"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Callback when syncing the session with the server fails.")),(0,n.kt)(m,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"}],mdxType:"Tabs"},(0,n.kt)(y,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"  Function()? onSyncServerFailed;\n")),(0,n.kt)("h3",{id:"return-result"},"Return Result"),(0,n.kt)("p",null,"None")),(0,n.kt)(y,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-1"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n- (void)onSyncServerFailed;\n\n")),(0,n.kt)("h3",{id:"return-result-1"},"Return Result"),(0,n.kt)("p",null,"None")),(0,n.kt)(y,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-2"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"    void onSyncServerFailed()\n")),(0,n.kt)("h3",{id:"return-result-2"},"Return Result"),(0,n.kt)("p",null,"None")),(0,n.kt)(y,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-3"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonSyncServerFailed(): void;\n\n")),(0,n.kt)("h3",{id:"return-result-3"},"Return Result"),(0,n.kt)("p",null,"None"),(0,n.kt)("h3",{id:"example-call"},"Example Call"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK, CbEvents } from 'open-im-sdk-wasm';\n// or\n// import { OpenIMSDK, CbEvents } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\nconst IMSDK = getSDK();\n\nIMSDK.on(CbEvents.OnSyncServerFailed, () => {});\n"))),(0,n.kt)(y,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"return-prototype-4"},"Return Prototype"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"\nonSyncServerFailed(): void;\n\n")),(0,n.kt)("h3",{id:"return-result-4"},"Return Result"),(0,n.kt)("p",null,"None"),(0,n.kt)("h3",{id:"example-call-1"},"Example Call"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.subscribe(IMSDK.IMEvents.OnSyncServerFailed, () => {});\n")))))}f.isMDXComponent=!0}}]);