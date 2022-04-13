import { EventEmitter } from '../../stencil.core';
/**
 * @description
 * Displays a header bar with the specified content and a button to take corrective action (if passed).
 *
 * @example
 * <chef-banner type="warn">This is a warning without a button!</chef-banner>
 *
 * @example
 * <chef-banner type="warn" button-text="Click me">
 *    This is a warning with a button!&nbsp<a href="https://www.chef.io/contact-us/" target="_blank">Contact support for help</a>.
 * </chef-banner>
 *
 * @example
 * <chef-banner type="info" button-text="Click me">This is just info.</chef-banner>
 *
 * @example
 * <chef-banner>This is also an info message.</chef-banner>
 */
export declare class ChefBanner {
    /**
     * The type of header to show. Can be one of 'warn' or 'info'.
     */
    type: string;
    /**
     * The text of the chef-button. If nothing is passed, there will not be a button.
     */
    buttonText: string;
    buttonClicked: EventEmitter;
    render(): any;
    private handleClick;
    private getIconString;
}
