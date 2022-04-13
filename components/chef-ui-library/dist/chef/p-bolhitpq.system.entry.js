var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{a(n.next(t))}catch(t){i(t)}}function c(t){try{a(n["throw"](t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,c)}a((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(t){return function(e){return a([t,e])}}function a(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;o=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t];o=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-0b5aeae5.system.js"],function(t){"use strict";var e,r,n,o;return{setters:[function(t){e=t.r;r=t.d;n=t.h;o=t.H}],execute:function(){var i=function(){function t(t){e(this,t);this.order="none";this.sort="";this.sortToggled=r(this,"sort-toggled",7)}t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(this.order){case"none":this.order="asc";break;case"asc":this.order="desc";break;case"desc":default:this.order="none"}this.sortToggled.emit({order:this.order,sort:this.sort});return[2]})})};t.prototype.render=function(){return n(o,{role:"button"},n("chef-button",{tertiary:true,onClick:this.onClick.bind(this)},n("chef-icon",{class:"asc-icon"},"arrow_drop_up"),n("chef-icon",{class:"desc-icon"},"arrow_drop_down")))};t.prototype.onClick=function(){this.toggle()};Object.defineProperty(t,"style",{get:function(){return"chef-sort-toggle{display:inline-block}chef-sort-toggle chef-button{margin:0}chef-sort-toggle chef-button button{padding:0;height:32px;-ms-flex-direction:column;flex-direction:column}chef-sort-toggle chef-button .asc-icon{-webkit-transform:translateY(4px);transform:translateY(4px)}chef-sort-toggle chef-button .desc-icon{-webkit-transform:translateY(-4px);transform:translateY(-4px)}chef-sort-toggle chef-button .asc-icon:first-child,chef-sort-toggle chef-button .asc-icon:last-child,chef-sort-toggle chef-button .desc-icon:first-child,chef-sort-toggle chef-button .desc-icon:last-child{margin:0;font-size:18px;line-height:1;-webkit-transition:opacity .4s;transition:opacity .4s}chef-sort-toggle[order=asc] .desc-icon,chef-sort-toggle[order=desc] .asc-icon{opacity:0}"},enumerable:true,configurable:true});return t}();t("chef_sort_toggle",i)}}});