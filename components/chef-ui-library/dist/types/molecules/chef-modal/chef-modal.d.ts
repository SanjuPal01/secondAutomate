import { EventEmitter } from '../../stencil.core';
/**
 * @description
 * Displays a modal that may be closed if it is unlocked. It cannot be closed if
 * `locked` is set to true.
 *
 * An unlocked modal can be closed by clicking the exit button in the top right
 * corner, by clicking outside the modal, or by pressing `<escape>`.
 * The `visible` property is set to `false` by default.
 *
 * When you want to trigger the modal to display, set the `visible` property
 * to `true`. It works best if you bind a variable on the parent Angular component
 * to the modal's `visible` property.
 *
 * ```html
 * <chef-modal [visible]="modalVisibleVar">
 * ```
 *
 * The parent component should also include `openModal` and `closeModal` handler functions.
 *
 * The modal always appears centered on the screen. The height automatically
 * adjusts to fit its content. The width defaults to 700 pixels but can be adjusted
 * by setting the following rule in the Angular parent component's css:
 *
 * ```css
 * chef-modal {
 *    --modal-width: 500px;
 * }
 * ```
 *
 * For accessibility purposes, the element containing the rendered title of the modal
 * (typically an `h2` or `h3`) must be given a unique ID, and that same ID
 * should be used for the modal's `label` property, as shown.
 * That `label` value is also set as the modal's `aria-labelledby` attribute.
 *
 * ```html
 * <chef-modal label="unique-id">
 *    <h2 id="unique-id"> TITLE OF MODAL </h2>
 * ```
 *
 * Using custom autofocus
 * By default, autofocus will apply to the modal itself on locked modals
 * and to the close button on unlocked modals.  We can customize where
 * the autofocus goes first, by adding the attribute "firstFocus" to the
 * desired element.  Currently this works with all standard HTML input elements as
 * well as our custom chef-button element.
 *
 * @example
 * <chef-modal locked="false" label="unique-id">
 * <span id="unique-id" slot="title"> Hey! </span>
 * <p>
 *   Since the modal is strictly a display component, it can only be opened or
 *   closed via external events.
 * </p>
 * <p>
 *   To turn on this modal, go to the `Elements` pane of `Dev Tools` and select
 *   the `chef-modal` element.
 * </p>
 * <p> Switch to the `Console` pane and type `$0.visible = true`. </p>
 * <p> Type `$0.visible = false` to turn off the modal again.</p>
 * </chef-modal>
 *
 * @example
 * <chef-modal label="with-custom-focus" label="example-id">
 *    <h2 slot="title" id="example-id"> Using custom autofocus </h2>
 *    <label>this input will be focused upon opening</label>
 *    <input type="text" firstFocus/>
 * </chef-modal>
 */
export declare class ChefModal {
    /**
     * Prevents the modal from being closed when true.
     */
    locked: boolean;
    /**
     * Displays or hides the modal.
     */
    visible: boolean;
    /**
     * The modal's title.
     * The modal's `aria-labelledby` attribute is set to this value.
     * This should be a unique id, and should match the `id` attribute of the contained element
     * (e.g. `h2`) that actually displays the title of the modal.
     */
    label: string;
    /**
     * Emitted when the modal closes.
     */
    closeModal: EventEmitter;
    /**
     * The html element of the modal.
     */
    el: HTMLElement;
    /**
     * The last element to be focused before the modal opened.
     */
    prevFocusedElement: HTMLElement;
    handleEscape(event: any): void;
    setFocus(visible: boolean): void;
    render(): any;
    private renderButton;
    private getFocusElement;
    private handleClose;
}
