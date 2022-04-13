import { h } from "@stencil/core";
/**
 * @description
 * chef-data-point is used in conjunction with various charts to specify data points.
 *
 * @example
 * <style>
 *   chef-radial-chart .failed, chef-radial-chart .critical {
 *     color: var(--chef-critical);
 *   }
 *  chef-radial-chart .warning, chef-radial-chart .warning {
 *     color: var(--chef-primary);
 *   }
 *   chef-radial-chart .success, chef-radial-chart .major {
 *     color: var(--chef-ok);
 *   }
 *   chef-radial-chart .skipped, chef-radial-chart .minor {
 *     color: var(--chef-unknown);
 *   }
 * </style>
 * <chef-radial-chart style="width: 220px; height: 220px;">
 *   <span slot="innerText">Text for the center of the chart</span>
 *
 *   <chef-data-point value="4" class="failed">4 Failed</chef-data-point>
 *   <chef-data-point value="3" class="warning">3 Failed</chef-data-point>
 *   <chef-data-point value="2" class="success">2 Successful</chef-data-point>
 *   <chef-data-point value="1" class="skipped">1 Skipped</chef-data-point>
 *
 *   <chef-data-point value="4" secondary class="critical">Critical</chef-data-point>
 *   <chef-data-point value="3" secondary class="warning">Warning</chef-data-point>
 *   <chef-data-point value="2" secondary class="major">Major</chef-data-point>
 *   <chef-data-point value="1" secondary class="minor">Minor</chef-data-point>
 * </chef-radial-chart>
 */
export class ChefDataPoint {
    constructor() {
        /**
         * The value assigned to the data point.
         */
        this.value = 0;
        /**
         * Some charts support special secondary data points.
         */
        this.secondary = false;
    }
    componentWillUpdate() {
        this.updated.emit();
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-data-point"; }
    static get properties() { return {
        "value": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The value assigned to the data point."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        },
        "secondary": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Some charts support special secondary data points."
            },
            "attribute": "secondary",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "updated",
            "name": "updated",
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
