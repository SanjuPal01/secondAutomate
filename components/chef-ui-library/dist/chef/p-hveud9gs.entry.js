import{r as s,d as t,h as e,H as i}from"./p-1b10ccda.js";let h=0;class l{constructor(e){s(this,e),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.labelId="",this.labelled=!1,this.change=t(this,"change",7)}handleKeydown(s){" "===s.key&&this.handleToggle(s)}handleToggle(s){"A"!==s.target.nodeName&&(this.toggle(),s.preventDefault())}componentWillLoad(){this.labelId=`label-${++h}`}componentDidRender(){this.labelled=this.labelEl.innerHTML.trim().length>0}toggle(){this.checked=!this.checked,this.indeterminate=!1,this.change.emit(this.checked)}render(){return e(i,{role:"checkbox",tabindex:this.disabled?"-1":"0","aria-checked":this.checked?"true":this.indeterminate?"mixed":"false","aria-disabled":this.disabled?"true":null,"aria-labelledby":this.labelled?this.labelId:null},e("div",{class:"check-wrap"},e("chef-icon",null,this.checked?"check":this.indeterminate?"remove":"close")),e("div",{class:"label-wrap",id:this.labelId,ref:s=>this.labelEl=s},e("slot",null)))}static get style(){return"chef-checkbox{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}chef-checkbox,chef-checkbox .check-wrap{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}chef-checkbox .check-wrap{width:20px;min-width:20px;height:20px;border:2px solid;border-radius:var(--chef-border-radius);color:var(--chef-white);-ms-flex-pack:center;justify-content:center}chef-checkbox .check-wrap chef-icon{color:var(--chef-white)}chef-checkbox .label-wrap{display:none;margin-left:14px;font-size:14px;color:var(--chef-primary-dark)}chef-checkbox[aria-labelledby] .label-wrap{display:block}chef-checkbox[aria-checked=true] .check-wrap{border-color:var(--chef-primary-bright);background-color:var(--chef-primary-bright)}chef-checkbox[aria-checked=false] .check-wrap{border-color:var(--chef-dark-grey);background-color:var(--chef-white)}chef-checkbox[aria-checked=mixed] .check-wrap{border-color:var(--chef-primary-bright);background-color:var(--chef-primary-bright)}chef-checkbox[aria-disabled]{border:var(--chef-grey);opacity:.5;cursor:default;pointer-events:none}"}}export{l as chef_checkbox};