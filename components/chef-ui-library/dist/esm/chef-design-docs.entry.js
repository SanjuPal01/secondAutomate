import { r as registerInstance, g as getContext, h } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import './chunk-464ede08.js';
import { m as map } from './chunk-032b46af.js';
import { g as get, p as pipe } from './chunk-4c72efad.js';
import { a as filter, f as first } from './chunk-1cfd6e15.js';
import { g as getOr } from './chunk-f76e3d4b.js';
import './chunk-6d754718.js';
import './chunk-b19cfb27.js';
import { s as startCase } from './chunk-3b671e29.js';

class ChefDesignDocs {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.store = getContext(this, "store");
    }
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
        return (h("chef-layout", null, h("chef-aside", { id: "sidebar-nav" }, h("nav", { "aria-labelledby": "nav2" }, h("h2", { id: "nav2", class: "visually-hidden" }, "Design Elements Navigation"), h("ul", null, this.nav(this.docType, this.docIds, this.docs)))), h("chef-main", { class: "doc" }, (() => {
            switch (currentDoc) {
                case 'chef-colors': return h("chef-colors", null);
                case 'chef-typography': return h("chef-typography", null);
                default: return 'component not found';
            }
        })())));
    }
    nav(docType, docNames, docs) {
        const link = (doc) => {
            return (h("li", null, h("stencil-route-link", { url: `${docType}/${doc}` }, pipe(get([doc, 'name']), startCase)(docs))));
        };
        return map(link, docNames);
    }
    static get style() { return "chef-design-docs #sidebar-nav,chef-ui-docs #sidebar-nav{-ms-flex-order:1;order:1;margin-left:-1em;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em 1em;-ms-flex:1 0 150px;flex:1 0 150px}chef-design-docs nav,chef-ui-docs nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}chef-design-docs nav ul,chef-ui-docs nav ul{padding-left:0}chef-design-docs nav ul li,chef-ui-docs nav ul li{margin:0;list-style:none}chef-design-docs nav a,chef-ui-docs nav a{padding:.5em;display:block;text-decoration:none;color:inherit}chef-design-docs nav a.link-active,chef-ui-docs nav a.link-active{background:var(--chef-grey);-webkit-box-shadow:0 0 2px rgba(0,0,0,.2);box-shadow:0 0 2px rgba(0,0,0,.2)}chef-design-docs nav a:focus,chef-design-docs nav a:hover,chef-ui-docs nav a:focus,chef-ui-docs nav a:hover{color:var(--chef-primary-bright);border-right:2px solid var(--chef-primary-bright)}"; }
}

export { ChefDesignDocs as chef_design_docs };
