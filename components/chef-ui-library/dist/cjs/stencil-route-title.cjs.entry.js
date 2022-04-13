'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');
const __chunk_13 = require('./chunk-acea22a9.js');

/**
  * Updates the document title when found.
  *
  * @name RouteTitle
  * @description
 */
class RouteTitle {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.titleSuffix = '';
        this.pageTitle = '';
    }
    updateDocumentTitle() {
        const el = this.el;
        if (el.ownerDocument) {
            el.ownerDocument.title = `${this.pageTitle}${this.titleSuffix || ''}`;
        }
    }
    componentWillLoad() {
        this.updateDocumentTitle();
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "pageTitle": ["updateDocumentTitle"]
    }; }
}
__chunk_13.ActiveRouter.injectProps(RouteTitle, [
    'titleSuffix',
]);

exports.stencil_route_title = RouteTitle;
