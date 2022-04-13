import { h } from "@stencil/core";
import Prism from 'prismjs';
/**
 * https://github.com/PrismJS/prism/issues/1409
 * Need to look into a better way to load and use any non-default languages that we need.
 */
/* tslint:disable:no-import-side-effect */
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-ruby';
/**
 * @description
 * The `<chef-snippet>` atom is used to display syntax-highlighted code blocks.
 *
 * As of 2018.10.25 the default supported languages are:
 *
 *  -  markup (and aliases xml, html mathml, and svg)
 *  -  javascript (and alias js)
 *  -  css
 *  -  clike (read this one as "like the C language")
 *
 * Automate is configured to use these additional languages as well:
 *
 *  -  json
 *  -  ruby
 *
 * @example
 * <chef-snippet code="<h1>Highlight me</h1>"></chef-snippet>
 *
 * @example
 * <details style="margin:1em;cursor:pointer;">
 *   <summary>Example Snippet</summary>
 *   <chef-snippet code="const el = document.querySelector('h1');" lang="js"></chef-snippet>
 * </details>
 */
export class ChefSnippet {
    constructor() {
        /**
         * The code snippet to be highlighted.
         */
        this.code = '';
        /**
         * The language the code snippet is written in.
         * See the "Description" for active languages and http://prismjs.com/#languages-list for
         * a list of all available languages.
         */
        this.lang = 'html';
    }
    render() {
        const highlighted = this.highlight(this.code, this.lang);
        return (this.code.length ? (h("pre", { innerHTML: highlighted })) : '');
    }
    highlight(code, lang = 'html') {
        let grammar = Prism.languages[lang];
        // If the grammar rules for the specified language are unavailable then
        // default to 'none' (no color highlighting, formatted plain text only)
        if (!grammar) {
            grammar = {};
            lang = 'none';
        }
        return Prism.highlight(code, grammar, lang);
    }
    static get is() { return "chef-snippet"; }
    static get originalStyleUrls() { return {
        "$": ["chef-snippet.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-snippet.css"]
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
                "text": "The code snippet to be highlighted."
            },
            "attribute": "code",
            "reflect": false,
            "defaultValue": "''"
        },
        "lang": {
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
                "text": "The language the code snippet is written in.\nSee the \"Description\" for active languages and http://prismjs.com/#languages-list for\na list of all available languages."
            },
            "attribute": "lang",
            "reflect": false,
            "defaultValue": "'html'"
        }
    }; }
}
