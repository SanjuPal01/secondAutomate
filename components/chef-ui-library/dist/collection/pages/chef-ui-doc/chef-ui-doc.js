import { h } from "@stencil/core";
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
export class ChefUIDoc {
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
        return (h("div", { class: "summary" },
            h("ul", null,
                h("li", null,
                    h("strong", null, "Tag:"),
                    " ",
                    get('tag', doc)),
                h("li", null,
                    h("strong", null, "ShadowDom:"),
                    " ",
                    getOr('', 'shadow', doc).toString()))));
    }
    description(doc) {
        const text = getOr('No Description', 'description', doc);
        return (h("div", { class: "description" },
            h("h3", null, "Description"),
            h("chef-markdown", { text: text })));
    }
    properties(doc) {
        const propRow = (prop) => {
            return (h("tr", null,
                h("td", null, get('name', prop)),
                h("td", null, get('description', prop)),
                h("td", null, get('defaultValue', prop))));
        };
        const propertyList = pipe(getOr([], 'properties'), map(propRow))(doc);
        if (propertyList.length > 0) {
            return (h("div", { class: "properties" },
                h("h3", null, "Properties"),
                h("table", null,
                    h("thead", null,
                        h("tr", null,
                            h("th", null, "Name"),
                            h("th", null, "Description"),
                            h("th", null, "Default Value"))),
                    h("tbody", null, propertyList))));
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
    static get is() { return "chef-ui-doc"; }
    static get originalStyleUrls() { return {
        "$": ["chef-ui-doc.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-ui-doc.css"]
    }; }
    static get properties() { return {
        "doc": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "DocEntity",
                "resolved": "DocEntity",
                "references": {
                    "DocEntity": {
                        "location": "import",
                        "path": "../../entities/docs/doc.entity"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
