(function(t){function e(e){for(var a,c,r=e[0],s=e[1],l=e[2],u=0,w=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&w.push(i[c][0]),i[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(w.length)w.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2f6a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"app"},r=c,s=n("2877"),l=Object(s["a"])(r,i,o,!1,null,null,null),d=l.exports,u=n("b970"),w=(n("157a"),n("f0e6"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-swipe",{ref:"swipe",staticStyle:{height:"100vh"},attrs:{vertical:"",autoplay:3e3},on:{change:t.onChange}},[t._l(t.images,(function(e,a){return n("van-swipe-item",{key:a,on:{click:function(e){return t.onClick(e,a)}}},[n("van-image",{attrs:{width:"100vw",height:"100vh",fit:"contain",src:e}})],1)})),n("div",{attrs:{slot:"indicator"},slot:"indicator"})],2)],1)],1)],1)},p=[],h=n("d399"),v={name:"HelloWorld",data:function(){return{images:[]}},methods:{onChange:function(t){Object(h["a"])("当前 Swipe 索引："+t)},onClick:function(t,e){var n=this;window.cwData.$axios.get("/index.php?s=index/index/getDetail.html",{params:{code:e}}).then((function(t){var a=t.data;window.console.log(a),1===a.code?(window.cwData.$selectedIndex=e,window.cwData.detail.$prefix=a.data.prefix,window.cwData.detail.$count=a.data.count,n.$router.push("/com-grid/")):Object(h["a"])(a.msg)})).catch((function(t){window.console.log(t)}))}},mounted:function(){for(var t=0;t<window.cwData.$imgs.length;t++)this.images.push(window.cwData.$imgBase+window.cwData.$imgs[t]["url"]);this.$refs.swipe.swipeTo(window.cwData.$selectedIndex)},created:function(){}},g=v,m=Object(s["a"])(g,f,p,!1,null,"350c912e",null),y=m.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-sticky",[n("van-nav-bar",{attrs:{title:"图片集","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickBack}})],1),n("van-grid",{attrs:{"column-num":3}},t._l(t.images,(function(e,a){return n("van-grid-item",{key:a,on:{click:function(e){return t.onClick(e,a)}}},[n("van-image",{attrs:{width:"27vw",height:"27vh",fit:"contain",src:e}})],1)})),1)],1)],1)],1)},$=[],b={name:"ComGrid",data:function(){return{images:[]}},methods:{onClick:function(t,e){window.cwData.$selectedDetailIndex=e,window.console.log(window.pageYOffset),window.cwData.$gridYOffset=window.pageYOffset,this.$router.push("/com-detail")},onClickBack:function(){this.$router.push("/com-hello")}},mounted:function(){for(var t=1;t<=window.cwData.detail.$count;t++)this.images.push(window.cwData.$imgBase+"/"+window.cwData.detail.$prefix+"/"+t+".jpg");window.setTimeout((function(){window.scrollTo(0,window.cwData.$gridYOffset)}),100)}},D=b,k=Object(s["a"])(D,x,$,!1,null,"46618082",null),j=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh",width:"100vw",background:"lightgrey"},attrs:{type:"flex",justify:"center",align:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-image",{attrs:{src:t.icon}})],1),n("van-field",{staticClass:"vanfield",attrs:{label:"账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("van-field",{staticClass:"vanfield",attrs:{type:"password",label:"密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-button",{attrs:{type:"primary"},on:{click:t.onLogin}},[t._v("登录")])],1)],1)],1)],1)},C=[],_={name:"HelloWorld",data:function(){return{icon:n("cf05"),account:"",password:""}},methods:{onLogin:function(){var t=this;window.cwData.$axios.get("/index.php?s=index/index/login.html",{params:{account:this.account,password:this.password}}).then((function(e){var n=e.data;window.console.log(n),1===n.code?(window.cwData.$imgs=n.data.imgs,window.cwData.$imgBase=n.data.imgBase,t.$router.push("/com-hello")):Object(h["a"])(n.msg)})).catch((function(t){window.console.log(t)}))}},mounted:function(){},created:function(){}},S=_,B=(n("9041"),Object(s["a"])(S,O,C,!1,null,"16c58b92",null)),P=B.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-detail"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-sticky",[n("van-nav-bar",{attrs:{title:"","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickBack}})],1),n("van-swipe",{ref:"swipe",staticStyle:{height:"100vh"},attrs:{vertical:"",autoplay:3e3},on:{change:t.onChange}},[t._l(t.images,(function(t,e){return n("van-swipe-item",{key:e},[n("van-image",{attrs:{width:"100vw",height:"100vh",fit:"contain",src:t}})],1)})),n("div",{attrs:{slot:"indicator"},slot:"indicator"})],2)],1)],1)],1)},I=[],E={name:"ComDetail",data:function(){return{images:[]}},methods:{onChange:function(t){Object(h["a"])("当前 Swipe 索引："+t)},onClickBack:function(){this.$router.push("/com-grid")}},mounted:function(){for(var t=1;t<=window.cwData.detail.$count;t++)this.images.push(window.cwData.$imgBase+"/"+window.cwData.detail.$prefix+"/"+window.cwData.detail.$prefix+t+".jpg");this.$refs.swipe.swipeTo(window.cwData.$selectedDetailIndex)},created:function(){}},Y=E,M=Object(s["a"])(Y,T,I,!1,null,"fa2d791c",null),H=M.exports;a["a"].use(w["a"]);var J=[{path:"/",component:P},{path:"/com-detail",component:H},{path:"/com-hello",component:y},{path:"/com-grid",component:j}],L=new w["a"]({routes:J}),W=L,G=n("bc3a"),q=n.n(G);a["a"].config.productionTip=!1,a["a"].use(u["a"]),window.cwData={},window.cwData.$axios=q.a,window.cwData.$imgs=[],window.cwData.$imgBase="",window.cwData.$selectedIndex=0,window.cwData.$selectedDetailIndex=0,window.cwData.detail={},window.cwData.detail.$prefix="",window.cwData.detail.$count=0,window.cwData.$gridYOffset=0,new a["a"]({router:W,render:function(t){return t(d)}}).$mount("#app")},9041:function(t,e,n){"use strict";var a=n("2f6a"),i=n.n(a);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3d14f74a.js.map