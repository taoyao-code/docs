"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[19283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=m(a),g=r,k=u["".concat(p,".").concat(g)]||u[g]||d[g]||l;return a?n.createElement(k,s(s({ref:t},o),{},{components:a})):n.createElement(k,s({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var m=2;m<l;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},p="createTextMessage",m={unversionedId:"api/message/createTextMessage",id:"api/message/createTextMessage",title:"createTextMessage",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/sdks/api/message/createTextMessage.mdx",sourceDirName:"api/message",slug:"/api/message/createTextMessage",permalink:"/zh-Hans/sdks/api/message/createTextMessage",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/api/message/createTextMessage.mdx",tags:[],version:"current",lastUpdatedAt:1706237197,formattedLastUpdatedAt:"2024\u5e741\u670826\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"setBatchMsgListener",permalink:"/zh-Hans/sdks/api/message/setBatchMsgListener"},next:{title:"createTextAtMessage",permalink:"/zh-Hans/sdks/api/message/createTextAtMessage"}},o={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-1",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-1",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-2",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-2",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-3",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-3",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-4",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-4",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-4",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-4",level:3},{value:"\u51fd\u6570\u539f\u578b",id:"\u51fd\u6570\u539f\u578b-5",level:3},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570-5",level:3},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c-5",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-5",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},g=d("Tabs"),k=d("TabItem"),N={toc:u},c="wrapper";function h(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},N,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"createtextmessage"},"createTextMessage"),(0,n.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,n.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u521b\u5efa\u6587\u672c\u6d88\u606f\u3002")),(0,n.kt)(g,{groupId:"sdks-language",values:[{label:"iOS",value:"iOS"},{label:"Android",value:"Android"},{label:"Flutter",value:"Flutter"},{label:"uni-app",value:"uni-app"},{label:"Browser/MiniProgram",value:"Web"},{label:"React-Native",value:"React-Native"}],mdxType:"Tabs"},(0,n.kt)(k,{value:"Flutter",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0}," Future<Message> createTextMessage({\n    required String text,\n    String? operationID,\n  })\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    Message msg = await OpenIM.iMManager.messageManager.createTextMessage(text: text);\n    //todo\n"))),(0,n.kt)(k,{value:"iOS",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-1"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},"\n+ (OIMMessageInfo *)createTextMessage:(NSString *)text;\n\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-1"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"NSString"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-1"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"OIMMessageInfo")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-1"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift",metastring:"showLineNumbers",showLineNumbers:!0},'\nOIMMessageInfo *message = [OIMMessageInfo createTextMessage:@""];\n\n'))),(0,n.kt)(k,{value:"Android",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-2"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"    public Message createTextMessage(String text)\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-2"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-2"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"~"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"Message")),(0,n.kt)("td",{parentName:"tr",align:null},"\u6210\u529f\u8fd4\u56de")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-2"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart",metastring:"showLineNumbers",showLineNumbers:!0},"   Message Message= OpenIMClient.getInstance().messageManager. createTextMessage(String text)\n    //todo\n"))),(0,n.kt)(k,{value:"Web",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-3"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.createTextMessage(text: string, operationID?: string): Promise<WsResponse<MessageItem>>\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-3"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u5185\u5bb9")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-3"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<WsResponse<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem"),">",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"WsResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-3"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import { getSDK } from 'open-im-sdk-wasm';\nconst IMSDK = getSDK();\n// or\n// import { OpenIMSDK } from 'open-im-sdk';\n// const IMSDK = new OpenIMSDK();\n\nIMSDK.createTextMessage('text')\n  .then(({ data }) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,n.kt)(k,{value:"uni-app",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-4"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"IMSDK.asyncApi('createTextMessage', operationID: string, text: string): Promise<MessageItem>\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-4"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u5185\u5bb9")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-4"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"openim-uniapp-polyfill"),"\u5305\u5c06\u51fd\u6570 Promise \u5316\uff0c\u8c03\u7528\u65f6\u9700\u8981\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"then"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"catch"),"\u5224\u65ad\u5e76\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\u56de\u8c03\u3002")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-4"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import IMSDK from 'openim-uniapp-polyfill';\n\nIMSDK.asyncApi('createTextMessage', IMSDK.uuid(), 'text')\n  .then(({ data }) => {\n    // \u8c03\u7528\u6210\u529f\n  })\n  .catch(({ errCode, errMsg }) => {\n    // \u8c03\u7528\u5931\u8d25\n  });\n"))),(0,n.kt)(k,{value:"React-Native",mdxType:"TabItem"},(0,n.kt)("h3",{id:"\u51fd\u6570\u539f\u578b-5"},"\u51fd\u6570\u539f\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers",showLineNumbers:!0},"OpenIMSDKRN.createTextMessage(\n  textMsg: string,\n  operationID: string\n);\n\n")),(0,n.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570-5"},"\u8f93\u5165\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6587\u672c\u5185\u5bb9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,n.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c ID\uff0c\u7528\u4e8e\u5b9a\u4f4d\u95ee\u9898\uff0c\u4fdd\u6301\u552f\u4e00\uff0c\u5efa\u8bae\u7528\u5f53\u524d\u65f6\u95f4\u548c\u968f\u673a\u6570")))),(0,n.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c-5"},"\u8fd4\u56de\u7ed3\u679c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.then()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/message/messageInfo"},"MessageItem"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u6210\u529f\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Promise.catch()"),(0,n.kt)("td",{parentName:"tr",align:null},"Promise<",(0,n.kt)("a",{parentName:"td",href:"/zh-Hans/sdks/class/response"},"CatchResponse"),">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5931\u8d25\u56de\u8c03")))),(0,n.kt)("h3",{id:"\u4ee3\u7801\u793a\u4f8b-5"},"\u4ee3\u7801\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import OpenIMSDKRN from \"open-im-sdk-rn\";\n\ntry {\n  const data = await OpenIMSDKRN.createTextMessage(\n    '\u4e00\u6761\u6d88\u606f', \n    'OperationID_value'\n  );\n  console.log(\"createTextMessage\", data);\n} catch (error) {\n  console.error('Error createTextMessage:', error);\n}\n\n")))))}h.isMDXComponent=!0}}]);