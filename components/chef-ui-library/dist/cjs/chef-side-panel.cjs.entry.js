'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

/**
 * @description
 * Slide out panel from the right. This is a very simple atom - it accepts one property
 * to determine whether it should be shown or hidden as well as comes with the default
 * styling of positioning the close button in the top right corner. For the button to be
 * styled properly, make sure to put label="close" attribute on your button.
 *
 * @example
 * <chef-button id='open-button' class='open-button' primary>
 *   Open, sesame!
 * </chef-button>
 * <chef-side-panel visible='true' id='side-panel'>
 *  <chef-button label="close" id='close-button' secondary>
 *    <chef-icon>close</chef-icon>
 *  </chef-button>
 *  More side panel content!
 * </chef-side-panel>
 *
 * <script>
 *   const panel = document.getElementById('side-panel');
 *   const closeBtn = document.getElementById('close-button');
 *   const openBtn = document.getElementById('open-button');
 *
 *   closeBtn.addEventListener('click', e => panel.setAttribute('visible', 'false'));
 *   openBtn.addEventListener('click', e => panel.setAttribute('visible', 'true'));
 *
 *   function clickOutside() {
 *     panel.setAttribute('visible', 'false')
 *   }
 * </script>
 *
 */
class ChefSidePanel {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.togglePanel();
    }
    watchHandler() {
        this.togglePanel();
    }
    render() {
        return (__chunk_1.h("slot", null));
    }
    togglePanel() {
        if (this.visible) {
            this.el.classList.add('is-visible');
        }
        else {
            this.el.classList.remove('is-visible');
        }
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "visible": ["watchHandler"]
    }; }
    static get style() { return "chef-side-panel{position:fixed;top:70px;right:-450px;bottom:0;background:var(--chef-lightest-grey);width:450px;overflow-x:scroll;-webkit-transition:right .5s ease;transition:right .5s ease}chef-side-panel.is-visible{right:0;-webkit-box-shadow:0 0 48px 0 rgba(63,83,100,.2);box-shadow:0 0 48px 0 rgba(63,83,100,.2)}chef-side-panel [label=close]{position:absolute;top:20px;right:20px;z-index:2;height:34px}"; }
}

exports.chef_side_panel = ChefSidePanel;
