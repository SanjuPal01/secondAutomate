import{r as t,h as s}from"./p-1b10ccda.js";const i="Copy to clipboard",o="Copied!",c=1500;let e=0;class h{constructor(s){t(this,s),this.value="",this.icon="content_copy",this.label="",this.plain=!1,this.tooltipText=i}handleClick(){setTimeout(()=>this.copy(this.value),0),this.copy(this.value),this.tooltipText=o,setTimeout(()=>this.tooltipText=i,c)}async copy(t){const s=document.createElement("textarea");s.value=t,s.style.position="absolute",s.style.left="-9999px",document.body.appendChild(s),s.select();const i=document.execCommand("copy");return document.body.removeChild(s),Promise.resolve(i)}get buttonProps(){return this.icon?{tertiary:!0}:{primary:!0}}render(){const t=`clipboard-btn-${++e}`;return this.plain?[s("div",Object.assign({id:t},this.buttonProps),this.icon?s("chef-icon",null,this.icon):"",this.label?s("span",{class:"clipboard-label"},this.label):"")]:[s("chef-button",Object.assign({id:t},this.buttonProps),this.icon?s("chef-icon",null,this.icon):"",this.label?s("span",{class:"clipboard-label"},this.label):""),s("chef-tooltip",{for:t},this.tooltipText)]}}export{h as chef_clipboard};