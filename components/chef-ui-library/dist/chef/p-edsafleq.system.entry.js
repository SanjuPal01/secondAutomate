System.register(["./p-0b5aeae5.system.js","./p-1095b4e8.system.js","./p-513f982b.system.js","./p-b81841de.system.js"],function(e){"use strict";var t,n,r,i,o,s,u;return{setters:[function(e){t=e.r;n=e.h;r=e.c},function(){},function(e){i=e.G;o=e.d;s=e.r},function(e){u=e.b}],execute:function(){var c="Expected a function";function f(e,t,n){if(typeof e!="function"){throw new TypeError(c)}return setTimeout(function(){e.apply(undefined,n)},t)}var l=f;var a=u(function(e,t,n){return l(e,i(t)||0,n)});var p=a;var d=o("delay",p);d.placeholder=s;var v=d;var b=function(){function e(e){t(this,e)}e.prototype.render=function(){return[n("div",{class:"sentinel"}),n("slot",null)]};e.prototype.componentDidLoad=function(){var e=this;var t=new IntersectionObserver(function(t){var n=t[0];if(!n.isIntersecting&&n.boundingClientRect.top<=0){e.el.classList.add("visible")}else{e.el.classList.remove("visible")}});v(2e3,function(){t.observe(e.el.querySelector(".sentinel"))})};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"chef-scrollfader.hydrated{-webkit-transition:opacity .5s ease-out;transition:opacity .5s ease-out}chef-scrollfader.visible{opacity:1;pointer-events:auto}chef-scrollfader{display:block;opacity:0;pointer-events:none}"},enumerable:true,configurable:true});return e}();e("chef_scrollfader",b)}}});