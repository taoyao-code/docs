"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[27940],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=a,s=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(s,i(i({ref:e},u),{},{components:n})):r.createElement(s,i({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},19006:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>m});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"\u6dfb\u52a0\u9ed1\u540d\u5355\u4e4b\u540e\u7684\u56de\u8c03",hide_title:!0},p="\u6dfb\u52a0\u9ed1\u540d\u5355\u4e4b\u540e\u7684\u56de\u8c03",d={unversionedId:"webhooks/relationship/addBlack",id:"webhooks/relationship/addBlack",title:"\u6dfb\u52a0\u9ed1\u540d\u5355\u4e4b\u540e\u7684\u56de\u8c03",description:"\u529f\u80fd\u8bf4\u660e",source:"@site/docs/restapi/webhooks/relationship/addBlack.mdx",sourceDirName:"webhooks/relationship",slug:"/webhooks/relationship/addBlack",permalink:"/zh-Hans/restapi/webhooks/relationship/addBlack",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/restapi/webhooks/relationship/addBlack.mdx",tags:[],version:"current",lastUpdatedAt:1704855135,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",frontMatter:{title:"\u6dfb\u52a0\u9ed1\u540d\u5355\u4e4b\u540e\u7684\u56de\u8c03",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u5728\u7ebf\u72b6\u6001\u4e0b\u6d88\u606f\u63a8\u9001\u524d\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/push/onlinePushBefore"},next:{title:"\u540c\u610f\u6dfb\u52a0\u597d\u53cb\u4e4b\u540e\u7684\u56de\u8c03",permalink:"/zh-Hans/restapi/webhooks/relationship/addFriendAfter"}},u={},m=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f",level:2},{value:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a",level:2},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u8bf7\u6c42 URL \u793a\u4f8b",id:"\u8bf7\u6c42-url-\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e",id:"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e",level:3},{value:"Header",id:"header",level:3},{value:"\u8bf7\u6c42\u5305\u793a\u4f8b",id:"\u8bf7\u6c42\u5305\u793a\u4f8b",level:3},{value:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u5e94\u7b54\u5305\u793a\u4f8b",id:"\u5e94\u7b54\u5305\u793a\u4f8b",level:2},{value:"\u5141\u8bb8\u6dfb\u52a0",id:"\u5141\u8bb8\u6dfb\u52a0",level:3},{value:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e",level:2}],c={toc:m},k="wrapper";function s(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},c,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6dfb\u52a0\u9ed1\u540d\u5355\u4e4b\u540e\u7684\u56de\u8c03"},"\u6dfb\u52a0\u9ed1\u540d\u5355\u4e4b\u540e\u7684\u56de\u8c03"),(0,r.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,"App \u4e1a\u52a1\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7\u8be5\u56de\u8c03\u83b7\u53d6\u7528\u6237\u6dfb\u52a0\u9ed1\u540d\u5355\u7684\u8bf7\u6c42\uff0c\u540c\u65f6\u4e1a\u52a1\u670d\u52a1\u7aef\u53ef\u4ee5\u5bf9\u8fd9\u4e00\u8bf7\u6c42\u8fdb\u884c\u5ba1\u6838\u6216\u4fee\u6539\u3002"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u542f\u7528\u56de\u8c03\uff0c\u5fc5\u987b\u914d\u7f6e\u56de\u8c03 URL\uff0c\u5e76\u5f00\u542f\u672c\u6761\u56de\u8c03\u534f\u8bae\u5bf9\u5e94\u7684\u5f00\u5173\u3002\u914d\u7f6e\u65b9\u6cd5\u8be6\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../introduction"},"\u56de\u8c03\u8bf4\u660e")," \u6587\u6863\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u8c03\u7684\u65b9\u5411\u662f OpenIMServer \u5411 App \u540e\u53f0\u53d1\u8d77 HTTP/HTTPS POST \u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"APP \u4e1a\u52a1\u670d\u52a1\u7aef\u9700\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u54cd\u5e94\u6b64\u8bf7\u6c42\u3002")),(0,r.kt)("h2",{id:"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"},"\u53ef\u80fd\u89e6\u53d1\u8be5\u56de\u8c03\u7684\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App \u7528\u6237\u901a\u8fc7\u5ba2\u6237\u7aef\u5c1d\u8bd5\u6dfb\u52a0\u5176\u4ed6\u7528\u6237\u81f3\u9ed1\u540d\u5355\u3002")),(0,r.kt)("h2",{id:"\u56de\u8c03\u53d1\u751f\u65f6\u673a"},"\u56de\u8c03\u53d1\u751f\u65f6\u673a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenIMServer \u6536\u5230\u6dfb\u52a0\u9ed1\u540d\u5355\u7528\u6237\u7684\u8bf7\u6c42\u4e4b\u540e\uff0c\u5904\u7406\u8be5\u8bf7\u6c42\u524d\u3002")),(0,r.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u8bf7\u6c42-url-\u793a\u4f8b"},"\u8bf7\u6c42 URL \u793a\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4e2d App \u914d\u7f6e\u7684\u56de\u8c03 URL \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"http://www.example.com/callbackCommand?contenttype=json"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://www.example.com/addBlackCommand?contenttype=json\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u534f\u8bae\u4e3a HTTP\uff0c\u8bf7\u6c42\u65b9\u5f0f\u4e3a POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://www.example.com"},"www.example.com")),(0,r.kt)("td",{parentName:"tr",align:null},"configy.yaml \u4e2d\u7684 callback.url \u5b57\u6bb5\uff0c\u57df\u540d\u6216\u4e3b\u673a\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CallbackCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b64\u5904\u4e3a\uff1aaddBlackCommand")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c\u4e3a\uff1aJSON")))),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"header\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u793a\u4f8b\u503c"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9009\u586b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"operationID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1646445464564"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"operationID\u7528\u4e8e\u5168\u5c40\u94fe\u8def\u8ffd\u8e2a")))),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u5305\u793a\u4f8b"},"\u8bf7\u6c42\u5305\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "callbackCommand": "addBlackCommand",\n  "ownerUserID": "user123",\n  "blackUserID": "user456"\n}\n')),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u8bf7\u6c42\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callbackCommand"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56de\u8c03\u547d\u4ee4\uff0c\u8fd9\u91cc\u662f\u6dfb\u52a0\u9ed1\u540d\u5355\u7528\u6237\u7684\u56de\u8c03")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ownerUserID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u6dfb\u52a0\u9ed1\u540d\u5355\u8bf7\u6c42\u7684\u7528\u6237ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blackUserID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u6dfb\u52a0\u81f3\u9ed1\u540d\u5355\u7684\u7528\u6237ID")))),(0,r.kt)("h2",{id:"\u5e94\u7b54\u5305\u793a\u4f8b"},"\u5e94\u7b54\u5305\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u5141\u8bb8\u6dfb\u52a0"},"\u5141\u8bb8\u6dfb\u52a0"),(0,r.kt)("p",null,"\u5141\u8bb8\u7528\u6237\u6dfb\u52a0\u6307\u5b9a\u7528\u6237\u81f3\u9ed1\u540d\u5355\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actionCode": 0,\n  "errCode": 0,\n  "errMsg": "Success",\n  "errDlt": "",\n  "nextCode": "nextCodeValue"\n}\n')),(0,r.kt)("h2",{id:"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"},"\u5e94\u7b54\u5305\u5b57\u6bb5\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actionCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e1a\u52a1\u7cfb\u7edf\u7684\u56de\u8c03\u662f\u5426\u6b63\u786e\u6267\u884c\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\u8868\u793a\u64cd\u4f5c\u6210\u529f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\uff0c\u6b64\u5904\u586b0\u4ee3\u8868\u5ffd\u7565\u56de\u8c03\u7ed3\u679c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,r.kt)("td",{parentName:"tr",align:null},'"An error message"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u7b80\u5355\u9519\u8bef\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errDlt"),(0,r.kt)("td",{parentName:"tr",align:null},'"Detailed error information"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9519\u8bef\u7801\u5bf9\u5e94\u7684\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nextCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u4e00\u6b65\u6267\u884c\u6307\u4ee4\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"1"),"\u8868\u793a\u62d2\u7edd\u7ee7\u7eed\u6267\u884c\uff0cactionCode\u7b49\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"0"),"\u65f6\u8bbe\u7f6e\u3002")))))}s.isMDXComponent=!0}}]);