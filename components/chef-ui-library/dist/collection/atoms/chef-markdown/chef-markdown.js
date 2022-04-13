import { h } from "@stencil/core";
import marked from 'marked';
/**
 * Have the renderer display code blocks as `<chef-snippet>` tags instead
 * of `<pre>` tags to keep styling of code blocks consistent.
 */
const renderer = Object.assign(new marked.Renderer(), {
    code: (code, lang) => {
        return `<chef-snippet code="${code.replace(/"/g, '&quot;')}" lang="${lang}"></chef-snippet>`;
    }
});
/**
 * @description
 * The `<chef-markdown>` atom is used to parse and display markdown text.
 *
 * @example
 * <chef-markdown text="# Heading with a [link](#to-nothing)"></chef-markdown>
 *
 * @example
 * <textarea id='md-editor' placeholder='Type some markdown...'></textarea>
 * <chef-markdown id='md-display'></chef-markdown>
 *
 * <style>
 *  #md-editor { width: 100%; min-height: 10em; }
 * </style>
 *
 * <script>
 *   const editor = document.getElementById('md-editor');
 *   const display = document.getElementById('md-display');
 *   editor.addEventListener('input', e => display.text = e.target.value);
 * </script>
 */
export class ChefMarkdown {
    constructor() {
        /**
         * The markdown text to be parsed.
         */
        this.text = '';
    }
    render() {
        const parsed = this.parse(this.text);
        return (h("div", { innerHTML: parsed }));
    }
    parse(text) {
        return marked.parse(text, { renderer });
    }
    static get is() { return "chef-markdown"; }
    static get originalStyleUrls() { return {
        "$": ["chef-markdown.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-markdown.css"]
    }; }
    static get properties() { return {
        "text": {
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
                "text": "The markdown text to be parsed."
            },
            "attribute": "text",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
}
