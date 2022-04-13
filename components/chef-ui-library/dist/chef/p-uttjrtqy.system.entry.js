System.register(["./p-0b5aeae5.system.js","./p-1095b4e8.system.js","./p-513f982b.system.js"],function(e){"use strict";var t,n,i,r,o,s,a,u,c;return{setters:[function(e){t=e.r;n=e.h;i=e.H;r=e.c},function(){},function(e){o=e.P;s=e.G;a=e.i;u=e.d;c=e.r}],execute:function(){var f=function(){return o.Date.now()};var l=f;var v="Expected a function";var d=Math.max,h=Math.min;function p(e,t,n){var i,r,o,u,c,f,p=0,m=false,b=false,y=true;if(typeof e!="function"){throw new TypeError(v)}t=s(t)||0;if(a(n)){m=!!n.leading;b="maxWait"in n;o=b?d(s(n.maxWait)||0,t):o;y="trailing"in n?!!n.trailing:y}function P(t){var n=i,o=r;i=r=undefined;p=t;u=e.apply(o,n);return u}function g(e){p=e;c=setTimeout(T,t);return m?P(e):u}function E(e){var n=e-f,i=e-p,r=t-n;return b?h(r,o-i):r}function L(e){var n=e-f,i=e-p;return f===undefined||n>=t||n<0||b&&i>=o}function T(){var e=l();if(L(e)){return w(e)}c=setTimeout(T,E(e))}function w(e){c=undefined;if(y&&i){return P(e)}i=r=undefined;return u}function S(){if(c!==undefined){clearTimeout(c)}p=0;i=f=r=c=undefined}function j(){return c===undefined?u:w(l())}function x(){var e=l(),n=L(e);i=arguments;r=this;f=e;if(n){if(c===undefined){return g(f)}if(b){clearTimeout(c);c=setTimeout(T,t);return P(f)}}if(c===undefined){c=setTimeout(T,t)}return u}x.cancel=S;x.flush=j;return x}var m=p;var b=u("debounce",m);b.placeholder=c;var y=b;var P=function(){function e(e){t(this,e);this.delay=100;this.position="top";this.offset="0 0";this.follow=false;this.interactable=false;this.visible=false;this._screenPosition=[0,0]}Object.defineProperty(e.prototype,"screenPosition",{get:function(){return this._screenPosition},set:function(e){var t=e[0],n=e[1];var i=this.offset.split(" ").map(function(e){return parseInt(e,10)}),r=i[0],o=i[1];this._screenPosition=[t+(r||0),n+(o||0)]},enumerable:true,configurable:true});e.prototype.componentDidLoad=function(){var e=document.querySelector("#"+this.for);if(e){if(this.follow){this.setupDynamicPositioning(e)}else{this.setupStaticPositioning(e)}}};e.prototype.render=function(){var e=this.screenPosition,t=e[0],r=e[1];var o={left:t+"px",top:r+"px"};var s=[this.visible?"visible":"",this.interactable?"interactable":"",this.position,this.follow?"follow":""].join(" ");return n(i,{class:s,style:o},n("slot",null))};e.prototype.setupDynamicPositioning=function(e){var t=this;var n=y(this.delay,function(){return t.visible=true});var i=function(e){t.screenPosition=[e.clientX,e.clientY]};var r=function(e){t.screenPosition=[e.clientX,e.clientY];n()};var o=function(){n.cancel();t.visible=false};e.addEventListener("mouseenter",i);e.addEventListener("mousemove",r);e.addEventListener("mouseleave",o)};e.prototype.setupStaticPositioning=function(e){var t=this;var n,i;var r=parseFloat(getComputedStyle(this.el).transitionDuration)*1e3;var o=function(){i=setTimeout(function(){return t.visible=false},t.delay);n=setTimeout(l,r)};var s=function(){clearTimeout(i);clearTimeout(n)};var a=function(){s();addEventListener("scroll",c)};var u=y(this.delay,function(){t.setStaticPosition(e);t.visible=true});var c=function(){return t.setStaticPosition(e)};var f=function(){u.cancel();o()};var l=function(){return removeEventListener("scroll",c)};var v=function(){s()};var d=function(){o()};if(this.interactable){this.el.addEventListener("mouseenter",v);this.el.addEventListener("mouseleave",d)}e.addEventListener("mouseenter",a);e.addEventListener("mousemove",u);e.addEventListener("mouseleave",f)};e.prototype.setStaticPosition=function(e){var t=e.getBoundingClientRect();var n=t.top;var i=n+t.height;var r=t.left;var o=r+t.width;var s=t.width/2;var a=t.height/2;switch(this.position){case"left":this.screenPosition=[r,n+a];break;case"right":this.screenPosition=[o,n+a];break;case"bottom":this.screenPosition=[r+s,i];break;case"top":default:this.screenPosition=[r+s,n];break}};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"chef-tooltip{--background-color:var(--tooltip-color,var(--chef-white));position:fixed;opacity:0;z-index:300;border-radius:var(--chef-border-radius);-webkit-box-shadow:var(--chef-box-shadow);box-shadow:var(--chef-box-shadow);pointer-events:none;padding:1em;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease;transition-timing-function:ease;font-family:var(--chef-font-family);font-size:var(--chef-base-font-size);font-weight:400;color:var(--chef-primary-dark)}chef-tooltip,chef-tooltip:after{display:block;background-color:var(--background-color)}chef-tooltip:after{content:\"\";width:.75em;height:.75em;position:absolute;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg)}chef-tooltip.top{-webkit-transform:translate(-50%,calc(-100% - .75em));transform:translate(-50%,calc(-100% - .75em))}chef-tooltip.top:after{left:50%;top:100%}chef-tooltip.left{-webkit-transform:translate(calc(-100% - .75em),-50%);transform:translate(calc(-100% - .75em),-50%)}chef-tooltip.left:after{left:100%;top:50%}chef-tooltip.right{-webkit-transform:translate(.75em,-50%);transform:translate(.75em,-50%)}chef-tooltip.right:after{left:0;top:50%}chef-tooltip.bottom{-webkit-transform:translate(-50%,.75em);transform:translate(-50%,.75em)}chef-tooltip.bottom:after{left:50%;top:0}chef-tooltip.visible{opacity:1;-webkit-transition-property:opacity;transition-property:opacity}chef-tooltip.visible.interactable{pointer-events:all}chef-tooltip.follow{-webkit-transition-property:opacity,top,left;transition-property:opacity,top,left}"},enumerable:true,configurable:true});return e}();e("chef_tooltip",P)}}});