(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"53e9":function(t,e,n){"use strict";var a=n("a4a6"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r={name:"app"},c=r,s=n("2877"),l=Object(s["a"])(c,o,i,!1,null,null,null),u=l.exports,d=n("b970"),p=(n("157a"),n("f0e6"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-swipe",{ref:"swipe",staticStyle:{height:"100vh"},attrs:{vertical:"",autoplay:3e3},on:{change:t.onChange}},[t._l(t.images,(function(e,a){return n("van-swipe-item",{key:a,on:{click:function(e){return t.onClick(e,a)}}},[n("van-image",{attrs:{width:"100vw",height:"100vh",fit:"contain",src:e}})],1)})),n("div",{attrs:{slot:"indicator"},slot:"indicator"})],2)],1)],1)],1)},w=[],h=n("d399"),g={name:"HelloWorld",props:["imageIndex"],data:function(){return{images:[]}},methods:{onChange:function(t){Object(h["a"])("当前 Swipe 索引："+t)},onClick:function(t,e){this.$router.push("/com-grid/"+e)}},mounted:function(){for(var t=0;t<window.cwData.$imgs.length;t++)this.images.push(window.cwData.$imgBase+window.cwData.$imgs[t]);this.$refs.swipe.swipeTo(this.imageIndex)},created:function(){Object(h["a"])("获取数据："+this.imageIndex)}},m=g,v=Object(s["a"])(m,f,w,!1,null,"0a0c1612",null),y=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh"},attrs:{type:"flex",justify:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-nav-bar",{attrs:{title:"图片集","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickBack}}),n("van-grid",{attrs:{"column-num":3}},t._l(t.images,(function(e,a){return n("van-grid-item",{key:a,on:{click:function(e){return t.onClick(e,a)}}},[n("van-image",{attrs:{width:"30vw",height:"30vh",fit:"contain",src:e}})],1)})),1)],1)],1)],1)},x=[],j={name:"ComGrid",props:["imageIndex"],data:function(){return{images:[]}},methods:{onClick:function(t,e){window.console.log(e)},onClickBack:function(){this.$router.push("/com-hello/"+this.imageIndex)}},mounted:function(){window.console.log("获取数据"+this.imageIndex);for(var t=0;t<window.cwData.$imgs.length;t++)this.images.push(window.cwData.$imgBase+window.cwData.$imgs[t])}},$=j,k=Object(s["a"])($,b,x,!1,null,"7f6ec799",null),O=k.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("van-row",{staticStyle:{height:"100vh",width:"100vw",background:"lightgrey"},attrs:{type:"flex",justify:"center",align:"center"}},[n("van-col",{attrs:{span:"24"}},[n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-image",{attrs:{src:t.icon}})],1),n("van-field",{staticClass:"vanfield",attrs:{label:"账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("van-field",{staticClass:"vanfield",attrs:{type:"password",label:"密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("van-row",{attrs:{type:"flex",justify:"center"}},[n("van-button",{attrs:{type:"primary"},on:{click:t.onLogin}},[t._v("登录")])],1)],1)],1)],1)},C=[],D={name:"HelloWorld",data:function(){return{icon:n("cf05"),account:"",password:""}},methods:{onLogin:function(){var t=this;window.cwData.$axios.get("/index.php?s=index/index/login.html",{params:{account:this.account,password:this.password}}).then((function(e){var n=e.data;window.console.log(n),1===n.code?(window.cwData.$imgs=n.data.imgs,window.cwData.$imgBase=n.data.imgBase,t.$router.push("/com-hello/0")):Object(h["a"])(n.msg)})).catch((function(t){window.console.log(t)}))}},mounted:function(){},created:function(){}},S=D,I=(n("53e9"),Object(s["a"])(S,_,C,!1,null,"0ecd5d73",null)),B=I.exports;a["a"].use(p["a"]);var P=[{path:"/",component:B},{path:"/com-hello/:imageIndex",component:y,props:!0},{path:"/com-grid/:imageIndex",component:O,props:!0}],E=new p["a"]({routes:P}),M=E,T=n("bc3a"),H=n.n(T);a["a"].config.productionTip=!1,a["a"].use(d["a"]),window.cwData={},window.cwData.$axios=H.a,window.cwData.$imgs=[],window.cwData.$imgBase="",new a["a"]({router:M,render:function(t){return t(u)}}).$mount("#app")},a4a6:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f430832e.js.map