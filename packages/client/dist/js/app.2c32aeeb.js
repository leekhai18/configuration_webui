(function(e){function t(t){for(var n,s,l=t[0],a=t[1],u=t[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);r&&r(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,l=1;l<o.length;l++){var a=o[l];0!==i[a]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},c=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var r=a;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),i=o("cf05"),c=o.n(i),s=Object(n["i"])("img",{alt:"Vue logo",src:c.a},null,-1);function l(e,t,o,i,c,l){var a=Object(n["p"])("GetRequest");return Object(n["l"])(),Object(n["f"])("div",null,[s,Object(n["i"])(a)])}var a=Object(n["i"])("h5",null,"Configuration GUI",-1),u={class:"load"},r={class:"config"},d={key:0,class:"set"},p={class:"card"},f={class:"card-header"},h=Object(n["i"])("h5",null,"Execution script",-1),g={class:"card"},v={class:"card-header"},b=Object(n["i"])("h5",null,"IPAddress",-1),O={class:"card"},j={class:"card-header"},m=Object(n["i"])("h5",null,"TV config",-1),C={key:1},y=Object(n["i"])("span",{class:"tv-label"},"group name: ",-1),T={class:"tv-value"},M=Object(n["i"])("span",{class:"tv-label"},"width: ",-1),x={class:"tv-value"},P=Object(n["i"])("span",{class:"tv-label"},"height: ",-1),F={class:"tv-value"},k=Object(n["i"])("span",{class:"tv-label"},"rate: ",-1),I={class:"tv-value"},E=Object(n["i"])("span",{class:"tv-label"},"aspect ratio: ",-1),A={class:"tv-value"};function w(e,t,o,i,c,s){var l,w,S,G,R,V=Object(n["p"])("ProgressSpinner"),_=Object(n["p"])("Button"),$=Object(n["p"])("InputText"),B=Object(n["p"])("CascadeSelect"),N=Object(n["p"])("Toast");return Object(n["l"])(),Object(n["f"])("div",null,[a,Object(n["i"])("div",u,[c.isFetching?(Object(n["l"])(),Object(n["f"])(V,{key:0,style:{width:"40px",height:"40px"},strokeWidth:"4",fill:"#EEEEEE",animationDuration:".5s"})):Object(n["g"])("",!0),Object(n["i"])("span",r,Object(n["s"])(c.getError),1)]),c.isFetching?Object(n["g"])("",!0):(Object(n["l"])(),Object(n["f"])("div",d,[null!==c.getResponse?(Object(n["l"])(),Object(n["f"])(_,{key:0,class:"set-btn",label:"Refresh",onClick:s.loadConfig},null,8,["onClick"])):Object(n["g"])("",!0),null===c.getResponse&&null===c.postResponse?(Object(n["l"])(),Object(n["f"])(_,{key:1,class:"set-btn",label:"Retry",onClick:s.loadConfig},null,8,["onClick"])):Object(n["g"])("",!0)])),Object(n["i"])("div",p,[Object(n["i"])("div",f,[h,Object(n["i"])(_,{icon:"pi pi-cog",class:["p-button-rounded p-button-text",{"p-button-secondary":!c.configuringExecutionFilePath}],onClick:s.onClickConfigExecutionFilePath},null,8,["class","onClick"])]),Object(n["i"])($,{ref:"executionFilePathInput",placeholder:"execution/file/path",modelValue:c.executionFilePath,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.executionFilePath=e}),disabled:!c.configuringExecutionFilePath},null,8,["modelValue","disabled"]),c.configuringExecutionFilePath?(Object(n["l"])(),Object(n["f"])(_,{key:0,label:"Save",onClick:s.saveExecutionFilePath,class:"save-btn"},null,8,["onClick"])):Object(n["g"])("",!0)]),Object(n["i"])("div",g,[Object(n["i"])("div",v,[b,Object(n["i"])(_,{icon:"pi pi-cog",class:["p-button-rounded p-button-text",{"p-button-secondary":!c.configuringIpAddress}],onClick:s.onClickConfigIpAddress},null,8,["class","onClick"])]),Object(n["i"])($,{ref:"ipAddressInput",placeholder:"host:port",disabled:!c.configuringIpAddress,modelValue:c.ipAddress,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.ipAddress=e}),class:{"p-invalid":!c.ipAddressIsValid},onBlur:s.ipInputBlur},null,8,["disabled","modelValue","class","onBlur"]),c.configuringIpAddress?(Object(n["l"])(),Object(n["f"])(_,{key:0,label:"Save",onClick:s.saveIpAddress,class:"save-btn"},null,8,["onClick"])):Object(n["g"])("",!0)]),Object(n["i"])("div",O,[Object(n["i"])("div",j,[m,Object(n["i"])(_,{icon:"pi pi-cog",class:["p-button-rounded p-button-text",{"p-button-secondary":!c.configuringTvMode}],onClick:s.onClickConfigTvMode},null,8,["class","onClick"])]),c.configuringTvMode?(Object(n["l"])(),Object(n["f"])(B,{key:0,ref:"tvModeSelect",modelValue:c.tvMode,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.tvMode=e}),options:c.tvModeOption,optionLabel:s.optionLabelGetter,optionGroupLabel:"groupName",optionGroupChildren:["data"],style:{minwidth:"14rem","margin-bottom":"16px"},placeholder:"Select tv mode",onChange:s.tvModeSelectChange,onGroupChange:s.tvModeGroupChange},null,8,["modelValue","options","optionLabel","onChange","onGroupChange"])):Object(n["g"])("",!0),Object(n["i"])("div",null,[c.configuringTvMode?(Object(n["l"])(),Object(n["f"])(_,{key:0,label:"Reset to default",class:"p-button-outlined p-button-secondary",onClick:s.resetToDefaultTvMode},null,8,["onClick"])):Object(n["g"])("",!0)]),c.configuringTvMode?Object(n["g"])("",!0):(Object(n["l"])(),Object(n["f"])("div",C,[Object(n["i"])("div",null,[y,Object(n["i"])("span",T,Object(n["s"])(null===(l=c.tvModeGroup)||void 0===l?void 0:l.groupName),1)]),Object(n["i"])("div",null,[M,Object(n["i"])("span",x,Object(n["s"])(null!==(w=c.tvMode)&&void 0!==w&&w.width?"".concat(c.tvMode.width,"px"):""),1)]),Object(n["i"])("div",null,[P,Object(n["i"])("span",F,Object(n["s"])(null!==(S=c.tvMode)&&void 0!==S&&S.height?"".concat(c.tvMode.height,"px"):""),1)]),Object(n["i"])("div",null,[k,Object(n["i"])("span",I,Object(n["s"])(null!==(G=c.tvMode)&&void 0!==G&&G.rate?"".concat(c.tvMode.rate,"hz"):""),1)]),Object(n["i"])("div",null,[E,Object(n["i"])("span",A,Object(n["s"])(null===(R=c.tvMode)||void 0===R?void 0:R.aspect_ratio),1)])]))]),Object(n["i"])(N)])}o("1276"),o("ac1f"),o("99af"),o("7db0"),o("498a");var S=o("bc3a"),G=o.n(S),R=window.location.hostname,V={name:"GetRequest",data:function(){return{isFetching:!1,getResponse:null,getError:null,postResponse:null,postError:null,executionFilePath:null,executionFilePathIsValid:!0,configuringExecutionFilePath:null,ipAddress:null,ipAddressIsValid:!0,configuringIpAddress:null,tvMode:null,tvModeGroup:null,configuringTvMode:null,displayModal:!1,tvModeOption:[{groupName:"DMT",groupId:2,data:[{code:4,width:640,height:480,rate:60,aspect_ratio:"4:3",scan:"p","3d_modes":[]},{code:5,width:640,height:480,rate:72,aspect_ratio:"4:3",scan:"p","3d_modes":[]}]},{groupName:"CEA",groupId:1,data:[{code:1,width:640,height:480,rate:60,aspect_ratio:"4:3",scan:"p","3d_modes":[]},{code:2,width:720,height:480,rate:60,aspect_ratio:"4:3",scan:"p","3d_modes":[]}]}]}},created:function(){this.loadConfig(),this.loadExecutionFilePath()},methods:{loadExecutionFilePath:function(){var e=this;G.a.get("http://".concat(R,":3000/getBashFilePath")).then((function(t){setTimeout((function(){e.executionFilePath=t.data}),500)})).catch((function(t){setTimeout((function(){e.getError=t.message,console.error("There was an error by GET!",t)}),500)}))},setExecutionFilePath:function(){var e=this;this.getResponse&&G.a.post("http://".concat(R,":3000/setBashFilePath"),this.executionFilePath,{headers:{"Content-Type":"text/plain"}}).then((function(t){setTimeout((function(){e.executionFilePath=t.data,e.configuringExecutionFilePath=!1,e.$toast.add({severity:"success",summary:"Successfully!",detail:"Set execution pile path successfully",life:3e3})}),500)})).catch((function(t){setTimeout((function(){e.postError=t.message,console.error("There was an error by POST!",t)}),500)}))},setIpAddress:function(){var e=this;if(this.getResponse){var t=this.ipAddress.split(":");G.a.post("http://".concat(R,":3000/setConfigure"),{host:t[0],port:t[1]}).then((function(){setTimeout((function(){e.configuringIpAddress=!1,e.$toast.add({severity:"success",summary:"Successfully!",detail:"Set ip address successfully",life:3e3})}),500)})).catch((function(t){setTimeout((function(){e.postError=t.message,console.error("There was an error by POST!",t)}),500)}))}},setTvConfig:function(e,t){var o=this;this.getResponse&&G.a.post("http://".concat(R,":3000/setConfigure"),{tvConfig:{group:e,code:t}}).then((function(){setTimeout((function(){o.configuringTvMode=!1,o.$toast.add({severity:"success",summary:"Successfully!",detail:"Set tv mode successfully",life:3e3})}),500)})).catch((function(e){setTimeout((function(){o.postError=e.message,console.error("There was an error by POST!",e)}),500)}))},loadConfig:function(){var e=this;this.isFetching=!0,G.a.get("http://".concat(R,":3000/getConfigure")).then((function(t){setTimeout((function(){var o,n,i,c,s,l,a,u,r;e.getResponse=t.data,e.ipAddress="".concat(null===(o=t.data)||void 0===o?void 0:o.host,":").concat(null===(n=t.data)||void 0===n?void 0:n.port),e.tvModeOption=null!==(i=null===(c=t.data)||void 0===c||null===(s=c.tvConfig)||void 0===s?void 0:s.support)&&void 0!==i?i:e.tvModeOption;var d=null===(l=t.data)||void 0===l||null===(a=l.tvConfig)||void 0===a?void 0:a.currentMode,p=null===(u=t.data)||void 0===u||null===(r=u.tvConfig)||void 0===r?void 0:r.support.find((function(e){return e.groupId===d.group}));e.tvModeGroup=p,e.tvMode=p.data.find((function(e){return e.code===d.code})),e.isFetching=!1}),500)})).catch((function(t){setTimeout((function(){e.getError=t.message,console.error("There was an error by GET!",t),e.isFetching=!1}),500)}))},setConfig:function(){var e=this;this.getResponse&&(this.isFetching=!0,G.a.post("http://".concat(R,":3000/setConfigure"),this.getResponse).then((function(t){setTimeout((function(){e.postResponse=t.data,e.$toast.add({severity:"success",summary:"Successfully!",detail:"Set configure successfully",life:3e3}),setTimeout((function(){e.postResponse=null}),3e3),e.isFetching=!1}),500)})).catch((function(t){setTimeout((function(){e.postError=t.message,console.error("There was an error by POST!",t),e.isFetching=!1}),500)})))},ipInputBlur:function(){var e;console.log(this.ipAddress),2===(null===(e=this.ipAddress)||void 0===e?void 0:e.split(":").length)?this.ipAddressIsValid=!0:this.ipAddressIsValid=!1},onClickConfigExecutionFilePath:function(){var e=this;this.configuringExecutionFilePath=!this.configuringExecutionFilePath,setTimeout((function(){var t;null===(t=e.$refs.executionFilePathInput)||void 0===t||t.$el.focus()}))},onClickConfigIpAddress:function(){var e=this;this.configuringIpAddress=!this.configuringIpAddress,setTimeout((function(){var t;null===(t=e.$refs.ipAddressInput)||void 0===t||t.$el.focus()}))},onClickConfigTvMode:function(){var e=this;this.configuringTvMode=!this.configuringTvMode,setTimeout((function(){var t;null===(t=e.$refs.tvModeSelect)||void 0===t||t.$el.focus()}))},tvModeGroupChange:function(e){console.log(e.value),console.log(e.value.groupName),this.tvModeGroup={groupName:e.value.groupName,groupId:e.value.groupId}},tvModeSelectChange:function(e){console.log(e.value.code),this.setTvConfig(this.tvModeGroup.groupId,this.tvMode.code),this.configuringTvMode=!1},resetToDefaultTvMode:function(){this.tvMode=null,this.tvModeGroup=null,this.setTvConfig(0,0)},optionLabelGetter:function(e){return"".concat(e.width,"x").concat(e.height,", ").concat(e.rate,"hz, ").concat(e.aspect_ratio)},saveExecutionFilePath:function(){this.executionFilePath.trim()&&this.setExecutionFilePath()},saveIpAddress:function(){this.ipAddressIsValid&&this.setIpAddress()}}};o("c409");V.render=w;var _=V,$={name:"App",components:{GetRequest:_}};o("6c7f");$.render=l;var B=$,N=(o("098b"),o("e1ae"),o("4121"),o("9319")),D=o("bb57"),L=o("b3b6"),U=o("485c"),q=o("a469"),z=o("8398"),J=o("9899"),W=o("5bd2"),H=o("c1f6"),K=Object(n["e"])(B);K.use(N["a"]),K.use(U["a"]),K.component("Toast",L["a"]),K.component("Button",D["a"]),K.component("ProgressSpinner",q["a"]),K.component("InputText",z["a"]),K.component("Card",J["a"]),K.component("Dialog",W["a"]),K.component("CascadeSelect",H["a"]),K.mount("#app")},"6c7f":function(e,t,o){"use strict";o("a008")},a008:function(e,t,o){},c409:function(e,t,o){"use strict";o("c9b3")},c9b3:function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2c32aeeb.js.map