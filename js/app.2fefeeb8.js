(function(t){function e(e){for(var a,s,o=e[0],u=e[1],c=e[2],v=0,f=[];v<o.length;v++)s=o[v],r[s]&&f.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/deezweb/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"402a":function(t,e,n){"use strict";var a=n("782f"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},i=[],s=n("f499"),o=n.n(s),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/"}},[t._v("Accueil")]),n("router-link",{attrs:{to:"/search"}},[t._v("Rechercher un titre")]),n("router-link",{attrs:{to:"/fav"}},[t._v("Mes favoris")])],1)])},c=[],l={name:"Navbar"},v=l,f=(n("6ee7"),n("2877")),d=Object(f["a"])(v,u,c,!1,null,"43264ea5",null),p=d.exports,m={name:"app",components:{Navbar:p},created:function(){var t=localStorage.getItem("favs");null===t&&localStorage.setItem("favs",o()([]))}},h=m,g=Object(f["a"])(h,r,i,!1,null,null,null),_=g.exports,b=n("8c4f"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t.fav?n("div",{staticClass:"t-a-c"},[n("p",[t._v("Une musique de vos favoris au hasard:")]),n("music-card",{key:t.fav.id,attrs:{music:t.fav},on:{toggleFavEvent:t.toggleFav}}),n("a",{on:{click:function(e){return e.preventDefault(),t.changeRandomFav(e)}}},[t._v("Choisir une autre musique")])],1):t._e()])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Bienvenue sur Deezweb")]),n("p",[t._v("L'application qui permet facilement d'écouter de la musique")])])}],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-card"},[n("div",{staticClass:"flex"},[n("img",{attrs:{src:t.music.album.cover_small,alt:t.music.album.name}}),n("div",{staticClass:"music-info"},[n("span",{staticClass:"music-title"},[t._v(t._s(t.music.title))]),n("br"),n("span",{staticClass:"artist-name"},[t._v(t._s(t.music.artist.name))])])]),n("audio",{attrs:{src:t.music.preview,controls:""}}),n("br"),n("a",{on:{click:function(e){return e.preventDefault(),t.toggleFav(e)}}},[t._v(t._s(t.buttonText))])])},x=[],y=(n("7514"),{name:"MusicCard",props:["music"],data:function(){return{isFav:null}},computed:{buttonText:function(){return this.isFav?"retirer des favoris":"ajouter aux favoris"}},created:function(){var t=JSON.parse(localStorage.getItem("favs")),e=this.music,n=t.find(function(t){return e.id==t.id});this.isFav=!!n},methods:{toggleFav:function(){this.isFav=!this.isFav,this.$emit("toggleFavEvent",this.music)}}}),O=y,j=(n("402a"),Object(f["a"])(O,S,x,!1,null,"28e9239e",null)),w=j.exports,E=(n("20d6"),"favs"),M={toggle:function(t){var e=JSON.parse(localStorage.getItem(E)),n=e.findIndex(function(e){return t.id===e.id});-1===n?e.push(t):e.splice(n,1),localStorage.setItem(E,o()(e))},getAllFav:function(){return JSON.parse(localStorage.getItem(E))}},A={name:"Home",components:{MusicCard:w},data:function(){return{favs:null,fav:null}},methods:{changeRandomFav:function(){this.fav=this.favs[Math.floor(Math.random()*this.favs.length)]},toggleFav:function(t){M.toggle(t),this.favs.splice(this.favs.indexOf(t),1)}},created:function(){this.favs=M.getAllFav(),this.changeRandomFav()}},k=A,D=(n("6e39"),Object(f["a"])(k,F,C,!1,null,"f4cc9828",null)),N=D.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Recherche")]),n("p",[t._v("Rechercher un titre sur Deezer en utilisant le formulaire suivant:")]),n("hr"),n("form",{staticClass:"t-a-c",on:{submit:function(e){return e.preventDefault(),t.sendForm(e)}}},[n("label",{attrs:{for:"music-title-input"}},[t._v("Titre:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"title",id:"music-title-input",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("label",{attrs:{for:"music-order-input"}},[t._v("Trier par:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.order,expression:"order"}],attrs:{name:"order",id:"music-order-input"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.order=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"ALBUM_DESC"}},[t._v("Album")]),n("option",{attrs:{value:"ARTIST_DESC"}},[t._v("Artiste")]),n("option",{attrs:{value:"TRACK_DESC"}},[t._v("Musique")]),n("option",{attrs:{value:"RANKING_DESC"}},[t._v("Les plus populaires")]),n("option",{attrs:{value:"RATING_DESC"}},[t._v("les mieux notés")])]),n("button",[t._v("Go")])]),n("hr"),t.isFormSend?n("div",[t.musics.total>0?n("div",{staticClass:"musiccards"},t._l(t.musics.data,function(e){return n("MusicCard",{key:e.id,staticClass:"card",attrs:{music:e},on:{toggleFavEvent:t.toggleFav}})}),1):n("div",[n("p",[t._v("Aucun résultat pour cette recherche ...")])])]):t._e()])},I=[],R=(n("386d"),n("795b")),$=n.n(R),P=n("d871"),q=n.n(P),J="https://api.deezer.com/",L={search:function(t,e){return q()("".concat(J,"search?q=").concat(t,"&order=").concat(e,"&output=jsonp")).then(function(t){return t.json()}).then(function(t){return 1===t.error?$.a.reject(t):$.a.resolve(t)})}},z={name:"Search",components:{MusicCard:w},data:function(){return{title:"",order:"ALBUM_DESC",musics:[],isFormSend:!1}},methods:{sendForm:function(){var t=this;L.search(this.title,this.order).then(function(e){t.musics=e,t.isFormSend=!0})},toggleFav:function(t){M.toggle(t)}}},B=z,G=(n("f4ea"),Object(f["a"])(B,T,I,!1,null,"631f10a8",null)),U=G.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Mes Favoris")]),n("p",[t._v("Liste de mes favoris")]),n("hr"),t.favs?n("div",{staticClass:"musiccards"},t._l(t.favs,function(e){return n("MusicCard",{key:e.id,attrs:{music:e},on:{toggleFavEvent:t.toggleFav}})}),1):n("div",[n("p",[t._v("Auncun favoris dans votre liste ...")])])])},H=[],Q={name:"Fav",components:{MusicCard:w},data:function(){return{favs:null}},methods:{toggleFav:function(t){M.toggle(t),this.favs.splice(this.favs.indexOf(t),1)}},created:function(){this.favs=M.getAllFav()}},V=Q,W=(n("b1bc"),Object(f["a"])(V,K,H,!1,null,"6dcd1985",null)),X=W.exports;a["a"].use(b["a"]);var Y=new b["a"]({routes:[{name:"home",path:"/",component:N},{name:"search",path:"/search",component:U},{name:"fav",path:"/fav",component:X}]});a["a"].config.productionTip=!1,new a["a"]({router:Y,render:function(t){return t(_)}}).$mount("#app")},"65a6":function(t,e,n){},"6e39":function(t,e,n){"use strict";var a=n("fb97"),r=n.n(a);r.a},"6ee7":function(t,e,n){"use strict";var a=n("ce46"),r=n.n(a);r.a},"782f":function(t,e,n){},aaf2:function(t,e,n){},b1bc:function(t,e,n){"use strict";var a=n("65a6"),r=n.n(a);r.a},ce46:function(t,e,n){},f4ea:function(t,e,n){"use strict";var a=n("aaf2"),r=n.n(a);r.a},fb97:function(t,e,n){}});
//# sourceMappingURL=app.2fefeeb8.js.map