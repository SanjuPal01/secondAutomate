import { r as registerInstance, h } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import './chunk-464ede08.js';
import { m as map } from './chunk-032b46af.js';
import { g as get, p as pipe } from './chunk-4c72efad.js';
import { g as getOr } from './chunk-f76e3d4b.js';

class ChefUIDoc {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("h2", null, get('name', this.doc)),
            this.summary(this.doc),
            this.description(this.doc),
            this.properties(this.doc),
            h("h3", null, "Examples"),
            this.examples(this.doc)
        ];
    }
    summary(doc) {
        return (h("div", { class: "summary" }, h("ul", null, h("li", null, h("strong", null, "Tag:"), " ", get('tag', doc)), h("li", null, h("strong", null, "ShadowDom:"), " ", getOr('', 'shadow', doc).toString()))));
    }
    description(doc) {
        const text = getOr('No Description', 'description', doc);
        return (h("div", { class: "description" }, h("h3", null, "Description"), h("chef-markdown", { text: text })));
    }
    properties(doc) {
        const propRow = (prop) => {
            return (h("tr", null, h("td", null, get('name', prop)), h("td", null, get('description', prop)), h("td", null, get('defaultValue', prop))));
        };
        const propertyList = pipe(getOr([], 'properties'), map(propRow))(doc);
        if (propertyList.length > 0) {
            return (h("div", { class: "properties" }, h("h3", null, "Properties"), h("table", null, h("thead", null, h("tr", null, h("th", null, "Name"), h("th", null, "Description"), h("th", null, "Default Value"))), h("tbody", null, propertyList))));
        }
        else {
            return '';
        }
    }
    examples(doc) {
        const example = (ex) => {
            return (h("chef-example", { code: ex }));
        };
        return pipe(getOr([], 'examples'), map(example))(doc);
    }
    static get style() { return "chef-ui-doc{display:block;padding:1em 1em}chef-ui-doc h1,chef-ui-doc h2{font-weight:300}chef-ui-doc .example pre{-moz-tab-size:2;-o-tab-size:2;tab-size:2;overflow-x:auto;white-space:pre-wrap;font-family:Liberation Mono,Nimbus Mono L,Monaco,Courier New,Courier,monospace}chef-ui-doc .summary li{list-style:none}chef-ui-doc .properties table{--border-color:var(--chef-grey);width:100%;padding:0 13px 13px;background:var(--chef-white);margin:1em 0;border:1px solid var(--border-color)}chef-ui-doc .properties th{text-align:left;border-bottom:1px solid var(--chef-grey)}chef-ui-doc .properties td,chef-ui-doc .properties th{padding-top:10px;padding-left:30px;vertical-align:top}"; }
}

export { ChefUIDoc as chef_ui_doc };
