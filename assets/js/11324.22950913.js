"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[11324,29497],{11324:(e,t,r)=>{r.r(t),r.d(t,{dyte_participants:()=>p});var s=r(65733),o=r(96633),a=r(20336),n=r(85371),i=r(46503),c=r(37692);r(21237),r(24555),r(60804);const p=class{constructor(e){(0,s.r)(this,e),this.onSearchInput=e=>{this.search=e.target.value},this.meeting=void 0,this.states=void 0,this.config=c.d,this.size=void 0,this.iconPack=o.d,this.t=(0,a.u)(),this.search=""}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){this.meeting}meetingChanged(e){}render(){const e={meeting:this.meeting,states:this.states||i.s,config:this.config,size:this.size,iconPack:this.iconPack,t:this.t};return(0,s.h)(s.H,null,(0,s.h)("div",{class:"search",part:"search"},(0,s.h)("dyte-icon",{icon:this.iconPack.search,part:"search-icon",iconPack:this.iconPack,t:this.t}),(0,s.h)("input",{type:"search",autocomplete:"off",placeholder:"Search",onInput:this.onSearchInput,part:"search-input"})),(0,s.h)("div",{class:"ctr scrollbar",part:"container"},(0,s.h)(n.R,{element:"dyte-participants-waiting-list",defaults:e}),(0,s.h)(n.R,{element:"dyte-participants-stage-queue",defaults:e}),(0,s.h)(n.R,{element:"dyte-participants-stage-list",defaults:e,props:{search:this.search}}),(0,s.h)(n.R,{element:"dyte-participants-viewer-list",defaults:e,props:{search:this.search}})))}static get watchers(){return{meeting:["meetingChanged"]}}};p.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host{display:flex;height:100%;width:100%;flex-direction:column;font-size:14px}*{box-sizing:border-box}.ctr{margin-top:var(--dyte-space-2, 8px);margin-bottom:var(--dyte-space-2, 8px);box-sizing:border-box;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-0, 0px);padding-bottom:var(--dyte-space-0, 0px);overflow-y:auto;flex-grow:1;flex-basis:0}.search{position:-webkit-sticky;position:sticky;box-sizing:border-box;display:flex;align-items:center;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));margin-left:var(--dyte-space-3, 12px);margin-right:var(--dyte-space-3, 12px);margin-top:var(--dyte-space-0, 0px);margin-bottom:var(--dyte-space-0, 0px)}.search dyte-icon{margin-left:var(--dyte-space-2, 8px);margin-right:var(--dyte-space-2, 8px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}.search input{box-sizing:border-box;height:var(--dyte-space-9, 36px);width:100%;padding-right:var(--dyte-space-2, 8px);border-width:var(--dyte-border-width-none, 0);border-style:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));outline:2px solid transparent;outline-offset:2px;border-radius:var(--dyte-border-radius-sm, 4px);font-size:14px}.search input::-moz-placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}.search input::placeholder{color:rgb(var(--dyte-colors-text-800, 255 255 255 / 0.76))}:host([size='md']) .search{margin-top:var(--dyte-space-4, 16px) !important;margin-bottom:var(--dyte-space-4, 16px) !important}:host([size='sm']) .search{margin-top:var(--dyte-space-4, 16px) !important;margin-bottom:var(--dyte-space-4, 16px) !important}"},85371:(e,t,r)=>{r.d(t,{R:()=>a});var s=r(65733);const o=({elements:e,defaults:t,props:r={},deepProps:o=!1,elementProps:n={}})=>Array.isArray(e)&&0!==e.length?e.map((e=>(0,s.h)(a,{element:e,defaults:t,props:r,childProps:o&&r,elementProps:n}))):null,a=({element:e,defaults:t,childProps:r={},props:a={},onlyChildren:n=!1,asHost:i=!1,deepProps:c=!1,elementProps:p={}},d)=>{var l;const{config:h,size:g,states:y}=t;let f,u={};Array.isArray(e)?[f,u]=e:f=e;const b=null===(l=null==h?void 0:h.root)||void 0===l?void 0:l[f];null!=b&&"props"in b&&(a=Object.assign(Object.assign({},b.props),a)),a=Object.assign(Object.assign({},a),u),f in p&&(a=Object.assign(Object.assign({},a),p[f]));const m=(({element:e,size:t,states:r={},config:s={}})=>{let o=[];const a=null==s?void 0:s.root[e],n=e=>{o.push(e),"string"==typeof t&&o.push(`${e}.${t}`)};if(n(e),"object"==typeof a&&!Array.isArray(a)&&null!==a){const{state:t,states:s}=a;let o=e,i=[];if(Array.isArray(s)){i=s.filter((e=>r[e])),i.sort();for(const e of i)n(`${o}.${e}`);i.length>1&&n([o,...i].join("."))}if("string"==typeof t){const s=`${e}[${t}=${r[t]}]`;n(s);for(const e of i)n(`${s}.${e}`);i.length>1&&n([s,...i].join("."))}}return o})({element:f,size:g,states:y,config:h}),v=(({selectors:e,root:t})=>{if(!t||!Array.isArray(e))return[];let r=[];for(const s of e){const e=t[s];if(Array.isArray(e))r=[...e];else if(e){if(e.children&&(r=[...e.children]),Array.isArray(e.remove))for(const t of e.remove)r=r.filter((e=>"string"==typeof e?e!==t:!Array.isArray(e)||e[0]!==t));if(e.addBefore)for(const[t,s]of Object.entries(e.addBefore)){const e=r.findIndex((e=>"string"==typeof e?e===t:!!Array.isArray(e)&&e[0]===t));e>=0&&r.splice(e,0,...s)}Array.isArray(e.add)&&(r=r.concat(e.add)),Array.isArray(e.prepend)&&(r=e.prepend.concat(r))}}return r})({selectors:m,root:h.root});if(n)return(0,s.h)(o,{elements:v,defaults:t,props:r,deepProps:c,elementProps:p});const x=(({selectors:e,styles:t})=>{if(!Array.isArray(e)||null==t)return{};const r={};for(const s of e){const e=t[s];null!=e&&Object.assign(r,e)}return r})({selectors:m,styles:h.styles});if(i)return(0,s.h)(s.H,Object.assign({},t,{style:x},a),(0,s.h)(o,{elements:v,defaults:t,props:r,deepProps:c,elementProps:p}),d);if(["dyte-header","dyte-controlbar"].includes(f)&&(a.disableRender=!0),f.startsWith("dyte-"))return(0,s.h)(f,Object.assign({},t,{style:x},a),(0,s.h)(o,{elements:v,defaults:t,props:r,deepProps:c,elementProps:p}),d);{const[e,a]=f.split("#");return(0,s.h)(e,{id:a,style:x},(0,s.h)(o,{elements:v,defaults:t,props:r,deepProps:c,elementProps:p}),d)}}},46503:(e,t,r)=>{r.d(t,{o:()=>p,s:()=>c});var s=r(65733);const o=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let r;return(...s)=>{r&&clearTimeout(r),r=setTimeout((()=>{r=0,e(...s)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(o))}),2e3),n=e=>"function"==typeof e?e():e,i=(e,t)=>{const r=e.indexOf(t);r>=0&&(e[r]=e[e.length-1],e.length--)},{state:c,onChange:p}=((e,t)=>{const r=((e,t=((e,t)=>e!==t))=>{const r=n(e);let s=new Map(Object.entries(null!=r?r:{}));const o={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;s=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),o.reset.forEach((e=>e()))},c=e=>(o.get.forEach((t=>t(e))),s.get(e)),p=(e,r)=>{const a=s.get(e);t(r,a,e)&&(s.set(e,r),o.set.forEach((t=>t(e,r,a))))},d="undefined"==typeof Proxy?{}:new Proxy(r,{get:(e,t)=>c(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,r)=>(p(t,r),!0)}),l=(e,t)=>(o[e].push(t),()=>{i(o[e],t)});return{state:d,get:c,set:p,on:l,onChange:(t,r)=>{const s=l("set",((e,s)=>{e===t&&r(s)})),o=l("reset",(()=>r(n(e)[t])));return()=>{s(),o()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(l("set",t.set)),t.get&&e.push(l("get",t.get)),t.reset&&e.push(l("reset",t.reset)),t.dispose&&e.push(l("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=s.get(e);o.set.forEach((r=>r(e,t,t)))}}})(e,t);return r.use((()=>{if("function"!=typeof s.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const r=(0,s.a)();r&&((e,t,r)=>{const s=e.get(t);s?s.includes(r)||s.push(r):e.set(t,[r])})(e,t,r)},set:t=>{const r=e.get(t);r&&e.set(t,r.filter(s.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),a(e)}}})()),r})({})}}]);