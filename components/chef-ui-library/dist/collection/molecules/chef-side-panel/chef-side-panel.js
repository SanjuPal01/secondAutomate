import { h } from "@stencil/core";
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
export class ChefSidePanel {
    componentDidLoad() {
        this.togglePanel();
    }
    watchHandler() {
        this.togglePanel();
    }
    render() {
        return (h("slot", null));
    }
    togglePanel() {
        if (this.visible) {
            this.el.classList.add('is-visible');
        }
        else {
            this.el.classList.remove('is-visible');
        }
    }
    static get is() { return "chef-side-panel"; }
    static get originalStyleUrls() { return {
        "$": ["chef-side-panel.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-side-panel.css"]
    }; }
    static get properties() { return {
        "visible": {
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
                "text": "Boolean to show/hide the side panel"
            },
            "attribute": "visible",
            "reflect": false
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "visible",
            "methodName": "watchHandler"
        }]; }
}
