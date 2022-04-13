import{r as t,d as s,h as i,c as e}from"./p-1b10ccda.js";import"./p-d7ac2f15.js";import"./p-464ede08.js";import{f as h}from"./p-7cba3003.js";class r{constructor(i){t(this,i),this.value="",this.change=s(this,"change",7),this.input=s(this,"input",7)}handleClick(t){const s=t.target.closest("chef-option");s&&(this.value=s.value,this.change.emit(),this.input.emit())}componentDidLoad(){const t=this.clearOptions();this.selected=h(["value",this.value],t),this.selected||(this.selected=this.el.querySelector("chef-option[selected]")||t[0],this.value=this.selected.value),this.selected.selected=!0,t.forEach(t=>{t.addEventListener("keypress",t=>this.handleKeypress(t)),t.setAttribute("tabindex","0")})}componentDidUpdate(){this.clearOptions(),this.selected=this.el.querySelector(`chef-option[value='${this.value}']`),this.selected.selected=!0}render(){return i("slot",null)}clearOptions(){const t=Array.from(this.el.querySelectorAll("chef-option"));return t.forEach(t=>t.selected=!1),t}handleKeypress(t){"Enter"===t.key&&this.handleClick(t)}get el(){return e(this)}static get style(){return"chef-status-filter-group{--active-color:var(--toggle-active-color,var(--chef-primary-bright));display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}chef-status-filter-group .filter{padding:8px 12px;cursor:pointer;background-color:var(--chef-white);-webkit-box-shadow:0 0 0 1px #dae1e6 inset;box-shadow:inset 0 0 0 1px #dae1e6;border-radius:4px;font-size:14px;display:-ms-inline-flexbox;display:inline-flex;margin-bottom:10px}chef-status-filter-group .filter:not(:last-child){margin-right:10px}chef-status-filter-group .filter .option-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100px}chef-status-filter-group .filter .filter-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;height:16px;width:16px;margin-right:4px}chef-status-filter-group .filter .filter-total{font-weight:600}chef-status-filter-group .filter .filter-label{-ms-flex-order:-1;order:-1;-ms-flex-preferred-size:100%;flex-basis:100%;margin-bottom:4px}chef-status-filter-group .filter.general chef-icon{color:var(--chef-primary-dark)}chef-status-filter-group .filter.critical chef-icon{color:var(--chef-critical)}chef-status-filter-group .filter.warning chef-icon{color:var(--chef-primary)}chef-status-filter-group .filter.success chef-icon{color:var(--chef-success)}chef-status-filter-group .filter.unknown chef-icon{color:var(--chef-dark-grey)}chef-status-filter-group .filter.connected chef-icon{color:var(--chef-success);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}chef-status-filter-group .filter.disconnected chef-icon{color:var(--chef-dark-grey);content:\"\";display:block;width:14px;height:14px;background:url(/assets/icon-disconnected.svg);background-size:contain}chef-status-filter-group .filter.selected{background:var(--chef-white)}chef-status-filter-group .filter.selected .filter-label,chef-status-filter-group .filter.selected .filter-total,chef-status-filter-group .filter.selected .lean-filter-label{color:var(--chef-primary-dark)}chef-status-filter-group .filter.selected.general{background:#f3f6f8;-webkit-box-shadow:0 0 0 1px #829ba8 inset;box-shadow:inset 0 0 0 1px #829ba8}chef-status-filter-group .filter.selected.critical{background:#f9dbea;-webkit-box-shadow:0 0 0 1px var(--chef-critical) inset;box-shadow:0 0 0 1px var(--chef-critical) inset}chef-status-filter-group .filter.selected.warning{background:#ffe5d4;-webkit-box-shadow:0 0 0 1px var(--chef-primary) inset;box-shadow:0 0 0 1px var(--chef-primary) inset}chef-status-filter-group .filter.selected.connected,chef-status-filter-group .filter.selected.success{background:#cfe8ff;-webkit-box-shadow:0 0 0 1px var(--chef-success) inset;box-shadow:0 0 0 1px var(--chef-success) inset}chef-status-filter-group .filter.selected.unknown{background:#e7e9e9;-webkit-box-shadow:0 0 0 1px var(--chef-dark-grey) inset;box-shadow:0 0 0 1px var(--chef-dark-grey) inset}chef-status-filter-group .filter.selected.disconnected{background:var(--chef-info-alert-light);-webkit-box-shadow:0 0 0 1px var(--chef-info-alert) inset;box-shadow:0 0 0 1px var(--chef-info-alert) inset}chef-status-filter-group .filter:hover{-webkit-box-shadow:0 0 0 0;box-shadow:0 0 0 0}chef-status-filter-group .filter:hover.general{background:#f3f6f8}chef-status-filter-group .filter:hover.critical{background:#f9dbea}chef-status-filter-group .filter:hover.warning{background:#ffe5d4}chef-status-filter-group .filter:hover.connected,chef-status-filter-group .filter:hover.success{background:#cfe8ff}chef-status-filter-group .filter:hover.unknown{background:#e7e9e9}chef-status-filter-group .filter:hover.disconnected{background:var(--chef-info-alert-light)}chef-status-filter-group[lean]{-ms-flex-wrap:wrap;flex-wrap:wrap}chef-status-filter-group[lean] .filter{margin-bottom:8px}chef-status-filter-group[lean] .filter:not(:last-child){margin-right:8px}chef-status-filter-group[lean] .filter .option-content{-ms-flex-wrap:nowrap;flex-wrap:nowrap;width:auto;min-width:auto}chef-status-filter-group[lean] .filter .filter-label{-ms-flex-order:0;order:0;-ms-flex-preferred-size:auto;flex-basis:auto;margin:0 8px 0 0}"}}export{r as chef_status_filter_group};