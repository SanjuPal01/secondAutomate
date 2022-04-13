import{r as t,h as e,g as n,c as o}from"./p-1b10ccda.js";import{c as r,u as i}from"./p-d7ac2f15.js";import{i as s,c as a,t as c,a as u,b as l,d as h,r as d,e as f,f as p,g as m,h as y,j as b,k as v,l as w,n as g,m as E,o as O}from"./p-464ede08.js";import{m as j,b as T}from"./p-032b46af.js";import{p as P,g as S}from"./p-4c72efad.js";import{s as x,c as C,h as k,f as _,a as A,b as L}from"./p-1cfd6e15.js";import{f as R}from"./p-7cba3003.js";import{g as I}from"./p-f76e3d4b.js";import"./p-6d754718.js";import{i as D}from"./p-ca72a6da.js";import"./p-b19cfb27.js";import{m as U,a as H,s as N,b as M,c as G,d as Y,h as F,e as B,f as W,g as J,l as V}from"./p-4bed3927.js";import{A as q}from"./p-15071866.js";class z{constructor(e){t(this,e)}render(){return e("header",{role:"banner"},e("nav",{"aria-labelledby":"nav1",class:"navigation-wrapper"},e("div",{class:"left-nav",role:"menubar"},e("stencil-route-link",{role:"menuitem",class:"logo-link",title:"Chef UI Library Home Link ReadMe",url:"/"},e("h2",null,"Chef UI Library")),e("div",{class:"navigation-menu"},e("h2",{id:"nav1",class:"visually-hidden"},"Main Header Navigation for UI Library"),e("stencil-route-link",{role:"menuitem",class:"nav-link",tabindex:"0",url:"/design"},"Design Elements"),e("stencil-route-link",{role:"menuitem",class:"nav-link",tabindex:"0",url:"/atoms"},"Atoms"),e("stencil-route-link",{role:"menuitem",class:"nav-link",tabindex:"0",url:"/molecules"},"Molecules"),e("stencil-route-link",{role:"menuitem",class:"nav-link",tabindex:"0",url:"/templates"},"Templates"),e("stencil-route-link",{role:"menuitem",class:"nav-link",tabindex:"0",url:"/charts"},"Charts")))))}static get style(){return"chef-header-nav{display:block;position:fixed;z-index:100;top:0;left:0;right:0;background-color:var(--chef-white);-webkit-box-shadow:var(--chef-box-shadow);box-shadow:var(--chef-box-shadow)}chef-header-nav .navigation-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}chef-header-nav .navigation-wrapper .left-nav{display:-ms-flexbox;display:flex}chef-header-nav .navigation-wrapper .navigation-menu{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}chef-header-nav .navigation-wrapper .logo-link,chef-header-nav .navigation-wrapper .nav-link{margin:10px 1em}chef-header-nav .navigation-wrapper .logo-link a,chef-header-nav .navigation-wrapper .nav-link a{color:var(--chef-primary-dark);text-decoration:none}chef-header-nav .navigation-wrapper .logo-link a:hover,chef-header-nav .navigation-wrapper .nav-link a:hover{color:var(--chef-primary-bright)}chef-header-nav .navigation-wrapper .logo-link a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;white-space:nowrap;text-decoration:none}chef-header-nav .navigation-wrapper .logo-link a:before{content:\"\";display:block;width:50px;height:50px;margin-right:1em;background:url(/assets/code-book.svg);background-size:contain}chef-header-nav .navigation-wrapper .logo-link a h2{margin:0}chef-header-nav .navigation-wrapper .nav-link a{padding-bottom:20px}chef-header-nav .navigation-wrapper .nav-link a.active,chef-header-nav .navigation-wrapper .nav-link a:focus,chef-header-nav .navigation-wrapper .nav-link a:hover{color:var(--chef-primary-bright);border-bottom:2px solid var(--chef-primary-bright)}"}}var K=function(){var t,e=("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()).Symbol;return"function"==typeof e?e.observable?t=e.observable:(t=e("observable"),e.observable=t):t="@@observable",t}(),Q=function(){return Math.random().toString(36).substring(7).split("").join(".")},X={INIT:"@@redux/INIT"+Q(),REPLACE:"@@redux/REPLACE"+Q(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Q()}};function $(t,e,n){var o;if("function"==typeof e&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n($)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var r=t,i=e,s=[],a=s,c=!1;function u(){a===s&&(a=s.slice())}function l(){if(c)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function h(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(c)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var e=!0;return u(),a.push(t),function(){if(e){if(c)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");e=!1,u();var n=a.indexOf(t);a.splice(n,1)}}}function d(t){if(!function(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,i=r(i,t)}finally{c=!1}for(var e=s=a,n=0;n<e.length;n++)(0,e[n])();return t}return d({type:X.INIT}),(o={dispatch:d,subscribe:h,getState:l,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");r=t,d({type:X.REPLACE})}})[K]=function(){var t,e=h;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(l())}return n(),{unsubscribe:e(n)}}})[K]=function(){return this},t},o}function Z(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function tt(t){for(var e=Object.keys(t),n={},o=0;o<e.length;o++){var r=e[o];"function"==typeof t[r]&&(n[r]=t[r])}var i,s=Object.keys(n);try{!function(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:X.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:X.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+X.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(t){i=t}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var o=!1,r={},a=0;a<s.length;a++){var c=s[a],u=t[c],l=(0,n[c])(u,e);if(void 0===l){var h=Z(c,e);throw new Error(h)}r[c]=l,o=o||l!==u}return o?r:t}}function et(t,e){return function(){return e(t.apply(this,arguments))}}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ot(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ot(n,!0).forEach(function(e){nt(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ot(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function it(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}function st(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),o=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={getState:n.getState,dispatch:function(){return o.apply(void 0,arguments)}},i=e.map(function(t){return t(r)});return rt({},n,{dispatch:o=it.apply(void 0,i)(n.dispatch)})}}}const at=Object.freeze({__DO_NOT_USE__ActionTypes:X,applyMiddleware:st,bindActionCreators:function(t,e){if("function"==typeof t)return et(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var o in t){var r=t[o];"function"==typeof r&&(n[o]=et(r,e))}return n},combineReducers:tt,compose:it,createStore:$});var ct=r(function(t,e){var n=at.compose;e.__esModule=!0,e.composeWithDevTools=function(){if(0!==arguments.length)return"object"==typeof arguments[0]?n:n.apply(null,arguments)},e.devToolsEnhancer=function(){return function(t){return t}}});i(ct);var ut=ct.composeWithDevTools;function lt(t){return function(e){var n=e.dispatch,o=e.getState;return function(e){return function(r){return"function"==typeof r?r(n,o,t):e(r)}}}}var ht=lt();ht.withExtraArgument=lt;var dt=h("set",function(t,e,n){return null==t?t:function(t,e,n,o){if(!s(t))return t;for(var r=-1,i=(e=a(e,t)).length,h=i-1,d=t;null!=d&&++r<i;){var f=c(e[r]),p=n;if("__proto__"===f||"constructor"===f||"prototype"===f)return t;if(r!=h){var m=d[f];void 0===(p=o?o(m,f,d):void 0)&&(p=s(m)?m:u(e[r+1])?[]:{})}l(d,f,p),d=d[f]}return t}(t,e,n)});dt.placeholder=d;var ft=dt;const pt=()=>async t=>{t({type:"DOCS::GET"});const e=await(()=>{const t=new Request("/assets/docs.json");return fetch(t)})();if(e.ok){t({type:"DOCS::GET::SUCCESS",payload:await e.json()})}else t({type:"DOCS::GET::FAILED",payload:e.status})};var mt=h("replace",function(){var t=arguments,e=f(t[0]);return t.length<3?e:e.replace(t[1],t[2])});mt.placeholder=d;var yt=mt,bt=h("trim",function(t,e,n){if((t=f(t))&&(n||void 0===e))return m(t);if(!t||!(e=y(e)))return t;var o=x(t),r=x(e),i=function(t,e){for(var n=-1,o=t.length;++n<o&&p(e,t[n],0)>-1;);return n}(o,r),s=function(t,e){for(var n=t.length;n--&&p(e,t[n],0)>-1;);return n}(o,r)+1;return C(o,i,s).join("")});bt.placeholder=d;var vt=bt,wt=g&&g.isRegExp,gt=wt?w(wt):function(t){return b(t)&&"[object RegExp]"==v(t)},Et=h("split",function(t,e,n){return n&&"number"!=typeof n&&D(t,e,n)&&(e=n=void 0),(n=void 0===n?4294967295:n>>>0)?(t=f(t))&&("string"==typeof e||null!=e&&!gt(e))&&!(e=y(e))&&k(t)?C(x(t),0,n):t.split(e,n):[]});Et.placeholder=d;var Ot=Et;const jt=I([],["comment","tags"]),Tt=P(S("text"),vt),Pt=(t,e)=>P(jt,R(["tag",t]),Tt)(e),St=(t,e)=>P(jt,A(["tag",t]),j(Tt))(e),xt=I([],"decorators"),Ct=P(yt(/(\w+):/gi,'"$1":'),yt(/'/gi,'"'),t=>t?JSON.parse(t):{}),kt=P(xt,R(["name","Component"]),I("",["arguments","opts"]),Ct),_t=P(S(["sources",0,"fileName"]),Ot("/"),_);class At{constructor(t={}){const{tag:e,styleUrl:n,shadow:o}=kt(t);this.id=e,this.name=t.name,this.description=Pt("description",t),this.tag=e,this.styleUrl=n||"",this.shadow=o||!1,this.properties=function(){const e=A(t=>1024===t.kind&&t.decorators&&"Prop"===t.decorators[0].name,t.children);return j(t=>({name:t.name,description:I("",["comment","shortText"],t),defaultValue:t.defaultValue}),e)}(),this.examples=St("example",t),this.docType=_t(t)}static create(t){return new At(t)}}var Lt=function(t,e,n,o,r){return r(t,function(t,r,i){n=o?(o=!1,t):e(n,t,r,i)}),n},Rt=h("reduce",function(t,e,n){var o=O(t)?L:Lt,r=arguments.length<3;return o(t,E(e),n,r,T)});Rt.placeholder=d;var It=Rt;const Dt=(t=>P(j(t),It((t,e)=>ft(e.id,e,t),{})))(At.create);var Ut;!function(t){t[t.notLoaded=0]="notLoaded",t[t.loading=1]="loading",t[t.loadSuccess=2]="loadSuccess",t[t.loadFailure=3]="loadFailure"}(Ut||(Ut={}));const Ht={byId:{},allIds:[],status:Ut.notLoaded},Nt=tt({docs:function(t=Ht,e){switch(e.type){case"DOCS::GET":return ft("status",Ut.loading,t);case"DOCS::GET::FAILED":return console.warn("FAILED GETTING DOCS"),ft("status",Ut.loadFailure,t);case"DOCS::GET::SUCCESS":const n=Dt(e.payload.children);return P(ft("status",Ut.loadSuccess),ft("byId",n),ft("allIds",j("id",n)))(t);default:return t}}}),Mt=t=>$(Nt,t,ut(st(ht)));class Gt{constructor(e){t(this,e),this.store=n(this,"store")}componentWillLoad(){this.store.setStore(Mt({})),this.store.mapDispatchToProps(this,{getDocs:pt})}componentDidLoad(){this.getDocs()}render(){return e("div",null,e("chef-header-nav",null),e("stencil-router",null,e("stencil-route",{url:"/",component:"chef-read-me",exact:!0}),e("stencil-route",{url:["/design/:id","/design"],componentProps:{docType:"design"},component:"chef-design-docs"}),e("stencil-route",{url:["/atoms/:id","/atoms"],componentProps:{docType:"atoms"},component:"chef-ui-docs"}),e("stencil-route",{url:["/molecules/:id","/molecules"],componentProps:{docType:"molecules"},component:"chef-ui-docs"}),e("stencil-route",{url:["/templates/:id","/templates"],componentProps:{docType:"templates"},component:"chef-ui-docs"}),e("stencil-route",{url:["/charts/:id","/charts"],componentProps:{docType:"charts"},component:"chef-ui-docs"})))}}class Yt{constructor(e){t(this,e),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=U(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!H(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?e(this.component,Object.assign({},t)):void 0}get el(){return o(this)}static get watchers(){return{location:["computeMatch"]}}static get style(){return"stencil-route.inactive{display:none}"}}q.injectProps(Yt,["location","history","historyType","routeViewsUpdated"]);const Ft=(t,e,n)=>n(t.confirm(e)),Bt=t=>t.metaKey||t.altKey||t.ctrlKey||t.shiftKey,Wt=(t,e)=>{const n=t[e],o="__storage_test__";try{return n.setItem(o,o),n.removeItem(o),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==n.length}},Jt=(t,e)=>"/"==t.charAt(0)&&"/"==e.charAt(e.length-1)?e.slice(0,e.length-1)+t:e+t;class Vt{constructor(e){t(this,e),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=U(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){if(!Bt(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push(Jt(this.url,this.root))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),e(this.custom,Object.assign({},t),e("slot",null))}get el(){return o(this)}static get watchers(){return{location:["computeMatch"]}}}q.injectProps(Vt,["history","location","root"]);const qt=(t,...e)=>{t||console.warn(...e)},zt=()=>{let t,e=[];return{setPrompt:e=>(qt(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,n,o,r)=>{if(null!=t){const i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):(qt(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==i)}else r(!0)},appendListener:t=>{let n=!0;const o=(...e)=>{n&&t(...e)};return e.push(o),()=>{n=!1,e=e.filter(t=>t!==o)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},Kt=(t,e="scrollPositions")=>{let n=new Map;const o=(e,o)=>{if(n.set(e,o),Wt(t,"sessionStorage")){const e=[];n.forEach((t,n)=>{e.push([n,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(Wt(t,"sessionStorage")){const o=t.sessionStorage.getItem(e);n=o?new Map(JSON.parse(o)):n}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:o,get:t=>n.get(t),has:t=>n.has(t),capture:e=>{o(e,[t.scrollX,t.scrollY])}}},Qt={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+J(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:J,decodePath:M},slash:{encodePath:M,decodePath:M}},Xt=(t,e)=>{const n=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})},$t={browser:(t,e={})=>{let n=!1;const o=t.history,r=t.location,i=t.navigator,s=(t=>{const e=t.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&t.history&&"pushState"in t.history})(t),a=!(t=>-1===t.userAgent.indexOf("Trident"))(i),c=Kt(t),u=null!=e.forceRefresh&&e.forceRefresh,l=null!=e.getUserConfirmation?e.getUserConfirmation:Ft,h=null!=e.keyLength?e.keyLength:6,d=e.basename?N(M(e.basename)):"",f=()=>{try{return t.history.state||{}}catch(t){return{}}},p=t=>{t=t||{};const{key:e,state:n}=t,{pathname:o,search:i,hash:s}=r;let a=o+i+s;return qt(!d||F(a,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+d+'".'),d&&(a=B(a,d)),G(a,n,e||Y(h))},m=zt(),y=t=>{c.capture(C.location.key),Object.assign(C,t),C.location.scrollPosition=c.get(C.location.key),C.length=o.length,m.notifyListeners(C.location,C.action)},b=t=>{((t,e)=>void 0===e.state&&-1===t.userAgent.indexOf("CriOS"))(i,t)||w(p(t.state))},v=()=>{w(p(f()))},w=t=>{if(n)n=!1,y();else{const e="POP";m.confirmTransitionTo(t,e,l,n=>{n?y({action:e,location:t}):g(t)})}},g=t=>{let e=O.indexOf(C.location.key),o=O.indexOf(t.key);-1===e&&(e=0),-1===o&&(o=0);const r=e-o;r&&(n=!0,S(r))},E=p(f());let O=[E.key],j=0,T=!1;const P=t=>d+W(t),S=t=>{o.go(t)},x=e=>{1===(j+=e)?(t.addEventListener("popstate",b),a&&t.addEventListener("hashchange",v)):0===j&&(t.removeEventListener("popstate",b),a&&t.removeEventListener("hashchange",v))},C={length:o.length,action:"POP",location:E,createHref:P,push:(t,e)=>{qt(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const n=G(t,e,Y(h),C.location);m.confirmTransitionTo(n,"PUSH",l,t=>{if(!t)return;const e=P(n),{key:i,state:a}=n;if(s)if(o.pushState({key:i,state:a},"",e),u)r.href=e;else{const t=O.indexOf(C.location.key),e=O.slice(0,-1===t?0:t+1);e.push(n.key),O=e,y({action:"PUSH",location:n})}else qt(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),r.href=e})},replace:(t,e)=>{qt(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const n=G(t,e,Y(h),C.location);m.confirmTransitionTo(n,"REPLACE",l,t=>{if(!t)return;const e=P(n),{key:i,state:a}=n;if(s)if(o.replaceState({key:i,state:a},"",e),u)r.replace(e);else{const t=O.indexOf(C.location.key);-1!==t&&(O[t]=n.key),y({action:"REPLACE",location:n})}else qt(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),r.replace(e)})},go:S,goBack:()=>S(-1),goForward:()=>S(1),block:(t="")=>{const e=m.setPrompt(t);return T||(x(1),T=!0),()=>(T&&(T=!1,x(-1)),e())},listen:t=>{const e=m.appendListener(t);return x(1),()=>{x(-1),e()}},win:t};return C},hash:(t,e={})=>{let n=!1,o=null,r=0,i=!1;const s=t.location,a=t.history,c=(t=>-1===t.userAgent.indexOf("Firefox"))(t.navigator),u=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:l=Ft,hashType:h="slash"}=e,d=e.basename?N(M(e.basename)):"",{encodePath:f,decodePath:p}=Qt[h],m=()=>{const t=s.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},y=t=>{const e=s.href.indexOf("#");s.replace(s.href.slice(0,e>=0?e:0)+"#"+t)},b=()=>{let t=p(m());return qt(!d||F(t,d),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+d+'".'),d&&(t=B(t,d)),G(t,void 0,Y(u))},v=zt(),w=t=>{Object.assign(k,t),k.length=a.length,v.notifyListeners(k.location,k.action)},g=()=>{const t=m(),e=f(t);if(t!==e)y(e);else{const t=b(),e=k.location;if(!n&&V(e,t))return;if(o===W(t))return;o=null,E(t)}},E=t=>{if(n)n=!1,w();else{const e="POP";v.confirmTransitionTo(t,e,l,n=>{n?w({action:e,location:t}):O(t)})}},O=t=>{let e=S.lastIndexOf(W(k.location)),o=S.lastIndexOf(W(t));-1===e&&(e=0),-1===o&&(o=0);const r=e-o;r&&(n=!0,x(r))},j=m(),T=f(j);j!==T&&y(T);const P=b();let S=[W(P)];const x=t=>{qt(c,"Hash history go(n) causes a full page reload in this browser"),a.go(t)},C=(t,e)=>{1===(r+=e)?t.addEventListener("hashchange",g):0===r&&t.removeEventListener("hashchange",g)},k={length:a.length,action:"POP",location:P,createHref:t=>"#"+f(d+W(t)),push:(t,e)=>{qt(void 0===e,"Hash history cannot push state; it is ignored");const n=G(t,void 0,Y(u),k.location);v.confirmTransitionTo(n,"PUSH",l,t=>{if(!t)return;const e=W(n),r=f(d+e);if(m()!==r){o=e,(t=>s.hash=t)(r);const t=S.lastIndexOf(W(k.location)),i=S.slice(0,-1===t?0:t+1);i.push(e),S=i,w({action:"PUSH",location:n})}else qt(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),w()})},replace:(t,e)=>{qt(void 0===e,"Hash history cannot replace state; it is ignored");const n=G(t,void 0,Y(u),k.location);v.confirmTransitionTo(n,"REPLACE",l,t=>{if(!t)return;const e=W(n),r=f(d+e);m()!==r&&(o=e,y(r));const i=S.indexOf(W(k.location));-1!==i&&(S[i]=e),w({action:"REPLACE",location:n})})},go:x,goBack:()=>x(-1),goForward:()=>x(1),block:(e="")=>{const n=v.setPrompt(e);return i||(C(t,1),i=!0),()=>(i&&(i=!1,C(t,-1)),n())},listen:e=>{const n=v.appendListener(e);return C(t,1),()=>{C(t,-1),n()}},win:t};return k}};class Zt{constructor(e){t(this,e),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=n(this,"isServer"),this.queue=n(this,"queue")}componentWillLoad(){this.history=$t[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=Xt(t,this.root),this.location=t}),this.location=Xt(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write(()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}):this.queue.write(()=>{e.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return e(q.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},e("slot",null))}get el(){return o(this)}}export{z as chef_header_nav,Gt as chef_library_app,Yt as stencil_route,Vt as stencil_route_link,Zt as stencil_router};