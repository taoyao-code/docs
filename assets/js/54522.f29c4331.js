"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[54522,25472],{25472:(e,i,t)=>{t.r(i),t.d(i,{dyte_plugin_main:()=>s});var n=t(65733),o=t(96633),a=t(20336);const s=class{constructor(e){(0,n.r)(this,e),this.meeting=void 0,this.plugin=void 0,this.iconPack=o.d,this.t=(0,a.u)(),this.canClosePlugin=!1,this.canControl=!0,this.viewModeEnabled=!1}componentDidLoad(){this.meetingChanged(this.meeting),this.pluginChanged(this.plugin)}meetingChanged(e){var i;if(null!=e){const t=e.self.permissions,o=t.isV2?t.plugins.canEditConfig:t.plugins.canEditAcl;if(void 0!==t.plugins.config){Object.keys(t.plugins.config||{}).forEach((e=>{t.plugins.config[e.toLowerCase()]=t.plugins.config[e]}));const n=this.plugin.id.replace(new RegExp("-","g"),""),a="whitelist"===((null===(i=t.plugins.config[n])||void 0===i?void 0:i.defaultAccess)||"blacklist");this.plugin.enabledBy===e.self.userId||o?this.canControl=!0:a&&(this.canControl=!1),this.viewModeEnabled=!this.canControl}(0,n.w)((()=>{this.canClosePlugin=e.self.permissions.plugins.canClose}))}}pluginChanged(e){this.toggleViewModeListener=e=>{this.viewModeEnabled=e},null!=e&&(e.addPluginView(this.iframeEl),e.addListener("toggleViewMode",this.toggleViewModeListener))}disconnectedCallback(){var e;null===(e=this.plugin)||void 0===e||e.removeListener("toggleViewMode",this.toggleViewModeListener)}render(){return null==this.plugin?null:(0,n.h)(n.H,null,(0,n.h)("header",{part:"header"},(0,n.h)("div",null,this.plugin.name),this.canClosePlugin&&(0,n.h)("div",null,(0,n.h)("dyte-button",{kind:"icon",onClick:()=>this.plugin.deactivate(),part:"button",iconPack:this.iconPack,t:this.t},(0,n.h)("dyte-icon",{icon:this.iconPack.dismiss,iconPack:this.iconPack,t:this.t})))),(0,n.h)("div",{class:"iframe-container"},!this.canControl&&(this.viewModeEnabled?(0,n.h)("div",{class:"block-inputs"}):null),(0,n.h)("iframe",{ref:e=>this.iframeEl=e,part:"iframe"})))}static get watchers(){return{meeting:["meetingChanged"],plugin:["pluginChanged"]}}};s.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-lg, 12px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}header{display:flex;height:var(--dyte-space-8, 32px);align-items:center;justify-content:space-between;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}header>div{display:flex;align-items:center}dyte-button{display:flex;height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);flex-direction:column;align-items:center;border-radius:9999px}dyte-button dyte-icon{height:var(--dyte-space-3, 12px);width:var(--dyte-space-3, 12px)}iframe{display:block;flex:1 1 0%;margin:var(--dyte-space-0, 0px);border-width:var(--dyte-border-width-none, 0);border-style:none;padding:var(--dyte-space-0, 0px);outline:2px solid transparent;outline-offset:2px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-video-bg, 24 24 24) / var(--tw-bg-opacity))}.iframe-container{position:relative;height:100%;width:100%}.block-inputs{position:absolute;z-index:10;height:100%;width:100%;border-left-width:var(--dyte-border-width-none, 0);border-top-width:var(--dyte-border-width-lg, 4px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-border-opacity))}iframe{height:100%;width:100%}"}}]);