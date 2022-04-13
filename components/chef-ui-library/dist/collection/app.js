/* tslint:enable:no-import-side-effect */
import { h } from "@stencil/core";
import { configureStore } from './store';
import { getDocs } from './entities/docs/doc.actions';
export class ChefLibraryApp {
    componentWillLoad() {
        this.store.setStore(configureStore({}));
        this.store.mapDispatchToProps(this, {
            getDocs
        });
    }
    componentDidLoad() {
        this.getDocs();
    }
    render() {
        return (h("div", null,
            h("chef-header-nav", null),
            h("stencil-router", null,
                h("stencil-route", { url: "/", component: "chef-read-me", exact: true }),
                h("stencil-route", { url: ['/design/:id', '/design'], componentProps: { docType: 'design' }, component: "chef-design-docs" }),
                h("stencil-route", { url: ['/atoms/:id', '/atoms'], componentProps: { docType: 'atoms' }, component: "chef-ui-docs" }),
                h("stencil-route", { url: ['/molecules/:id', '/molecules'], componentProps: { docType: 'molecules' }, component: "chef-ui-docs" }),
                h("stencil-route", { url: ['/templates/:id', '/templates'], componentProps: { docType: 'templates' }, component: "chef-ui-docs" }),
                h("stencil-route", { url: ['/charts/:id', '/charts'], componentProps: { docType: 'charts' }, component: "chef-ui-docs" }))));
    }
    static get is() { return "chef-library-app"; }
    static get contextProps() { return [{
            "name": "store",
            "context": "store"
        }]; }
}
