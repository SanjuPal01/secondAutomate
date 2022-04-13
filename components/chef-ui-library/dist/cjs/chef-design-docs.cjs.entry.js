'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');
require('./chunk-f5b13333.js');
require('./chunk-6373e70b.js');
const __chunk_4 = require('./chunk-e974d361.js');
const __chunk_5 = require('./chunk-fef7e46d.js');
const __chunk_6 = require('./chunk-c819b7b1.js');
const __chunk_8 = require('./chunk-74eb4d29.js');
require('./chunk-0c47841c.js');
require('./chunk-83673ec1.js');
const __chunk_14 = require('./chunk-967701b8.js');

class ChefDesignDocs {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.store = __chunk_1.getContext(this, "store");
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const docs = __chunk_5.get(['docs', 'byId'], state);
            const docIds = __chunk_5.pipe(__chunk_5.get(['docs', 'allIds']), __chunk_6.filter((id) => __chunk_5.get([id, 'docType'], docs) === this.docType))(state);
            return {
                docs,
                docIds
            };
        });
    }
    render() {
        const currentDoc = __chunk_8.getOr(__chunk_6.first(this.docIds), ['params', 'id'], this.match);
        return (__chunk_1.h("chef-layout", null, __chunk_1.h("chef-aside", { id: "sidebar-nav" }, __chunk_1.h("nav", { "aria-labelledby": "nav2" }, __chunk_1.h("h2", { id: "nav2", class: "visually-hidden" }, "Design Elements Navigation"), __chunk_1.h("ul", null, this.nav(this.docType, this.docIds, this.docs)))), __chunk_1.h("chef-main", { class: "doc" }, (() => {
            switch (currentDoc) {
                case 'chef-colors': return __chunk_1.h("chef-colors", null);
                case 'chef-typography': return __chunk_1.h("chef-typography", null);
                default: return 'component not found';
            }
        })())));
    }
    nav(docType, docNames, docs) {
        const link = (doc) => {
            return (__chunk_1.h("li", null, __chunk_1.h("stencil-route-link", { url: `${docType}/${doc}` }, __chunk_5.pipe(__chunk_5.get([doc, 'name']), __chunk_14.startCase)(docs))));
        };
        return __chunk_4.map(link, docNames);
    }
    static get style() { return "chef-design-docs #sidebar-nav,chef-ui-docs #sidebar-nav{-ms-flex-order:1;order:1;margin-left:-1em;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:1em 1em;-ms-flex:1 0 150px;flex:1 0 150px}chef-design-docs nav,chef-ui-docs nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}chef-design-docs nav ul,chef-ui-docs nav ul{padding-left:0}chef-design-docs nav ul li,chef-ui-docs nav ul li{margin:0;list-style:none}chef-design-docs nav a,chef-ui-docs nav a{padding:.5em;display:block;text-decoration:none;color:inherit}chef-design-docs nav a.link-active,chef-ui-docs nav a.link-active{background:var(--chef-grey);-webkit-box-shadow:0 0 2px rgba(0,0,0,.2);box-shadow:0 0 2px rgba(0,0,0,.2)}chef-design-docs nav a:focus,chef-design-docs nav a:hover,chef-ui-docs nav a:focus,chef-ui-docs nav a:hover{color:var(--chef-primary-bright);border-right:2px solid var(--chef-primary-bright)}"; }
}

exports.chef_design_docs = ChefDesignDocs;
