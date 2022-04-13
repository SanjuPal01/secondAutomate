import { h } from "@stencil/core";
/**
 * @description
 * The `<chef-expander>` molecule is used to expand/collapse content.
 *
 * @example
 * <chef-expander>
 *   <h1>Some collapsed content</h1>
 * </chef-expander>
 * <chef-expander opened>
 *   <h1>Some expanded content</h1>
 * </chef-expander>
 *
 * @example
 * <chef-button secondary id='open-btn'>Open</chef-button>
 * <chef-button secondary id='close-btn'>Close</chef-button>
 * <chef-button secondary id='toggle-btn'>Toggle</chef-button>
 * <chef-expander id='expander'>
 *   <h1>Some content</h1>
 * </chef-expander>
 *
 * <style>
 *  chef-button,
 *  chef-expander[opened] { margin: 1em; }
 * </style>
 *
 * <script>
 *   const openBtn = document.getElementById('open-btn');
 *   const closeBtn = document.getElementById('close-btn');
 *   const toggleBtn = document.getElementById('toggle-btn');
 *   const expander = document.getElementById('expander');
 *
 *   openBtn.addEventListener('click', e => expander.open());
 *   closeBtn.addEventListener('click', e => expander.close());
 *   toggleBtn.addEventListener('click', e => expander.toggle());
 * </script>
 */
export class ChefExpander {
    constructor() {
        /**
         * Indicates that the expander is opened.
         */
        this.opened = false;
    }
    async open() {
        this.opened = true;
    }
    async close() {
        this.opened = false;
    }
    async toggle() {
        this.opened = !this.opened;
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-expander"; }
    static get originalStyleUrls() { return {
        "$": ["chef-expander.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-expander.css"]
    }; }
    static get properties() { return {
        "opened": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Indicates that the expander is opened."
            },
            "attribute": "opened",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get methods() { return {
        "open": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "close": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "toggle": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
