'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
class ChefStep {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return (__chunk_1.h("slot", null));
    }
    static get style() { return "chef-step{display:block;position:relative;margin:10px;padding:2px 12px 2px 2px;border:1px solid transparent;border-radius:30px;background:var(--chef-white);-webkit-box-shadow:var(--chef-box-shadow);box-shadow:var(--chef-box-shadow);font-size:12px;color:var(--chef-primary-bright);white-space:nowrap}chef-step:before{display:inline-block;height:30px;width:30px;line-height:30px;text-align:center;margin-right:8px;border-radius:100%;background:var(--chef-primary-bright);color:var(--chef-white)}chef-step~chef-step:after{content:\"\";display:block;position:absolute;height:1px;width:20px;left:-21px;top:50%;background:var(--chef-primary-bright)}chef-step[selected]{--border-color:var(--chef-primary-bright);border:1px solid var(--border-color);color:var(--chef-primary-bright)}chef-step[selected]:before{background:var(--chef-primary-bright);color:var(--chef-white)}chef-step[disabled],chef-step[disabled]:before{color:var(--chef-dark-grey)}chef-step[disabled]:before{background:var(--chef-light-grey)}chef-step[disabled]:after{background:var(--chef-grey)}chef-step a{color:inherit}"; }
}

exports.chef_step = ChefStep;
