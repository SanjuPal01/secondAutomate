import{r as t,h as e,c as r}from"./p-1b10ccda.js";import"./p-d7ac2f15.js";import{G as s,d as n,r as o}from"./p-464ede08.js";import{b as i}from"./p-5cf946a6.js";var c=n("delay",i(function(t,e,r){return function(t,e,r){if("function"!=typeof t)throw new TypeError("Expected a function");return setTimeout(function(){t.apply(void 0,r)},e)}(t,s(e)||0,r)}));c.placeholder=o;var a=c;class f{constructor(e){t(this,e)}render(){return[e("div",{class:"sentinel"}),e("slot",null)]}componentDidLoad(){const t=new IntersectionObserver(t=>{const[e]=t;!e.isIntersecting&&e.boundingClientRect.top<=0?this.el.classList.add("visible"):this.el.classList.remove("visible")});a(2e3,()=>{t.observe(this.el.querySelector(".sentinel"))})}get el(){return r(this)}static get style(){return"chef-scrollfader.hydrated{-webkit-transition:opacity .5s ease-out;transition:opacity .5s ease-out}chef-scrollfader.visible{opacity:1;pointer-events:auto}chef-scrollfader{display:block;opacity:0;pointer-events:none}"}}export{f as chef_scrollfader};