"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[91571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>m});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Source Code Deployment",sidebar_position:1},p="\ud83d\udee0 Source Code Deployment",s={unversionedId:"gettingStarted/imSourceCodeDeployment",id:"gettingStarted/imSourceCodeDeployment",title:"Source Code Deployment",description:"1. Environment and Component Requirements",source:"@site/i18n/en/docusaurus-plugin-content-docs-guides/current/gettingStarted/imSourceCodeDeployment.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/imSourceCodeDeployment",permalink:"/guides/gettingStarted/imSourceCodeDeployment",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/guides/gettingStarted/imSourceCodeDeployment.mdx",tags:[],version:"current",lastUpdatedAt:1710234010,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:1,frontMatter:{title:"Source Code Deployment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Product Introduction",permalink:"/guides/introduction/product"},next:{title:"Docker Deployment",permalink:"/guides/gettingStarted/dockerCompose"}},c={},m=[{value:"1. Environment and Component Requirements",id:"1-environment-and-component-requirements",level:2},{value:"2. Deploying OpenIM Server (IM)",id:"2-deploying-openim-server-im",level:2},{value:"2.1 \ud83d\udce1 Setting OPENIM_IP",id:"21--setting-openim_ip",level:3},{value:"2.2 \ud83c\udfd7\ufe0f Deploying Components (mongodb/redis/zookeeper/kafka/MinIO, etc.)",id:"22-\ufe0f-deploying-components-mongodbrediszookeeperkafkaminio-etc",level:3},{value:"2.3 \ud83d\udee0\ufe0f Compiling",id:"23-\ufe0f-compiling",level:3},{value:"2.4 \ud83d\ude80 Starting/Stopping/Checking",id:"24--startingstoppingchecking",level:3},{value:"3. Deploying App Server (Chat)",id:"3-deploying-app-server-chat",level:2},{value:"3.1 \ud83c\udfd7\ufe0f Clone chat repository",id:"31-\ufe0f-clone-chat-repository",level:3},{value:"3.2 \ud83d\udee0\ufe0f Compiling",id:"32-\ufe0f-compiling",level:3},{value:"3.3 \ud83d\ude80 Starting/Stopping/Checking",id:"33--startingstoppingchecking",level:3},{value:"4. Quick Verification",id:"4-quick-verification",level:2},{value:"5. Admin Panel and Monitoring System",id:"5-admin-panel-and-monitoring-system",level:2},{value:"6. About Modifying Configuration Items",id:"6-about-modifying-configuration-items",level:2},{value:"6.1 \ud83d\udee0\ufe0f Modifying Shared Configuration Items",id:"61-\ufe0f-modifying-shared-configuration-items",level:3},{value:"6.2 \ud83d\udd04 Modifying Special Shared Configuration Items",id:"62--modifying-special-shared-configuration-items",level:3},{value:"6.3 \ud83d\udee0\ufe0f Modifying Other Configuration Items",id:"63-\ufe0f-modifying-other-configuration-items",level:3},{value:"6.4 Modifying Ports",id:"64-modifying-ports",level:3},{value:"7. Common Issues",id:"7-common-issues",level:2},{value:"7.1 \ud83d\udcdc Viewing Logs",id:"71--viewing-logs",level:3},{value:"7.2 \ud83d\ude80 Startup Sequence",id:"72--startup-sequence",level:3},{value:"7.3 \ud83d\udc33",id:"73-",level:3}],d={toc:m},u="wrapper";function g(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(u,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-source-code-deployment"},"\ud83d\udee0 Source Code Deployment"),(0,r.kt)("h2",{id:"1-environment-and-component-requirements"},"1. Environment and Component Requirements"),(0,r.kt)("p",null,"For server environment, system, and storage components, refer to ",(0,r.kt)("a",{parentName:"p",href:"./env-comp"},"this document"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-deploying-openim-server-im"},"2. Deploying OpenIM Server (IM)"),(0,r.kt)("h3",{id:"21--setting-openim_ip"},"2.1 \ud83d\udce1 Setting OPENIM_IP"),(0,r.kt)("p",null,"\ud83d\udd14 ",(0,r.kt)("strong",{parentName:"p"},"It is mandatory to set OPENIM_IP, and it cannot be 127.0.0.1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'# If the server has a public IP\nexport OPENIM_IP="Public IP"\n\n# If only providing internal network service\nexport OPENIM_IP="Internal IP"\n')),(0,r.kt)("h3",{id:"22-\ufe0f-deploying-components-mongodbrediszookeeperkafkaminio-etc"},"2.2 \ud83c\udfd7\ufe0f Deploying Components (mongodb/redis/zookeeper/kafka/MinIO, etc.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/OpenIMSDK/open-im-server && cd open-im-server\n# It's recommended to switch to the release-v3.5 or later release branches\nmake init && docker compose up -d\n")),(0,r.kt)("h3",{id:"23-\ufe0f-compiling"},"2.3 \ud83d\udee0\ufe0f Compiling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make build\n")),(0,r.kt)("h3",{id:"24--startingstoppingchecking"},"2.4 \ud83d\ude80 Starting/Stopping/Checking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"# Start\nmake start\n# Stop\nmake stop\n# Check\nmake check\n")),(0,r.kt)("h2",{id:"3-deploying-app-server-chat"},"3. Deploying App Server (Chat)"),(0,r.kt)("h3",{id:"31-\ufe0f-clone-chat-repository"},"3.1 \ud83c\udfd7\ufe0f Clone chat repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Return to the previous directory\ncd ..\n# Clone the repository. It's recommended to switch to the release-v1.5 or later release branches\ngit clone https://github.com/OpenIMSDK/chat chat && cd chat\n")),(0,r.kt)("h3",{id:"32-\ufe0f-compiling"},"3.2 \ud83d\udee0\ufe0f Compiling"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make init\nmake build\n")),(0,r.kt)("h3",{id:"33--startingstoppingchecking"},"3.3 \ud83d\ude80 Starting/Stopping/Checking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Start\nmake start\n# Stop\nmake stop\n# Check\nmake check\n")),(0,r.kt)("h2",{id:"4-quick-verification"},"4. Quick Verification"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./quickTestServer"},"Quick Verification")," document."),(0,r.kt)("h2",{id:"5-admin-panel-and-monitoring-system"},"5. Admin Panel and Monitoring System"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./admin"},"Admin Panel and Monitoring System")," document."),(0,r.kt)("h2",{id:"6-about-modifying-configuration-items"},"6. About Modifying Configuration Items"),(0,r.kt)("h3",{id:"61-\ufe0f-modifying-shared-configuration-items"},"6.1 \ud83d\udee0\ufe0f Modifying Shared Configuration Items"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Files to Modify"),(0,r.kt)("th",{parentName:"tr",align:null},"Operation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mongo/kafka/minio related"),(0,r.kt)("td",{parentName:"tr",align:null},".env, openim-server/config/config.yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"Need to restart components and IM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redis/zookeeper related"),(0,r.kt)("td",{parentName:"tr",align:null},".env, openim-server/config/config.yaml, chat/config/config.yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"Need to restart components, IM, and Chat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"openim-server/config/config.yaml, chat/config/config.yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"Need to restart IM and Chat")))),(0,r.kt)("h3",{id:"62--modifying-special-shared-configuration-items"},"6.2 \ud83d\udd04 Modifying Special Shared Configuration Items"),(0,r.kt)("p",null,"Special configuration items: API_OPENIM_PORT/MINIO_PORT/OPENIM_IP/GRAFANA_PORT"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Modify the special configuration items in the ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,r.kt)("li",{parentName:"ol"},"Modify configurations in ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml"))," as per rules:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'object:\n  apiURL: "http://$OPENIM_IP:$API_OPENIM_PORT"\n  minio:\n    endpoint: "http://$DOCKER_BRIDGE_GATEWAY:$MINIO_PORT"\n    signEndpoint: "http://$OPENIM_IP:$MINIO_PORT"\n\ngrafanaUrl: http://$OPENIM_IP:$GRAFANA_PORT\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Modify configurations in ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"chat/config/config.yaml"))," as per rules:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'If IM and Chat are not on the same machine, you need to replace 127.0.0.1 with the IP address of the machine where IM is located\nopenIMUrl: "http://172.28.0.1:$API_OPENIM_PORT"\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Restart IM and Chat")),(0,r.kt)("h3",{id:"63-\ufe0f-modifying-other-configuration-items"},"6.3 \ud83d\udee0\ufe0f Modifying Other Configuration Items"),(0,r.kt)("p",null,"For other configuration items in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"chat/config/config.yaml")),", and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openim-server/config/config.yaml")),", these can be modified individually in the respective files."),(0,r.kt)("h3",{id:"64-modifying-ports"},"6.4 Modifying Ports"),(0,r.kt)("p",null,"Especially note that any modification of IM-related ports needs to be synchronized with the ports in open-im-server/scripts/install/environment.sh."),(0,r.kt)("h2",{id:"7-common-issues"},"7. Common Issues"),(0,r.kt)("h3",{id:"71--viewing-logs"},"7.1 \ud83d\udcdc Viewing Logs"),(0,r.kt)("p",null,"Log Locations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Runtime logs, for troubleshooting after successful startup: ",(0,r.kt)("inlineCode",{parentName:"li"},"_output/logs/openim-all*")),(0,r.kt)("li",{parentName:"ul"},"Startup logs, for checking in case of errors during startup: ",(0,r.kt)("inlineCode",{parentName:"li"},"_output/logs/openim-*.log"))),(0,r.kt)("h3",{id:"72--startup-sequence"},"7.2 \ud83d\ude80 Startup Sequence"),(0,r.kt)("p",null,"The startup sequence is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Components IM depends on: mongo/redis/kafka/zookeeper/minio, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chat"))),(0,r.kt)("h3",{id:"73-"},"7.3 \ud83d\udc33"),(0,r.kt)("p",null," Docker Version"),(0,r.kt)("p",null,"The newer version of Docker has integrated docker-compose. Older versions of Docker may not support the gateway feature\u274c. We recommend upgrading to a newer version, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"23.0.1"),"\ud83d\udd1d."))}g.isMDXComponent=!0}}]);