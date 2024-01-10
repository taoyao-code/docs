"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[63945],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},O=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),O=o,f=p["".concat(c,".").concat(O)]||p[O]||u[O]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=O;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}O.displayName="MDXCreateElement"},19387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={title:"iOS",hide_title:!0,sidebar_position:1},c=void 0,d={unversionedId:"quickstart/ios",id:"quickstart/ios",title:"iOS",description:"\ud83d\ude80\u4f7f\u7528 Demo",source:"@site/docs/sdks/quickstart/ios.mdx",sourceDirName:"quickstart",slug:"/quickstart/ios",permalink:"/zh-Hans/sdks/quickstart/ios",draft:!1,editUrl:"https://github.com/OpenIMSDK/docs/tree/main/docs/sdks/quickstart/ios.mdx",tags:[],version:"current",lastUpdatedAt:1704855135,formattedLastUpdatedAt:"2024\u5e741\u670810\u65e5",sidebarPosition:1,frontMatter:{title:"iOS",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u96c6\u6210",permalink:"/zh-Hans/sdks/quickstart/"},next:{title:"Android",permalink:"/zh-Hans/sdks/quickstart/android"}},s={},p=[{value:"\ud83d\ude80\u4f7f\u7528 Demo",id:"\u4f7f\u7528-demo",level:2},{value:"\u96c6\u6210\u6b65\u9aa4",id:"\u96c6\u6210\u6b65\u9aa4",level:2},{value:"1. \u76ee\u524d\u91c7\u7528 cocoapds \u83b7\u53d6 sdk\uff0c\u6dfb\u52a0\u4f9d\u8d56\u5230 Podfile\uff1a",id:"1-\u76ee\u524d\u91c7\u7528-cocoapds-\u83b7\u53d6-sdk\u6dfb\u52a0\u4f9d\u8d56\u5230-podfile",level:3},{value:"2. \u5f15\u5165\u6a21\u5757",id:"2-\u5f15\u5165\u6a21\u5757",level:3},{value:"3. \u521d\u59cb\u5316",id:"3-\u521d\u59cb\u5316",level:3},{value:"4. \u8bbe\u7f6e\u76d1\u542c\u5668",id:"4-\u8bbe\u7f6e\u76d1\u542c\u5668",level:3},{value:"\u65b9\u5f0f\u4e00",id:"\u65b9\u5f0f\u4e00",level:4},{value:"\u65b9\u5f0f\u4e8c",id:"\u65b9\u5f0f\u4e8c",level:4},{value:"5. \u767b\u5f55",id:"5-\u767b\u5f55",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3}],u={toc:p},O="wrapper";function f(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)(O,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-demo"},"\ud83d\ude80\u4f7f\u7528 Demo"),(0,r.kt)("p",null,"\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u9996\u5148\u8fd0\u884c\u6211\u4eec\u4e3a\u60a8\u51c6\u5907\u7684\u6846\u67b6\u76f8\u5173\u7684\u793a\u4f8b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenIMSDK/Open-IM-iOS-Demo"},"DEMO"),"\u3002\u8fd9\u4e0d\u4ec5\u53ef\u4ee5\u8ba9\u60a8\u76f4\u89c2\u4f53\u9a8c OpenIMSDK \u7684\u529f\u80fd\uff0c\u8fd8\u5c06\u5e2e\u52a9\u60a8\u5728\u5b9e\u9645\u96c6\u6210\u8fc7\u7a0b\u4e2d\u8fc5\u901f\u5b9a\u4f4d\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u96c6\u6210\u6b65\u9aa4"},"\u96c6\u6210\u6b65\u9aa4"),(0,r.kt)("h3",{id:"1-\u76ee\u524d\u91c7\u7528-cocoapds-\u83b7\u53d6-sdk\u6dfb\u52a0\u4f9d\u8d56\u5230-podfile"},"1. \u76ee\u524d\u91c7\u7528 cocoapds \u83b7\u53d6 sdk\uff0c\u6dfb\u52a0\u4f9d\u8d56\u5230 Podfile\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'OpenIMSDK', '~>3.0.0'\n")),(0,r.kt)("p",null,"SDK \u7248\u672c\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenIMSDK/Open-IM-SDK-iOS.git"},"https://github.com/OpenIMSDK/Open-IM-SDK-iOS.git")),(0,r.kt)("h3",{id:"2-\u5f15\u5165\u6a21\u5757"},"2. \u5f15\u5165\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"@import OpenIMSDK;\n")),(0,r.kt)("h3",{id:"3-\u521d\u59cb\u5316"},"3. \u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'OIMInitConfig *config = [OIMInitConfig new];\nconfig.apiAddr = @"";\nconfig.wsAddr = @"";\nconfig.objectStorage = @"";\n\nBOOL success = [OIMManager.manager initSDKWithConfig:config\n                                        onConnecting:^{\n\n} onConnectFailure:^(NSInteger code, NSString * _Nullable msg) {\n    // \u8fde\u63a5\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570\n    // code \u9519\u8bef\u7801\n    // error \u9519\u8bef\u4fe1\u606f\n} onConnectSuccess:^{\n    // SDK \u5df2\u7ecf\u6210\u529f\u8fde\u63a5\u5230IM\u670d\u52a1\u5668\n} onKickedOffline:^{\n    // SDK \u6b63\u5728\u8fde\u63a5\u5230IM\u670d\u52a1\u5668\n} onUserTokenExpired:^{\n    // \u5728\u7ebf\u65f6\u7968\u636e\u8fc7\u671f\uff1a\u6b64\u65f6\u60a8\u9700\u8981\u751f\u6210\u65b0\u7684 token \u5e76\u518d\u6b21\u8c03\u7528 \u7684 login() \u51fd\u6570\u91cd\u65b0\u767b\u5f55\u3002\n}];\n\n')),(0,r.kt)("h3",{id:"4-\u8bbe\u7f6e\u76d1\u542c\u5668"},"4. \u8bbe\u7f6e\u76d1\u542c\u5668"),(0,r.kt)("h4",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f1a\u8bdd\u76f8\u5173\u76d1\u542c\n- (void)setConversationListenerWithOnSyncServerStart:(OIMVoidCallback)onSyncServerStart\n                                  onSyncServerFinish:(OIMVoidCallback)onSyncServerFinish\n                                  onSyncServerFailed:(OIMVoidCallback)onSyncServerFailed\n                               onConversationChanged:(OIMConversationsInfoCallback)onConversationChanged\n                                   onNewConversation:(OIMConversationsInfoCallback)onNewConversation\n                    onTotalUnreadMessageCountChanged:(OIMNumberCallback)onTotalUnreadMessageCountChanged;\n\n// \u597d\u53cb\u5173\u7cfb\u94fe\u76f8\u5173\u76d1\u542c\n- (void)setFriendListenerWithOnBlackAdded:(OIMBlackInfoCallback)onBlackAdded\n                           onBlackDeleted:(OIMBlackInfoCallback)onBlackDeleted\n              onFriendApplicationAccepted:(OIMFriendApplicationCallback)onFriendApplicationAccepted\n                 onFriendApplicationAdded:(OIMFriendApplicationCallback)onFriendApplicationAdded\n               onFriendApplicationDeleted:(OIMFriendApplicationCallback)onFriendApplicationDeleted\n              onFriendApplicationRejected:(OIMFriendApplicationCallback)onFriendApplicationRejected\n                      onFriendInfoChanged:(OIMFriendInfoCallback)onFriendInfoChanged\n                            onFriendAdded:(OIMFriendInfoCallback)onFriendAdded\n                          onFriendDeleted:(OIMFriendInfoCallback)onFriendDeleted;\n\n// \u7fa4\u7ec4\u76f8\u5173\u76d1\u542c\n- (void)setGroupListenerWithOnGroupInfoChanged:(OIMGroupInfoCallback)onGroupInfoChanged\n                            onJoinedGroupAdded:(OIMGroupInfoCallback)onJoinedGroupAdded\n                          onJoinedGroupDeleted:(OIMGroupInfoCallback)onJoinedGroupDeleted\n                            onGroupMemberAdded:(OIMGroupMemberInfoCallback)onGroupMemberAdded\n                          onGroupMemberDeleted:(OIMGroupMemberInfoCallback)onGroupMemberDeleted\n                      onGroupMemberInfoChanged:(OIMGroupMemberInfoCallback)onGroupMemberInfoChanged\n                       onGroupApplicationAdded:(OIMGroupApplicationCallback)onGroupApplicationAdded\n                     onGroupApplicationDeleted:(OIMGroupApplicationCallback)onGroupApplicationDeleted\n                    onGroupApplicationAccepted:(OIMGroupApplicationCallback)onGroupApplicationAccepted\n                    onGroupApplicationRejected:(OIMGroupApplicationCallback)onGroupApplicationRejected\n                              onGroupDismissed:(nullable OIMGroupInfoCallback)onGroupDismissed;\n\n// \u6d88\u606f\u76f8\u5173\u76d1\u542c\n- (void)setAdvancedMsgListenerWithOnRecvMessageRevoked:(OIMRevokedCallback)onRecvMessageRevoked\n                                  onRecvC2CReadReceipt:(OIMReceiptCallback)onRecvC2CReadReceipt\n                                onRecvGroupReadReceipt:(OIMReceiptCallback)onRecvGroupReadReceipt\n                                      onRecvNewMessage:(OIMMessageInfoCallback)onRecvNewMessage;\n\n// \u767b\u5f55\u7528\u6237\u76f8\u5173\u76d1\u542c\n- (void)setSelfUserInfoUpdateListener:(OIMUserInfoCallback)onUserInfoUpdate;\n\n// \u7528\u6237\u72b6\u6001\u76f8\u5173\u76d1\u542c\n- (void)setUserListenerWithUserInfoUpdate:(nullable OIMUserInfoCallback)onUserInfoUpdate\n                      onUserStatusChanged:(nullable OIMUserStatusInfoCallback)onUserStatusChanged;\n\n// \u81ea\u5b9a\u4e49\u4e1a\u52a1\u76f8\u5173\u76d1\u542c\n- (void)setRecvCustomBusinessMessageListener:(OIMObjectCallback)onRecvCustomBusinessMessage;\n    \n")),(0,r.kt)("h4",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"\n// \u4f1a\u8bdd\u76f8\u5173\u76d1\u542c\n- (void)addConversationListener:(id<OIMConversationListener>)listener;\n- (void)addIMSDKListener:(id<OIMSDKListener>)listener;\n// \u597d\u53cb\u5173\u7cfb\u94fe\u76f8\u5173\u76d1\u542c\n- (void)addFriendListener:(id<OIMFriendshipListener>)listener;\n// \u7fa4\u7ec4\u76f8\u5173\u76d1\u542c\n- (void)addGroupListener:(id<OIMGroupListener>)listener;\n// \u6d88\u606f\u76f8\u5173\u76d1\u542c\n- (void)addAdvancedMsgListener:(id<OIMAdvancedMsgListener>)listener;\n// \u7528\u6237\u76f8\u5173\u76d1\u542c\n- (void)addUserListener:(id<OIMUserListener>)listener;\n// \u81ea\u5b9a\u4e49\u4e1a\u52a1\u76f8\u5173\u76d1\u542c\n- (void)addCustomBusinessListener:(id<OIMCustomBusinessListener>)listener;\n\n")),(0,r.kt)("h3",{id:"5-\u767b\u5f55"},"5. \u767b\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'[OIMManager.manager login:@""\n                    token:@""\n                    onSuccess:^(NSString * _Nullable data) {\n\n} onFailure:^(NSInteger code, NSString * _Nullable msg) {\n\n}];\n')),(0,r.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,r.kt)("p",null,"1\u3001SDK \u53ea\u80fd\u521d\u59cb\u5316\u4e00\u6b21\u3002"),(0,r.kt)("p",null,"2\u3001\u5176\u4ed6 api \u8c03\u7528\u5fc5\u987b\u4fdd\u8bc1\u767b\u5f55\u56de\u8c03\u6210\u529f\u540e\u64cd\u4f5c\u3002"))}f.isMDXComponent=!0}}]);