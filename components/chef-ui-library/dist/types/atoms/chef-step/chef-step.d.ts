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
export declare class ChefStep {
    /**
     * Indicates that the step is disabled.
     */
    disabled: boolean;
    /**
     * Indicates that the step is selected.
     */
    selected: boolean;
    render(): any;
}
