(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={species:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tree-id/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([6,"chunk-vendors","chunk-common"]),r()})({"23e2":function(e,t,r){"use strict";r("7fba")},6:function(e,t,r){e.exports=r("834e")},"7fba":function(e,t,r){},"834e":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");for(var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"species"}},[r("NavBar"),r("TreeSpeciesTable")],1)},a=[],o=r("d000"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(e._s(e.filteredData.length)+" Tree Species")]),r("br"),r("form",{attrs:{id:"search"}},[e._v(" Search "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"inputClass",attrs:{name:"query"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]),r("br"),r("table",{staticClass:"center"},[r("thead",e._l(e.headers.slice(0,-1),(function(t){return r("th",{key:t,class:{active:e.sortKey==t},on:{click:function(r){return e.sortBy(t)}}},[e._v(" "+e._s(e._f("capitalize")(t))+" "),r("span",{staticClass:"arrow",class:e.sortOrders[t]>0?"asc":"dsc"})])})),0),r("tbody",e._l(e.filteredData,(function(t){return r("tr",{key:t.genus+t.species},[e._l(e.headers.slice(0,-2),(function(n){return r("td",{key:n},[e._v(e._s(t[n]))])})),t["link"]?[r("td",[r("a",{attrs:{href:t["link"],target:"_blank"}},[e._v(e._s(t["common"]))])])]:[r("td",[e._v(e._s(t["common"]))])]],2)})),0)]),r("br")])},c=[],u=(r("ac1f"),r("1276"),r("498a"),r("159b"),r("4de4"),r("b64b"),r("4e82"),r("fb6a"),r("5319"),r("5b81"),r("05e8")),l=u[0].split(","),f=[],p=1;p<u.length;p++){var d=u[p].split(",");0==d[4].trim().length&&(d[4]=d[2]+" "+d[3]);for(var h={},b=0;b<l.length;b++)h[l[b]]=d[b];f.push(h)}var v={props:{headers:Array},data:function(){this.headers=l,this.sortKey="";var e={};return this.headers.forEach((function(t){e[t]=1})),{sortKey:"",searchQuery:"",sortOrders:e,listData:f}},computed:{filteredData:function(){var e=this.sortKey,t=this.sortOrders[e]||1,r=this.listData,n=this.searchQuery.toLowerCase();return n&&(r=r.filter((function(e){return Object.keys(e).some((function(t){return String(e[t]).toLowerCase().indexOf(n)>-1}))}))),e&&(r=r.slice().sort((function(r,n){return r=r[e],n=n[e],(r===n?0:r>n?1:-1)*t}))),r}},filters:{capitalize:function(e){return e.replaceAll("_"," ").replace(/\b\w/g,(function(e){return e.toUpperCase()}))}},methods:{sortBy:function(e){this.sortKey=e,this.sortOrders[e]=-1*this.sortOrders[e]}}},y=v,m=(r("23e2"),r("2877")),_=Object(m["a"])(y,i,c,!1,null,"8bb056a8",null),g=_.exports,O=(r("8d38"),{name:"Species",components:{NavBar:o["a"],TreeSpeciesTable:g}}),w=O,j=Object(m["a"])(w,s,a,!1,null,null,null),k=j.exports;new n["a"]({render:function(e){return e(k)}}).$mount("#species")}});
//# sourceMappingURL=species.54be7ace.js.map