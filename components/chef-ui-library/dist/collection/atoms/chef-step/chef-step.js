import { h } from "@stencil/core";
/**
 * @description
 * The `<chef-step>` atom is used to define a step within a
 * [`<chef-stepper>`](/molecules/chef-stepper) molecule.
 *
 * @example
 * <chef-stepper>
 *   <chef-step>Add nodes</chef-step>
 *   <chef-step>Add credentials</chef-step>
 *   <chef-step selected>Preview nodes</chef-step>
 *   <chef-step disabled>Add profiles</chef-step>
 *   <chef-step disabled>Add scheduler</chef-step>
 * </chef-stepper>
 *
 * @example
 * <chef-stepper>
 *   <chef-step>
 *     <chef-icon>check</chef-icon>
 *     <a href="">Add nodes</a>
 *   </chef-step>
 *   <chef-step>
 *     <chef-icon>check</chef-icon>
 *     <a href="">Add credentials</a>
 *   </chef-step>
 *   <chef-step selected>
 *     <a href="">Preview nodes</a>
 *   </chef-step>
 *   <chef-step disabled>
 *     <a href="">Add profiles</a>
 *   </chef-step>
 *   <chef-step disabled>
 *     <a href="">Add scheduler</a>
 *   </chef-step>
 * </chef-stepper>
 */
export class ChefStep {
    constructor() {
        /**
         * Indicates that the step is disabled.
         */
        this.disabled = false;
        /**
         * Indicates that the step is selected.
         */
        this.selected = false;
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-step"; }
    static get originalStyleUrls() { return {
        "$": ["chef-step.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-step.css"]
    }; }
    static get properties() { return {
        "disabled": {
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
                "text": "Indicates that the step is disabled."
            },
            "attribute": "disabled",
            "reflect": true,
            "defaultValue": "false"
        },
        "selected": {
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
                "text": "Indicates that the step is selected."
            },
            "attribute": "selected",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
