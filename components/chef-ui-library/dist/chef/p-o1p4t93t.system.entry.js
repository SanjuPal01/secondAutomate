System.register(["./p-0b5aeae5.system.js"],function(e){"use strict";var t,i,n;return{setters:[function(e){t=e.r;i=e.h;n=e.c}],execute:function(){var a=function(){function e(e){t(this,e);this.value="";this.placeholder="";this.editing="key";this.changeEvent=new Event("change",{bubbles:true})}e.prototype.componentDidLoad=function(){this.editing=this.value?"value":"key"};e.prototype.render=function(){var e=this.value.split(":"),t=e[0],n=e[1];return[this.editing==="value"&&t?i("chef-pill",null,t):"",i("input",{type:"text",value:this.editing==="key"?t:n,placeholder:this.placeholder,onKeyDown:this.handleUpdate.bind(this,t),onChange:this.handleChange.bind(this)})]};e.prototype.handleUpdate=function(e,t){var i=new Event("change");switch(t.key){case"Tab":if(this.editing==="key"&&t.target.value){t.preventDefault();t.target.dispatchEvent(i)}break;case"Backspace":if(!t.target.value&&this.editing==="value"){this.value=e;this.editing="key";this.el.dispatchEvent(this.changeEvent)}break}};e.prototype.handleChange=function(e){e.stopPropagation();if(this.editing==="key"&&e.target.value){this.value=e.target.value;this.editing="value"}else if(e.target.value){this.value=this.value.split(":")[0]+":"+e.target.value}else{this.value=""}this.el.dispatchEvent(this.changeEvent)};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"chef-input-key-value{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}chef-input-key-value chef-pill{margin-left:.5em;-ms-flex:1 0 auto;flex:1 0 auto}chef-input-key-value input{-ms-flex:0 1 auto;flex:0 1 auto}"},enumerable:true,configurable:true});return e}();e("chef_input_key_value",a)}}});