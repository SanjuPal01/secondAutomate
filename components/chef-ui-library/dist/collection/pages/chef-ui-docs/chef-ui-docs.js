import { h } from "@stencil/core";
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import first from 'lodash/fp/first';
import startCase from 'lodash/fp/startCase';
import pipe from 'lodash/fp/pipe';
import filter from 'lodash/fp/filter';
export class ChefUIDocs {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const docs = get(['docs', 'byId'], state);
            const docIds = pipe(get(['docs', 'allIds']), filter((id) => get([id, 'docType'], docs) === this.docType))(state);
            return {
                docs,
                docIds
            };
        });
    }
    render() {
        const currentDoc = getOr(first(this.docIds), ['params', 'id'], this.match);
        return (h("chef-layout", null,
            h("chef-aside", { id: "sidebar-nav" },
                h("nav", { "aria-labelledby": "nav2" },
                    h("h2", { id: "nav2", class: "visually-hidden" }, "Atom Navigation"),
                    h("ul", null, this.nav(this.docType, this.docIds, this.docs)))),
            h("chef-main", { class: "doc" },
                h("chef-ui-doc", { doc: get(currentDoc, this.docs) }))));
    }
    nav(docType, docNames, docs) {
        const link = (doc) => {
            return (h("li", null,
                h("stencil-route-link", { url: `${docType}/${doc}` }, pipe(get([doc, 'name']), startCase)(docs))));
        };
        return map(link, docNames);
    }
    static get is() { return "chef-ui-docs"; }
    static get originalStyleUrls() { return {
        "$": ["chef-ui-docs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-ui-docs.css"]
    }; }
    static get properties() { return {
        "match": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "match",
            "reflect": false
        },
        "docType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "doc-type",
            "reflect": false
        }
    }; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
    static get states() { return {
        "docs": {},
        "docIds": {}
    }; }
}
