import { r as registerInstance, h } from './chunk-efdec40a.js';

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
class ChefStepper {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("slot", null));
    }
    static get style() { return "chef-stepper{display:-ms-flexbox;display:flex;counter-reset:step}chef-stepper chef-step{-ms-flex:1;flex:1}chef-stepper chef-step:before{counter-increment:step;content:counter(step)}"; }
}

export { ChefStepper as chef_stepper };
