import { h } from "@stencil/core";
export class ChefHeaderNav {
    render() {
        return (h("header", { role: "banner" },
            h("nav", { "aria-labelledby": "nav1", class: "navigation-wrapper" },
                h("div", { class: "left-nav", role: "menubar" },
                    h("stencil-route-link", { role: "menuitem", class: "logo-link", title: "Chef UI Library Home Link ReadMe", url: "/" },
                        h("h2", null, "Chef UI Library")),
                    h("div", { class: "navigation-menu" },
                        h("h2", { id: "nav1", class: "visually-hidden" }, "Main Header Navigation for UI Library"),
                        h("stencil-route-link", { role: "menuitem", class: "nav-link", tabindex: "0", url: "/design" }, "Design Elements"),
                        h("stencil-route-link", { role: "menuitem", class: "nav-link", tabindex: "0", url: "/atoms" }, "Atoms"),
                        h("stencil-route-link", { role: "menuitem", class: "nav-link", tabindex: "0", url: "/molecules" }, "Molecules"),
                        h("stencil-route-link", { role: "menuitem", class: "nav-link", tabindex: "0", url: "/templates" }, "Templates"),
                        h("stencil-route-link", { role: "menuitem", class: "nav-link", tabindex: "0", url: "/charts" }, "Charts"))))));
    }
    static get is() { return "chef-header-nav"; }
    static get originalStyleUrls() { return {
        "$": ["chef-header-nav.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-header-nav.css"]
    }; }
}
