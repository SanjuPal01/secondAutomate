import { h } from "@stencil/core";
export class ChefReadMe {
    render() {
        return (h("chef-layout", null,
            h("chef-header", null),
            h("chef-main", null,
                h("div", { id: "readme-wrap" },
                    h("h1", null, "About the Chef UI & Pattern Library"),
                    h("p", null, "Our Pattern Library is a byproduct of our move to a more responsive, nimble, & intuitive app. We've worked to distill most of the Automate interface into a set of atomic pieces, forming the pattern library you see here. By documenting and assembling a reference site of our patterns, we are able to speed up our process and solve some internal communication problems. A common lexicon of code and UI elements benefits us in a few ways: "),
                    h("ul", null,
                        h("li", null, "We can build consistently, focusing our energy on workflows and logic, not web forms and list items."),
                        h("li", null, "We can reuse code instead of reinventing the wheel or roping in an engineer."),
                        h("li", null, "We can see all of our patterns in one place, quickly revealing maintenance issues."),
                        h("li", null, "We can bake in accessibility")),
                    h("h2", null, "What is StencilJS? What are web components? What is Atomic Design?"),
                    h("p", null, "tl;dr StencilJS is a way to build web components - web components can be wired into any framework or code where they need to be used. This will future proof the component library so we wouldn't have to throw everything away if we moved away from Angular. And in the meantime, we can continue to work in Angular and the handful of components in our Angular Component Library as well. In regards to Atomic Design, we will refer to the formerly named \u201CUI Components\u201D with their new Atomic Design names such as Atoms and Molecules from now on since we use the word component for more than a dozen different concepts throughout Angular and our code base."),
                    h("p", null,
                        h("a", { href: "https://stenciljs.com/docs/intro" }, "StencilJS Docs")),
                    h("p", null,
                        h("a", { href: "http://atomicdesign.bradfrost.com/" }, "Atomic Design"))))));
    }
    static get is() { return "chef-read-me"; }
    static get originalStyleUrls() { return {
        "$": ["chef-read-me.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-read-me.css"]
    }; }
}
