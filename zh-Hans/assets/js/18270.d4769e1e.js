"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[18270,4240],{18270:(e,t,s)=>{s.r(t),s.d(t,{dyte_screen_share_toggle:()=>c});var r=s(65733),n=s(96633),i=s(20336),a=s(86386),h=s(46503);const o=()=>"undefined"!=typeof navigator&&void 0!==navigator.mediaDevices&&"getDisplayMedia"in navigator.mediaDevices,c=class{constructor(e){(0,r.r)(this,e),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.dyteAPIError=(0,r.c)(this,"dyteAPIError",7),this.selfScreenShareListener=({screenShareEnabled:e})=>{this.screenShareEnabled=e;const t=this.screenShareCount+(e?1:-1);this.screenShareCount=Math.max(t,0),this.getState(),this.meeting.__internals__.logger.info("dyteScreenShare::screenShareUpdate",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount}}})},this.screenShareListener=({screenShareEnabled:e})=>{const t=this.screenShareCount+(e?1:-1);this.screenShareCount=Math.max(t,0),this.getState(),this.meeting.__internals__.logger.info("dyteScreenShare::screenShareUpdate",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount}}})},this.participantLeftListener=({screenShareEnabled:e})=>{e&&(this.screenShareCount=Math.max(this.screenShareCount-1,0),this.getState(),this.meeting.__internals__.logger.info("dyteScreenShare::screenShareUpdate",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount}}}))},this.selfJoinStateListener=()=>{this.updateCanProduce(this.meeting)},this.selfStageLeftListener=()=>{this.canScreenShare=!1},this.selfJoinStateRejectedListener=()=>{this.updateCanProduce(this.meeting)},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{if("screenshare"===e&&(this.shareScreenPermission=t,this.getState(),"COULD_NOT_START"===t&&this.dyteAPIError.emit({trace:this.t("screenshare.permissions"),message:this.t("screenshare.error.unknown")}),this.hasPermissionError())){const e={enabled:!0,kind:"screenshare"};this.stateUpdate.emit({activePermissionsMessage:e}),h.s.activePermissionsMessage=e}},this.reachedMaxScreenShares=()=>this.maxScreenShareCount>0&&this.screenShareCount>=this.maxScreenShareCount,this.toggleScreenShare=async()=>{var e;if(this.screenShareState.disable)return;if(this.hasPermissionError()){const e={enabled:!0,kind:"screenshare"};return this.stateUpdate.emit({activePermissionsMessage:e}),h.s.activePermissionsMessage=e,!1}const t=null===(e=this.meeting)||void 0===e?void 0:e.self;this.screenShareEnabled?t.disableScreenShare():null==t||!this.canScreenShare||this.reachedMaxScreenShares()||this.hasPermissionError()||(this.screenShareState=Object.assign(Object.assign({},this.screenShareState),{disable:!0}),await t.enableScreenShare(),this.screenShareState=Object.assign(Object.assign({},this.screenShareState),{disable:!1}),this.stateUpdate.emit({activeMoreMenu:!1}),h.s.activeMoreMenu=!1)},this.states=void 0,this.variant="button",this.meeting=void 0,this.size=void 0,this.iconPack=n.d,this.t=(0,i.u)(),this.maxScreenShareCount=-1,this.screenShareCount=0,this.screenShareEnabled=!1,this.canScreenShare=!1,this.shareScreenPermission="NOT_REQUESTED",this.screenShareState={tooltipLabel:this.t("screenshare.start"),label:this.t("screenshare.start"),icon:this.iconPack.share_screen_start,classList:{},showWarning:!1,disable:!1}}connectedCallback(){o()?this.meetingChanged(this.meeting):a.l.error("[dyte-screenshare-toggle] Device does not support screensharing.")}disconnectedCallback(){var e,t,s,r,n,i,a,h,o,c,d;null===(e=this.meeting)||void 0===e||e.participants.joined.removeListener("screenShareUpdate",this.screenShareListener),null===(t=this.meeting)||void 0===t||t.participants.joined.removeListener("participantLeft",this.participantLeftListener),null===(s=this.meeting)||void 0===s||s.self.removeListener("screenShareUpdate",this.selfScreenShareListener),null===(r=this.meeting)||void 0===r||r.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),null===(n=this.meeting)||void 0===n||n.self.removeListener("joinStageRequestAccepted",this.selfJoinStateListener),null===(i=this.meeting)||void 0===i||i.self.removeListener("joinStageRequestRejected",this.selfJoinStateRejectedListener),null===(a=this.meeting)||void 0===a||a.self.removeListener("stageJoined",this.selfJoinStateListener),null===(h=this.meeting)||void 0===h||h.self.removeListener("stageLeft",this.selfStageLeftListener),null===(o=this.meeting)||void 0===o||o.self.removeListener("removedFromStage",this.selfJoinStateListener),null===(d=null===(c=this.meeting)||void 0===c?void 0:c.stage)||void 0===d||d.removeListener("stageStatusUpdate",this.selfJoinStateListener)}meetingChanged(e){if(null!=e){const{self:t,stage:s}=e;this.updateCanProduce(e),this.maxScreenShareCount=t.config.maxScreenShareCount,this.screenShareEnabled=t.screenShareEnabled;let r=0;for(const n of e.participants.joined.toArray())n.screenShareEnabled&&r++;this.screenShareCount=r,this.getState(),e.__internals__.logger.info("dyteScreenShare::initialise",{media:{screenshare:{enabled:this.screenShareEnabled,count:this.screenShareCount,maxAllowedCount:this.maxScreenShareCount}}}),e.participants.joined.addListener("screenShareUpdate",this.screenShareListener),e.participants.joined.addListener("participantLeft",this.participantLeftListener),t.addListener("screenShareUpdate",this.selfScreenShareListener),t.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),t.addListener("joinStageRequestAccepted",this.selfJoinStateListener),t.addListener("joinStageRequestRejected",this.selfJoinStateRejectedListener),t.addListener("stageJoined",this.selfJoinStateListener),t.addListener("stageLeft",this.selfStageLeftListener),t.addListener("removedFromStage",this.selfJoinStateListener),null==s||s.addListener("stageStatusUpdate",this.selfJoinStateListener)}}updateCanProduce(e){const{self:t,meta:s,stage:r}=e,n="ALLOWED"===t.permissions.canProduceScreenshare,i="WEBINAR"===s.viewType,a="LIVESTREAM"===s.viewType;if(this.canScreenShare=!1,n&&!a)this.canScreenShare=!0;else if(i||a){n&&"OFF_STAGE"!==r.status&&"REQUESTED_TO_JOIN_STAGE"!==r.status&&(this.canScreenShare=!0);"CAN_REQUEST"===t.permissions.canProduceScreenshare&&(i&&("ON_STAGE"===t.webinarStageStatus||"ACCEPTED_TO_JOIN_STAGE"===t.webinarStageStatus)||a&&("ON_STAGE"===r.status||"ACCEPTED_TO_JOIN_STAGE"===r.status))&&(this.canScreenShare=!0)}}hasPermissionError(){return"SYSTEM_DENIED"===this.shareScreenPermission||"DENIED"===this.shareScreenPermission}getState(){let e="",t="",s="",r={};const n=this.hasPermissionError()&&!this.screenShareEnabled,i=this.reachedMaxScreenShares()&&!this.screenShareEnabled,a="COULD_NOT_START"===this.shareScreenPermission;this.screenShareEnabled&&!n?(t=this.t("screenshare.stop"),s=this.iconPack.share_screen_stop,r["red-icon"]=!0):(t=this.t("screenshare.start"),s=this.iconPack.share_screen_start),"SYSTEM_DENIED"===this.shareScreenPermission?(e=this.t("perm_sys_denied.screenshare"),r["red-icon"]=!0):"DENIED"===this.shareScreenPermission?(e=this.t("perm_denied.screenshare"),r["red-icon"]=!0):e=t,i&&(e=this.t("screenshare.error.max_count")),a&&(e=this.t("screenshare.error.unknown")),this.screenShareState={tooltipLabel:e,label:t,icon:s,classList:r,disable:n||i,showWarning:n||i||a}}render(){return o()&&this.canScreenShare?(0,r.h)(r.H,{title:this.screenShareState.label},(0,r.h)("dyte-tooltip",{placement:"top",kind:"block",label:this.screenShareState.tooltipLabel,delay:600,part:"tooltip",iconPack:this.iconPack,t:this.t},(0,r.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,variant:this.variant,label:this.screenShareState.label,icon:this.screenShareState.icon,class:this.screenShareState.classList,onClick:this.toggleScreenShare,disabled:this.screenShareState.disable,showWarning:this.screenShareState.showWarning}))):null}static get watchers(){return{meeting:["meetingChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}"},46503:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>o});var r=s(65733);const n=e=>!("isConnected"in e)||e.isConnected,i=((e,t)=>{let s;return(...r)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...r)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),a=e=>"function"==typeof e?e():e,h=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:o,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{const s=a(e);let r=new Map(Object.entries(null!=s?s:{}));const n={dispose:[],get:[],set:[],reset:[]},i=()=>{var t;r=new Map(Object.entries(null!==(t=a(e))&&void 0!==t?t:{})),n.reset.forEach((e=>e()))},o=e=>(n.get.forEach((t=>t(e))),r.get(e)),c=(e,s)=>{const i=r.get(e);t(s,i,e)&&(r.set(e,s),n.set.forEach((t=>t(e,s,i))))},d="undefined"==typeof Proxy?{}:new Proxy(s,{get:(e,t)=>o(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,s)=>(c(t,s),!0)}),S=(e,t)=>(n[e].push(t),()=>{h(n[e],t)});return{state:d,get:o,set:c,on:S,onChange:(t,s)=>{const r=S("set",((e,r)=>{e===t&&s(r)})),n=S("reset",(()=>s(a(e)[t])));return()=>{r(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(S("set",t.set)),t.get&&e.push(S("get",t.get)),t.reset&&e.push(S("reset",t.reset)),t.dispose&&e.push(S("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{n.dispose.forEach((e=>e())),i()},reset:i,forceUpdate:e=>{const t=r.get(e);n.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.a)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),i(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),i(e)}}})()),s})({})}}]);