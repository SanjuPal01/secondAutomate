import{r as s,d as t,h as e,H as o}from"./p-1b10ccda.js";class c{constructor(e){s(this,e),this.order="none",this.sort="",this.sortToggled=t(this,"sort-toggled",7)}async toggle(){switch(this.order){case"none":this.order="asc";break;case"asc":this.order="desc";break;case"desc":default:this.order="none"}this.sortToggled.emit({order:this.order,sort:this.sort})}render(){return e(o,{role:"button"},e("chef-button",{tertiary:!0,onClick:this.onClick.bind(this)},e("chef-icon",{class:"asc-icon"},"arrow_drop_up"),e("chef-icon",{class:"desc-icon"},"arrow_drop_down")))}onClick(){this.toggle()}static get style(){return"chef-sort-toggle{display:inline-block}chef-sort-toggle chef-button{margin:0}chef-sort-toggle chef-button button{padding:0;height:32px;-ms-flex-direction:column;flex-direction:column}chef-sort-toggle chef-button .asc-icon{-webkit-transform:translateY(4px);transform:translateY(4px)}chef-sort-toggle chef-button .desc-icon{-webkit-transform:translateY(-4px);transform:translateY(-4px)}chef-sort-toggle chef-button .asc-icon:first-child,chef-sort-toggle chef-button .asc-icon:last-child,chef-sort-toggle chef-button .desc-icon:first-child,chef-sort-toggle chef-button .desc-icon:last-child{margin:0;font-size:18px;line-height:1;-webkit-transition:opacity .4s;transition:opacity .4s}chef-sort-toggle[order=asc] .desc-icon,chef-sort-toggle[order=desc] .asc-icon{opacity:0}"}}export{c as chef_sort_toggle};