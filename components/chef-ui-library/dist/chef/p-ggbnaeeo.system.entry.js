var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r["throw"](t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(t){return function(e){return c([t,e])}}function c(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;o=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t];o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-0b5aeae5.system.js"],function(t){"use strict";var e,n,r,o;return{setters:[function(t){e=t.r;n=t.h;r=t.H;o=t.c}],execute:function(){var i=0;var u=function(){function t(t){e(this,t);this.value="";this.selected=false;this.width=0;i=i+1;this.optionId=this.optionId||"chef-option"+i}t.prototype.getContent=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,Promise.resolve(this.el.querySelector(".option-content").innerHTML)]})})};t.prototype.getWidth=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,Promise.resolve(this.width)]})})};t.prototype.componentWillLoad=function(){this.width=this.el.scrollWidth};t.prototype.render=function(){return n(r,{role:"option",id:this.optionId,class:this.selected?"selected":""},n("style",null,"\n            [selected="+this.optionId+"] ["+this.optionId+"],\n            [highlighted="+this.optionId+"] #"+this.optionId+" {\n              background-color: var(--chef-primary-bright);\n              color: var(--chef-white);\n            }\n          "),n("span",{class:"option-content"},n("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return t}();t("chef_option",u)}}});