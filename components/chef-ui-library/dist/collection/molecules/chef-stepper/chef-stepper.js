import { h } from "@stencil/core";
/**
 * @description
 * The `<chef-stepper>` molecule is used to display a list of
 * [`<chef-step>`](/atoms/chef-step) atoms.
 *
 * @example
 * <chef-stepper>
 *   <chef-step selected>Add nodes</chef-step>
 *   <chef-step disabled>Add credentials</chef-step>
 *   <chef-step disabled>Preview nodes</chef-step>
 *   <chef-step disabled>Add profiles</chef-step>
 *   <chef-step disabled>Add scheduler</chef-step>
 * </chef-stepper>
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
 *   <chef-step>Add nodes</chef-step>
 *   <chef-step>Add credentials</chef-step>
 *   <chef-step>Preview nodes</chef-step>
 *   <chef-step>Add profiles</chef-step>
 *   <chef-step selected>Add scheduler</chef-step>
 * </chef-stepper>
 *
 * @example
 * <chef-stepper>
 *   <chef-step>Add nodes</chef-step>
 *   <chef-step>Add credentials</chef-step>
 *   <chef-step selected>Preview nodes</chef-step>
 *   <chef-step>Add profiles</chef-step>
 *   <chef-step>Add scheduler</chef-step>
 * </chef-stepper>
 */
export class ChefStepper {
    render() {
        return (h("slot", null));
    }
    static get is() { return "chef-stepper"; }
    static get originalStyleUrls() { return {
        "$": ["chef-stepper.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-stepper.css"]
    }; }
}
