import { r as registerInstance, h, c as getElement } from './chunk-efdec40a.js';
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
var ChefSidePanel = /** @class */ (function () {
    function ChefSidePanel(hostRef) {
        registerInstance(this, hostRef);
    }
    ChefSidePanel.prototype.componentDidLoad = function () {
        this.togglePanel();
    };
    ChefSidePanel.prototype.watchHandler = function () {
        this.togglePanel();
    };
    ChefSidePanel.prototype.render = function () {
        return (h("slot", null));
    };
    ChefSidePanel.prototype.togglePanel = function () {
        if (this.visible) {
            this.el.classList.add('is-visible');
        }
        else {
            this.el.classList.remove('is-visible');
        }
    };
    Object.defineProperty(ChefSidePanel.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefSidePanel, "watchers", {
        get: function () {
            return {
                "visible": ["watchHandler"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefSidePanel, "style", {
        get: function () { return "chef-side-panel{position:fixed;top:70px;right:-450px;bottom:0;background:var(--chef-lightest-grey);width:450px;overflow-x:scroll;-webkit-transition:right .5s ease;transition:right .5s ease}chef-side-panel.is-visible{right:0;-webkit-box-shadow:0 0 48px 0 rgba(63,83,100,.2);box-shadow:0 0 48px 0 rgba(63,83,100,.2)}chef-side-panel [label=close]{position:absolute;top:20px;right:20px;z-index:2;height:34px}"; },
        enumerable: true,
        configurable: true
    });
    return ChefSidePanel;
}());
export { ChefSidePanel as chef_side_panel };
