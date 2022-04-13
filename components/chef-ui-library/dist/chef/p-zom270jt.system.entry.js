System.register(["./p-0b5aeae5.system.js"],function(e){"use strict";var t,s,n,i,l;return{setters:[function(e){t=e.r;s=e.d;n=e.h;i=e.H;l=e.c}],execute:function(){var o=function(){function e(e){t(this,e);this.locked=false;this.visible=false;this.closeModal=s(this,"closeModal",7)}e.prototype.handleEscape=function(e){if(e.key==="Escape"){this.handleClose()}};e.prototype.setFocus=function(e){if(e){this.prevFocusedElement=document.activeElement;var t=this.getFocusElement(this.locked);var s=setInterval(function(){t.focus();if(t===document.activeElement){clearInterval(s)}},1)}};e.prototype.render=function(){return n(i,{class:this.visible?"visible":""},n("div",{class:"modal-overlay",onClick:this.handleClose.bind(this)}),n("div",{class:"modal","aria-modal":"true",role:"dialog","aria-labelledby":this.label,tabindex:"0"},n("chef-trap-focus",null,this.renderButton(),n("slot",{name:"title"}),n("slot",null))))};e.prototype.renderButton=function(){if(!this.locked){return n("chef-button",{class:"close",onClick:this.handleClose.bind(this),secondary:true},n("chef-icon",null,"close"))}return""};e.prototype.getFocusElement=function(e){var t=this.el.getElementsByClassName("modal").item(0);var s=this.el.getElementsByClassName("close").item(0).firstElementChild;var n=this.el.querySelector("[firstFocus]");if(e){return t}else if(n){return n.tagName==="CHEF-BUTTON"?n.firstElementChild:n}return s};e.prototype.handleClose=function(){var e=this;if(!this.locked){this.closeModal.emit();if(this.prevFocusedElement){setTimeout(function(){e.prevFocusedElement.focus()},1)}}};Object.defineProperty(e.prototype,"el",{get:function(){return l(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{visible:["setFocus"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"chef-modal{display:none}chef-modal.visible{display:block}chef-modal .modal-overlay{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:var(--chef-modal-bg-color)}chef-modal .modal{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);z-index:1001;background-color:var(--chef-white);color:var(--chef-primary-dark);border-radius:var(--chef-border-radius);padding:30px;--default-modal-width:700px;width:var(--modal-width,var(--default-modal-width))}chef-modal .modal .close{position:absolute;top:5px;right:5px;width:auto}chef-modal .modal [slot=title]{--default-title-size:24px;font-size:var(--title-size,var(--default-title-size))}"},enumerable:true,configurable:true});return e}();e("chef_modal",o)}}});