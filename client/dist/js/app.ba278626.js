(function(t){function e(e){for(var r,c,a=e[0],s=e[1],u=e[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"4bdc":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"eventBus",(function(){return F}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:{name:"home"}}},[t._v("Home")]),n("router-link",{attrs:{to:{name:"coding"}}},[t._v("Coding")])],1),n("router-view",{attrs:{id:"view"}})],1)},i=[],c={name:"App",components:{}},a=c,s=(n("034f"),n("2877")),u=Object(s["a"])(a,o,i,!1,null,null,null),l=u.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"intro-text"},[n("h1",[t._v("Welcome to AshQur.co.uk!")]),n("p",[t._v("My name is Ashir Qureshi and the purpose of this site is for me to display my portfolio of work.")])])])}],h={name:"home-view"},v=h,m=(n("6db9"),Object(s["a"])(v,f,d,!1,null,"001788fa",null)),j=m.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Coding Projects")]),n("list-projects")],1)},b=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._l(t.results,(function(e,r){return t.results?n("list-project-item",{key:r,attrs:{project:e}}):t._e()})),t.results?t._e():n("p",[t._v(" There was an issue loading this list! ")])],2)},y=[],w=(n("d3b7"),n("ed18").config(),"https://www.ashqur.co.uk/api/"),C=w+"coding",O={getAllCodingProjects:function(){return fetch(C).then((function(t){return t.json()}))},getSingleCodingProject:function(t){return fetch(C+t).then((function(t){return t.json()}))},addNewCodingProject:function(t){return console.log(t),fetch(C,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))},updateCodingProject:function(t,e){return fetch(C+t,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))},deleteCodingProject:function(t){return fetch(C+t,{method:"DELETE"})}},P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",on:{click:function(e){return t.selectProjectItem()}}},[n("h2",[t._v(t._s(t.project.name))]),n("p",[t._v(" "+t._s(t.project.date))]),n("img",{attrs:{src:t.project.image}})])},x=[],k={name:"list-project-item",props:["project"],data:function(){return{}},mounted:function(){},methods:{selectProjectItem:function(){window.location.href="/coding/".concat(this.project.id)}}},E=k,S=(n("ef80"),Object(s["a"])(E,P,x,!1,null,"a86d8184",null)),T=S.exports,$={name:"list-projects",data:function(){return{results:null}},mounted:function(){var t=this;O.getAllCodingProjects().then((function(e){return t.results=e}))},components:{"list-project-item":T}},A=$,M=(n("9b1a"),Object(s["a"])(A,g,y,!1,null,"8d281a12",null)),J=M.exports,D={name:"coding-view",data:function(){return{}},components:{"list-projects":J}},N=D,B=Object(s["a"])(N,_,b,!1,null,"68569cc0",null),I=B.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.project?n("div",{staticClass:"details"},[n("a",{attrs:{href:"/"+t.project.type}},[t._v("Back to list")]),n("h1",[t._v(t._s(t.project.name))]),n("h2",[t._v("Date: "+t._s(t.project.date))]),n("div",{staticClass:"row"},[n("img",{attrs:{src:t.project.image,alt:t.project.title}}),n("article",{staticClass:"description"},[n("h2",[t._v("Description")]),n("p",[t._v(t._s(t.project.details))]),n("a",{staticClass:"btn",attrs:{href:t.project.link,type:"button",name:"button"}},[t._v("View Project")])])])]):t._e()])},q=[],H={name:"project-detail",data:function(){return{project:null}},mounted:function(){var t=this,e=this.$route.params.id;O.getSingleCodingProject(e).then((function(e){return t.project=e}))}},L=H,U=(n("b628"),Object(s["a"])(L,Q,q,!1,null,"0618337c",null)),V=U.exports;r["a"].use(p["a"]);var W=new p["a"]({mode:"history",routes:[{path:"",name:"home",component:j},{path:"/coding/:id",component:V},{path:"/coding",name:"coding",component:I}]}),z=W;r["a"].config.productionTip=!1;var F=new r["a"];new r["a"]({router:z,render:function(t){return t(l)}}).$mount("#app")},"6db9":function(t,e,n){"use strict";var r=n("4bdc"),o=n.n(r);o.a},"85ec":function(t,e,n){},"9b1a":function(t,e,n){"use strict";var r=n("a23e"),o=n.n(r);o.a},a23e:function(t,e,n){},b628:function(t,e,n){"use strict";var r=n("ebdb"),o=n.n(r);o.a},e414:function(t,e,n){},ebdb:function(t,e,n){},ef80:function(t,e,n){"use strict";var r=n("e414"),o=n.n(r);o.a}});
//# sourceMappingURL=app.ba278626.js.map