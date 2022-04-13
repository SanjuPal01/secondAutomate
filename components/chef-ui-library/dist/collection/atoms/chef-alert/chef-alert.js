import { Host, h } from "@stencil/core";
/**
 * @description
 * Description
 *
 * @example
 * <chef-alert type='success'>It's a success!</chef-alert>
 *
 * @description
 * Description
 *
 * @example
 * <chef-alert type='error'>Oh, no!</chef-alert>
 */
export class ChefAlert {
    render() {
        return (h(Host, { role: "alert" },
            h("chef-icon", { "aria-hidden": "true" }, this.alertIcon(this.type)),
            h("slot", null)));
    }
    alertIcon(type) {
        switch (type) {
            case 'success': {
                return 'check_circle';
            }
            case 'error': {
                return 'report_problem';
            }
        }
    }
    static get is() { return "chef-alert"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-alert.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-alert.css"]
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
                "text": "The alert type (either 'success' or 'error')"
            },
            "attribute": "type",
            "reflect": false
        }
    }; }
}
