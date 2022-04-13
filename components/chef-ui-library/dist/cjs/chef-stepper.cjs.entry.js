'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    static get style() { return "chef-stepper{display:-ms-flexbox;display:flex;counter-reset:step}chef-stepper chef-step{-ms-flex:1;flex:1}chef-stepper chef-step:before{counter-increment:step;content:counter(step)}"; }
}

exports.chef_stepper = ChefStepper;
