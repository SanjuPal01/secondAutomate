'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');
require('./chunk-f5b13333.js');
require('./chunk-6373e70b.js');
const __chunk_4 = require('./chunk-e974d361.js');
const __chunk_5 = require('./chunk-fef7e46d.js');
const __chunk_8 = require('./chunk-74eb4d29.js');

class ChefUIDoc {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return [
            __chunk_1.h("h2", null, __chunk_5.get('name', this.doc)),
            this.summary(this.doc),
            this.description(this.doc),
            this.properties(this.doc),
            __chunk_1.h("h3", null, "Examples"),
            this.examples(this.doc)
        ];
    }
    summary(doc) {
        return (__chunk_1.h("div", { class: "summary" }, __chunk_1.h("ul", null, __chunk_1.h("li", null, __chunk_1.h("strong", null, "Tag:"), " ", __chunk_5.get('tag', doc)), __chunk_1.h("li", null, __chunk_1.h("strong", null, "ShadowDom:"), " ", __chunk_8.getOr('', 'shadow', doc).toString()))));
    }
    description(doc) {
        const text = __chunk_8.getOr('No Description', 'description', doc);
        return (__chunk_1.h("div", { class: "description" }, __chunk_1.h("h3", null, "Description"), __chunk_1.h("chef-markdown", { text: text })));
    }
    properties(doc) {
        const propRow = (prop) => {
            return (__chunk_1.h("tr", null, __chunk_1.h("td", null, __chunk_5.get('name', prop)), __chunk_1.h("td", null, __chunk_5.get('description', prop)), __chunk_1.h("td", null, __chunk_5.get('defaultValue', prop))));
        };
        const propertyList = __chunk_5.pipe(__chunk_8.getOr([], 'properties'), __chunk_4.map(propRow))(doc);
        if (propertyList.length > 0) {
            return (__chunk_1.h("div", { class: "properties" }, __chunk_1.h("h3", null, "Properties"), __chunk_1.h("table", null, __chunk_1.h("thead", null, __chunk_1.h("tr", null, __chunk_1.h("th", null, "Name"), __chunk_1.h("th", null, "Description"), __chunk_1.h("th", null, "Default Value"))), __chunk_1.h("tbody", null, propertyList))));
        }
        else {
            return '';
        }
    }
    examples(doc) {
        const example = (ex) => {
            return (__chunk_1.h("chef-example", { code: ex }));
        };
        return __chunk_5.pipe(__chunk_8.getOr([], 'examples'), __chunk_4.map(example))(doc);
    }
    static get style() { return "chef-ui-doc{display:block;padding:1em 1em}chef-ui-doc h1,chef-ui-doc h2{font-weight:300}chef-ui-doc .example pre{-moz-tab-size:2;-o-tab-size:2;tab-size:2;overflow-x:auto;white-space:pre-wrap;font-family:Liberation Mono,Nimbus Mono L,Monaco,Courier New,Courier,monospace}chef-ui-doc .summary li{list-style:none}chef-ui-doc .properties table{--border-color:var(--chef-grey);width:100%;padding:0 13px 13px;background:var(--chef-white);margin:1em 0;border:1px solid var(--border-color)}chef-ui-doc .properties th{text-align:left;border-bottom:1px solid var(--chef-grey)}chef-ui-doc .properties td,chef-ui-doc .properties th{padding-top:10px;padding-left:30px;vertical-align:top}"; }
}

exports.chef_ui_doc = ChefUIDoc;
