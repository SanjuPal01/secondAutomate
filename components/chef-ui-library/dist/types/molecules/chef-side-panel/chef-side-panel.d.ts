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
export declare class ChefSidePanel {
    /**
     * Boolean to show/hide the side panel
     */
    visible: boolean;
    el: HTMLElement;
    componentDidLoad(): void;
    watchHandler(): void;
    render(): any;
    private togglePanel;
}
