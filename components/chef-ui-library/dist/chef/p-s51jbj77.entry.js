import{r as t,h as e,H as i,c as s}from"./p-1b10ccda.js";import"./p-d7ac2f15.js";import{P as o,G as n,i as r,d as u,r as a}from"./p-464ede08.js";var c=function(){return o.Date.now()},h=Math.max,l=Math.min,m=u("debounce",function(t,e,i){var s,o,u,a,m,f,v=0,d=!1,p=!1,T=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var i=s,n=o;return s=o=void 0,v=e,a=t.apply(n,i)}function g(t){var i=t-f;return void 0===f||i>=e||i<0||p&&t-v>=u}function E(){var t=c();if(g(t))return P(t);m=setTimeout(E,function(t){var i=e-(t-f);return p?l(i,u-(t-v)):i}(t))}function P(t){return m=void 0,T&&s?b(t):(s=o=void 0,a)}function y(){var t=c(),i=g(t);if(s=arguments,o=this,f=t,i){if(void 0===m)return function(t){return v=t,m=setTimeout(E,e),d?b(t):a}(f);if(p)return clearTimeout(m),m=setTimeout(E,e),b(f)}return void 0===m&&(m=setTimeout(E,e)),a}return e=n(e)||0,r(i)&&(d=!!i.leading,u=(p="maxWait"in i)?h(n(i.maxWait)||0,e):u,T="trailing"in i?!!i.trailing:T),y.cancel=function(){void 0!==m&&clearTimeout(m),v=0,s=f=o=m=void 0},y.flush=function(){return void 0===m?a:P(c())},y});m.placeholder=a;var f=m;class v{constructor(e){t(this,e),this.delay=100,this.position="top",this.offset="0 0",this.follow=!1,this.interactable=!1,this.visible=!1,this._screenPosition=[0,0]}set screenPosition([t,e]){const[i,s]=this.offset.split(" ").map(t=>parseInt(t,10));this._screenPosition=[t+(i||0),e+(s||0)]}get screenPosition(){return this._screenPosition}componentDidLoad(){const t=document.querySelector(`#${this.for}`);t&&(this.follow?this.setupDynamicPositioning(t):this.setupStaticPositioning(t))}render(){const[t,s]=this.screenPosition,o={left:`${t}px`,top:`${s}px`},n=[this.visible?"visible":"",this.interactable?"interactable":"",this.position,this.follow?"follow":""].join(" ");return e(i,{class:n,style:o},e("slot",null))}setupDynamicPositioning(t){const e=f(this.delay,()=>this.visible=!0);t.addEventListener("mouseenter",t=>{this.screenPosition=[t.clientX,t.clientY]}),t.addEventListener("mousemove",t=>{this.screenPosition=[t.clientX,t.clientY],e()}),t.addEventListener("mouseleave",()=>{e.cancel(),this.visible=!1})}setupStaticPositioning(t){let e,i;const s=1e3*parseFloat(getComputedStyle(this.el).transitionDuration),o=()=>{i=setTimeout(()=>this.visible=!1,this.delay),e=setTimeout(a,s)},n=()=>{clearTimeout(i),clearTimeout(e)},r=f(this.delay,()=>{this.setStaticPosition(t),this.visible=!0}),u=()=>this.setStaticPosition(t),a=()=>removeEventListener("scroll",u);this.interactable&&(this.el.addEventListener("mouseenter",()=>{n()}),this.el.addEventListener("mouseleave",()=>{o()})),t.addEventListener("mouseenter",()=>{n(),addEventListener("scroll",u)}),t.addEventListener("mousemove",r),t.addEventListener("mouseleave",()=>{r.cancel(),o()})}setStaticPosition(t){const e=t.getBoundingClientRect(),i=e.top,s=i+e.height,o=e.left,n=o+e.width,r=e.width/2,u=e.height/2;switch(this.position){case"left":this.screenPosition=[o,i+u];break;case"right":this.screenPosition=[n,i+u];break;case"bottom":this.screenPosition=[o+r,s];break;case"top":default:this.screenPosition=[o+r,i]}}get el(){return s(this)}static get style(){return"chef-tooltip{--background-color:var(--tooltip-color,var(--chef-white));position:fixed;opacity:0;z-index:300;border-radius:var(--chef-border-radius);-webkit-box-shadow:var(--chef-box-shadow);box-shadow:var(--chef-box-shadow);pointer-events:none;padding:1em;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease;transition-timing-function:ease;font-family:var(--chef-font-family);font-size:var(--chef-base-font-size);font-weight:400;color:var(--chef-primary-dark)}chef-tooltip,chef-tooltip:after{display:block;background-color:var(--background-color)}chef-tooltip:after{content:\"\";width:.75em;height:.75em;position:absolute;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg)}chef-tooltip.top{-webkit-transform:translate(-50%,calc(-100% - .75em));transform:translate(-50%,calc(-100% - .75em))}chef-tooltip.top:after{left:50%;top:100%}chef-tooltip.left{-webkit-transform:translate(calc(-100% - .75em),-50%);transform:translate(calc(-100% - .75em),-50%)}chef-tooltip.left:after{left:100%;top:50%}chef-tooltip.right{-webkit-transform:translate(.75em,-50%);transform:translate(.75em,-50%)}chef-tooltip.right:after{left:0;top:50%}chef-tooltip.bottom{-webkit-transform:translate(-50%,.75em);transform:translate(-50%,.75em)}chef-tooltip.bottom:after{left:50%;top:0}chef-tooltip.visible{opacity:1;-webkit-transition-property:opacity;transition-property:opacity}chef-tooltip.visible.interactable{pointer-events:all}chef-tooltip.follow{-webkit-transition-property:opacity,top,left;transition-property:opacity,top,left}"}}export{v as chef_tooltip};