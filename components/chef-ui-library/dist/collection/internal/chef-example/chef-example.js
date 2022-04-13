import { h } from "@stencil/core";
/**
 * @description
 * The `<chef-example>` molecule is used to display syntax-highlighted example code alongside their
 * rendered output.
 *
 * @example
 * <chef-example code="<h1>Highlight me</h1>"></chef-example>
 */
export class ChefExample {
    componentDidLoad() {
        this.execScripts();
    }
    componentDidUpdate() {
        this.execScripts();
    }
    render() {
        return ([
            h("chef-snippet", { class: "example-code", code: this.code }),
            h("div", { class: "example-display", innerHTML: this.code })
        ]);
    }
    execScripts() {
        const scripts = Array.from(this.el.querySelectorAll('script'));
        return scripts.map(script => new Function(script.innerText)());
    }
    static get is() { return "chef-example"; }
    static get originalStyleUrls() { return {
        "$": ["chef-example.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-example.css"]
    }; }
    static get properties() { return {
        "code": {
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
                "text": "The example code to be presented."
            },
            "attribute": "code",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
}
