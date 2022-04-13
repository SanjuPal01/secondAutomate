'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
class ChefModal {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Prevents the modal from being closed when true.
         */
        this.locked = false;
        /**
         * Displays or hides the modal.
         */
        this.visible = false;
        this.closeModal = __chunk_1.createEvent(this, "closeModal", 7);
    }
    // Listens on page outside of the modal component
    handleEscape(event) {
        if (event.key === 'Escape') {
            this.handleClose();
        }
    }
    setFocus(visible) {
        if (visible) {
            this.prevFocusedElement = document.activeElement;
            const focusElement = this.getFocusElement(this.locked);
            const focusElementInterval = setInterval(() => {
                focusElement.focus();
                if (focusElement === document.activeElement) {
                    clearInterval(focusElementInterval);
                }
            }, 1);
        }
    }
    render() {
        return (__chunk_1.h(__chunk_1.Host, { class: this.visible ? 'visible' : '' }, __chunk_1.h("div", { class: "modal-overlay", onClick: this.handleClose.bind(this) }), __chunk_1.h("div", { class: "modal", "aria-modal": "true", role: "dialog", "aria-labelledby": this.label, tabindex: "0" }, __chunk_1.h("chef-trap-focus", null, this.renderButton(), __chunk_1.h("slot", { name: "title" }), __chunk_1.h("slot", null)))));
    }
    renderButton() {
        if (!this.locked) {
            return (__chunk_1.h("chef-button", { class: "close", onClick: this.handleClose.bind(this), secondary: true }, __chunk_1.h("chef-icon", null, "close")));
        }
        return '';
    }
    // when Angular detects the modal is open
    // it sets the focus by default on the close button for unlocked modals,
    // or the modal div for locked modals
    // Developer can specify element to focus first by using firstFocus attribute
    // on an unlocked modal
    getFocusElement(lockStatus) {
        const modal = this.el.getElementsByClassName('modal').item(0);
        const closeFocus = this.el.getElementsByClassName('close').item(0).firstElementChild;
        const firstFocus = this.el.querySelector('[firstFocus]');
        if (lockStatus) {
            return modal;
        }
        else if (firstFocus) {
            return firstFocus.tagName === 'CHEF-BUTTON'
                ? firstFocus.firstElementChild
                : firstFocus;
        }
        return closeFocus;
    }
    handleClose() {
        if (!this.locked) {
            this.closeModal.emit();
            // return focus to last focused element on page before modal opened
            if (this.prevFocusedElement) {
                setTimeout(() => {
                    this.prevFocusedElement.focus();
                }, 1);
            }
        }
    }
    get el() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "visible": ["setFocus"]
    }; }
    static get style() { return "chef-modal{display:none}chef-modal.visible{display:block}chef-modal .modal-overlay{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:var(--chef-modal-bg-color)}chef-modal .modal{position:fixed;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);z-index:1001;background-color:var(--chef-white);color:var(--chef-primary-dark);border-radius:var(--chef-border-radius);padding:30px;--default-modal-width:700px;width:var(--modal-width,var(--default-modal-width))}chef-modal .modal .close{position:absolute;top:5px;right:5px;width:auto}chef-modal .modal [slot=title]{--default-title-size:24px;font-size:var(--title-size,var(--default-title-size))}"; }
}

exports.chef_modal = ChefModal;
