import{r as t,h as e,c as s}from"./p-1b10ccda.js";class o{constructor(e){t(this,e),this.trap=!0}render(){return e("slot",null)}componentDidLoad(){const t=this.el.querySelectorAll("input, button, select, textarea, a, *[tabindex]"),e=t.item(0),s=t.item(t.length-1);this.el.addEventListener("keydown",t=>{!1!==this.trap&&"Tab"===t.key&&(t.shiftKey?document.activeElement===e&&(s.focus(),t.preventDefault()):document.activeElement===s&&(e.focus(),t.preventDefault()))})}get el(){return s(this)}}export{o as chef_trap_focus};