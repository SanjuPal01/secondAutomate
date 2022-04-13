import { Host, h } from "@stencil/core";
/**
 * @description
 * Displays a header bar with the specified content and a button to take corrective action (if passed).
 *
 * @example
 * <chef-banner type="warn">This is a warning without a button!</chef-banner>
 *
 * @example
 * <chef-banner type="warn" button-text="Click me">
 *    This is a warning with a button!&nbsp<a href="https://www.chef.io/contact-us/" target="_blank">Contact support for help</a>.
 * </chef-banner>
 *
 * @example
 * <chef-banner type="info" button-text="Click me">This is just info.</chef-banner>
 *
 * @example
 * <chef-banner>This is also an info message.</chef-banner>
 */
export class ChefBanner {
    constructor() {
        /**
         * The type of header to show. Can be one of 'warn' or 'info'.
         */
        this.type = 'info';
    }
    render() {
        const iconString = this.getIconString();
        const icon = (h("chef-icon", null, iconString));
        const button = (h("chef-button", { onClick: this.handleClick.bind(this) }, this.buttonText));
        return (h(Host, { class: this.type },
            iconString ? icon : null,
            h("slot", null),
            this.buttonText ? button : null));
    }
    handleClick() {
        this.buttonClicked.emit();
    }
    getIconString() {
        switch (this.type) {
            case 'warn':
                return 'warning';
            default:
                return '';
        }
    }
    static get is() { return "chef-banner"; }
    static get originalStyleUrls() { return {
        "$": ["chef-banner.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-banner.css"]
    }; }
    static get properties() { return {
        "type": {
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
                "text": "The type of header to show. Can be one of 'warn' or 'info'."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'info'"
        },
        "buttonText": {
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
                "text": "The text of the chef-button. If nothing is passed, there will not be a button."
            },
            "attribute": "button-text",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "buttonClicked",
            "name": "buttonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
