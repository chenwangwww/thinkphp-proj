(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"53e9":function(t,e,n){"use strict";var a=n("a4a6"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"app"},c=i,s=n("2877"),l=Object(s["a"])(c,o,r,!1,null,null,null),u=l.exports,f=n("b970"),d=(n("157a"),n("f0e6"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-swipe",{ref:"swipe",staticStyle:{height:"100vh"},attrs:{vertical:"",autoplay:3e3},on:{change:t.onChange}},[t._l(t.images,(function(e,a){return n("van-swipe-item",{key:a,on:{click:function(e){return t.onClick(e,a)}}},[n("van-image",{attrs:{width:"100vw",height:"100vh",fit:"contain",src:e}})],1)})),n("div",{attrs:{slot:"indicator"},slot:"indicator"})],2)],1)],1)],1)},h=[],w=n("d399"),v={name:"HelloWorld",props:["imageIndex"],data:function(){return{images:[]}},methods:{onChange:function(t){Object(w["a"])("当前 Swipe 索引："+t)},onClick:function(t,e){this.$router.push("/com-grid/"+e)}},mounted:function(){for(var t=0;t<window.cwData.$imgs.length;t++)this.images.push(n("de6e")(window.cwData.$imgBase+window.cwData.$imgs[t]));this.$refs.swipe.swipeTo(this.imageIndex)},created:function(){Object(w["a"])("获取数据："+this.imageIndex)}},g=v,m=Object(s["a"])(g,p,h,!1,null,"56c0c6be",null),y=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-nav-bar",{attrs:{title:"图片集","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickBack}}),n("van-grid",{attrs:{"column-num":3}},t._l(t.images,(function(e,a){return n("van-grid-item",{key:a,on:{click:function(e){return t.onClick(e,a)}}},[n("van-image",{attrs:{width:"30vw",height:"30vh",fit:"contain",src:e}})],1)})),1)],1)],1)],1)},x=[],O={name:"ComGrid",props:["imageIndex"],data:function(){return{images:[]}},methods:{onClick:function(t,e){window.console.log(e)},onClickBack:function(){this.$router.push("/"+this.imageIndex)}},mounted:function(){window.console.log("获取数据"+this.imageIndex);for(var t=1;t<6;t++)this.images.push(n("9f9f")("./beauty0"+t+".jpg"))}},j=O,k=Object(s["a"])(j,b,x,!1,null,"0089bf54",null),_=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh",width:"100vw",background:"lightgrey"},attrs:{type:"flex",justify:"center",align:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-image",{attrs:{src:t.icon}})],1),n("van-field",{staticClass:"vanfield",attrs:{label:"账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("van-field",{staticClass:"vanfield",attrs:{type:"password",label:"密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-button",{attrs:{type:"primary"},on:{click:t.onLogin}},[t._v("登录")])],1)],1)],1)],1)},C=[],D={name:"HelloWorld",data:function(){return{icon:n("cf05"),account:"",password:""}},methods:{onLogin:function(){var t=this;window.cwData.$axios.get("/index.php?s=index/index/login.html",{params:{account:this.account,password:this.password}}).then((function(e){var n=e.data;window.console.log(n),1===n.code?(window.cwData.$imgs=n.data.imgs,window.cwData.$imgBase=n.data.imgBase,t.$router.push("/com-hello/0")):Object(w["a"])(n.msg)})).catch((function(t){window.console.log(t)}))}},mounted:function(){},created:function(){}},S=D,E=(n("53e9"),Object(s["a"])(S,$,C,!1,null,"0ecd5d73",null)),I=E.exports;a["a"].use(d["a"]);var P=[{path:"/",component:I},{path:"/com-hello/:imageIndex",component:y,props:!0},{path:"/com-grid/:imageIndex",component:_,props:!0}],B=new d["a"]({routes:P}),M=B,T=n("bc3a"),L=n.n(T);a["a"].config.productionTip=!1,a["a"].use(f["a"]),window.cwData={},window.cwData.$axios=L.a,window.cwData.$imgs=[],window.cwData.$imgBase="",new a["a"]({router:M,render:function(t){return t(u)}}).$mount("#app")},"9f9f":function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="9f9f"},a4a6:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},de6e:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="de6e"}});
//# sourceMappingURL=app.0bff4bd6.js.map