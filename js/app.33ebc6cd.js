(function(t){function e(e){for(var a,i,c=e[0],s=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"062a":function(t,e,n){t.exports=n.p+"img/beauty04.3f36f370.jpg"},"33ee":function(t,e,n){"use strict";var a=n("9ab6"),o=n.n(a);o.a},"43d1":function(t,e,n){t.exports=n.p+"img/beauty03.a3161cb0.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={name:"app"},c=i,s=n("2877"),u=Object(s["a"])(c,o,r,!1,null,null,null),l=u.exports,p=n("b970"),f=(n("157a"),n("f0e6"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-swipe",{ref:"swipe",staticStyle:{height:"100vh"},attrs:{vertical:"",autoplay:3e3},on:{change:t.onChange}},[t._l(t.images,(function(e,a){return n("van-swipe-item",{key:a,on:{click:function(e){return t.onClick(e,a)}}},[n("van-image",{attrs:{width:"100vw",height:"100vh",fit:"contain",src:e}})],1)})),n("div",{attrs:{slot:"indicator"},slot:"indicator"})],2)],1)],1)],1)},h=[],g=n("d399"),v={name:"HelloWorld",props:["imageIndex"],data:function(){return{images:[]}},methods:{onChange:function(t){Object(g["a"])("当前 Swipe 索引："+t)},onClick:function(t,e){this.$router.push("/com-grid/"+e)}},mounted:function(){for(var t=1;t<6;t++)this.images.push(n("9f9f")("./beauty0"+t+".jpg"));this.$refs.swipe.swipeTo(this.imageIndex)},created:function(){Object(g["a"])("获取数据："+this.imageIndex)}},m=v,b=Object(s["a"])(m,d,h,!1,null,"0f81bcb4",null),w=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-nav-bar",{attrs:{title:"图片集","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickBack}}),n("van-grid",{attrs:{"column-num":3}},t._l(t.images,(function(e,a){return n("van-grid-item",{key:a,on:{click:function(e){return t.onClick(e,a)}}},[n("van-image",{attrs:{width:"30vw",height:"30vh",fit:"contain",src:e}})],1)})),1)],1)],1)],1)},x=[],j={name:"ComGrid",props:["imageIndex"],data:function(){return{images:[]}},methods:{onClick:function(t,e){window.console.log(e)},onClickBack:function(){this.$router.push("/"+this.imageIndex)}},mounted:function(){window.console.log("获取数据"+this.imageIndex);for(var t=1;t<6;t++)this.images.push(n("9f9f")("./beauty0"+t+".jpg"))}},k=j,O=Object(s["a"])(k,y,x,!1,null,"0089bf54",null),_=O.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh",width:"100vw",background:"lightgrey"},attrs:{type:"flex",justify:"center",align:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-image",{attrs:{src:t.icon}})],1),n("van-field",{staticClass:"vanfield",attrs:{label:"账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("van-field",{staticClass:"vanfield",attrs:{type:"password",label:"密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-button",{attrs:{type:"primary"},on:{click:t.onLogin}},[t._v("登录")])],1)],1)],1)],1)},S=[],$={name:"HelloWorld",data:function(){return{icon:n("cf05"),account:"",password:""}},methods:{onLogin:function(){window.cwData.$axios.get("/index.php?s=index/index/login.html",{params:{account:this.account,password:this.password}}).then((function(t){var e=t.data;window.console.log(e)})).catch((function(t){window.console.log(t)}))}},mounted:function(){},created:function(){}},I=$,P=(n("33ee"),Object(s["a"])(I,C,S,!1,null,"1db0524d",null)),E=P.exports;a["a"].use(f["a"]);var D=[{path:"/",component:E},{path:"/com-hello/:imageIndex",component:w,props:!0},{path:"/com-grid/:imageIndex",component:_,props:!0}],M=new f["a"]({routes:D}),T=M,L=n("bc3a"),B=n.n(L);a["a"].config.productionTip=!1,a["a"].use(p["a"]),window.cwData={},window.cwData.$axios=B.a,new a["a"]({router:T,render:function(t){return t(l)}}).$mount("#app")},"577e":function(t,e,n){t.exports=n.p+"img/beauty01.4ae3a577.jpg"},"9ab6":function(t,e,n){},"9f9f":function(t,e,n){var a={"./beauty01.jpg":"577e","./beauty02.jpg":"cea6","./beauty03.jpg":"43d1","./beauty04.jpg":"062a","./beauty05.jpg":"eb66"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="9f9f"},cea6:function(t,e,n){t.exports=n.p+"img/beauty02.fa67f0bc.jpg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},eb66:function(t,e,n){t.exports=n.p+"img/beauty05.cb25343e.jpg"}});
//# sourceMappingURL=app.33ebc6cd.js.map