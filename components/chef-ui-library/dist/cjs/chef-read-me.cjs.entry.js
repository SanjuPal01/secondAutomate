'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

class ChefReadMe {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("chef-layout", null, __chunk_1.h("chef-header", null), __chunk_1.h("chef-main", null, __chunk_1.h("div", { id: "readme-wrap" }, __chunk_1.h("h1", null, "About the Chef UI & Pattern Library"), __chunk_1.h("p", null, "Our Pattern Library is a byproduct of our move to a more responsive, nimble, & intuitive app. We've worked to distill most of the Automate interface into a set of atomic pieces, forming the pattern library you see here. By documenting and assembling a reference site of our patterns, we are able to speed up our process and solve some internal communication problems. A common lexicon of code and UI elements benefits us in a few ways: "), __chunk_1.h("ul", null, __chunk_1.h("li", null, "We can build consistently, focusing our energy on workflows and logic, not web forms and list items."), __chunk_1.h("li", null, "We can reuse code instead of reinventing the wheel or roping in an engineer."), __chunk_1.h("li", null, "We can see all of our patterns in one place, quickly revealing maintenance issues."), __chunk_1.h("li", null, "We can bake in accessibility")), __chunk_1.h("h2", null, "What is StencilJS? What are web components? What is Atomic Design?"), __chunk_1.h("p", null, "tl;dr StencilJS is a way to build web components - web components can be wired into any framework or code where they need to be used. This will future proof the component library so we wouldn't have to throw everything away if we moved away from Angular. And in the meantime, we can continue to work in Angular and the handful of components in our Angular Component Library as well. In regards to Atomic Design, we will refer to the formerly named \u201CUI Components\u201D with their new Atomic Design names such as Atoms and Molecules from now on since we use the word component for more than a dozen different concepts throughout Angular and our code base."), __chunk_1.h("p", null, __chunk_1.h("a", { href: "https://stenciljs.com/docs/intro" }, "StencilJS Docs")), __chunk_1.h("p", null, __chunk_1.h("a", { href: "http://atomicdesign.bradfrost.com/" }, "Atomic Design"))))));
    }
    static get style() { return "chef-read-me chef-layout{grid-template-columns:1fr;grid-template-areas:\"header\" \"main\"}chef-read-me #readme-wrap{padding:1em;margin:0 auto;max-width:30em}"; }
}

exports.chef_read_me = ChefReadMe;
