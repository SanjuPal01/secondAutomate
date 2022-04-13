'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

/**
 * @description
 * Template to wrap content in chef styled "page". Provides a slot for page content.
 *
 * Events: confirm, cancel and secondaryConfirm
 *
 * @example
 * <chef-page
 *  class="example-page-width"
 *  heading="Add Members to Administrator"
 *  subheading="Automate only displays local users and local teams. For other types of members add a member expression."
 *  secondary-btn-text="Add Member Expression"
 *  secondary-btn-show="true"
 *  confirm-btn-text="Add Member"
 *  disable-confirm="true"
 *  cancel-btn-text="Cancel"
 * >
 *  <chef-table>
 *    <chef-thead>
 *       <chef-tr>
 *         <chef-th class="checkbox-row"></chef-th>
 *         <chef-th>ID</chef-th>
 *         <chef-th>Type</chef-th>
 *       </chef-tr>
 *    </chef-thead>
 *    <chef-tbody>
 *      <chef-tr>
 *        <chef-td>
 *         <chef-checkbox></chef-checkbox>
 *        </chef-td>
 *        <chef-td>1</chef-td>
 *        <chef-td>apple</chef-td>
 *      </chef-tr>
 *    </chef-tbody>
 *  </chef-table>
 * </chef-page>
 */
class ChefPage {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Show secondary button
         */
        this.secondaryBtnShow = false;
        /**
         * Text for confirm button
         */
        this.confirmBtnText = 'Confirm';
        /**
         * Text for cancel button
         */
        this.cancelBtnText = 'Cancel';
        /**
         * Indicate confirm is loading
         */
        this.confirmLoading = false;
        /**
         * Indicate page is loading
         */
        this.pageLoading = false;
        /**
         * Disable confirm buttom
         */
        this.disableConfirm = true;
        this.secondaryConfirm = __chunk_1.createEvent(this, "secondaryConfirm", 7);
        this.confirm = __chunk_1.createEvent(this, "confirm", 7);
        this.close = __chunk_1.createEvent(this, "close", 7);
    }
    render() {
        const footerStyle = { display: (this.confirmBtnText === '' ? 'none' : 'block') };
        if (this.pageLoading) {
            return [
                __chunk_1.h("chef-loading-spinner", { size: "50", fixed: true })
            ];
        }
        else {
            return [
                __chunk_1.h("div", { id: "page-header", class: "flex" }, __chunk_1.h("div", { id: "header-description", class: "flex-left" }, __chunk_1.h("chef-page-header", null, __chunk_1.h("chef-heading", null, this.heading), __chunk_1.h("chef-subheading", null, this.subheading))), __chunk_1.h("div", { id: "close-button", class: "flex-right" }, __chunk_1.h("chef-button", { secondary: true, class: "close-button", "aria-label": "Close", onClick: this.handleClose.bind(this) }, __chunk_1.h("chef-icon", { "aria-hidden": "true" }, "close")))),
                __chunk_1.h("div", { id: "page-container" }, __chunk_1.h("slot", null)),
                __chunk_1.h("div", { id: "page-footer", style: footerStyle }, (this.secondaryBtnText && this.secondaryBtnShow)
                    ? __chunk_1.h("chef-button", { secondary: true, onClick: this.handleSecondaryConfirm.bind(this) }, this.secondaryBtnText)
                    : '', __chunk_1.h("div", { id: "right-buttons" }, (this.disableConfirm || this.confirmLoading)
                    ? __chunk_1.h("chef-button", { primary: true, disabled: true }, this.getLoading(), __chunk_1.h("ng-container", null, this.confirmBtnText))
                    : __chunk_1.h("chef-button", { type: "submit", form: "ruleForm", primary: true, onClick: this.handleConfirm.bind(this) }, __chunk_1.h("ng-container", null, this.confirmBtnText)), this.errorMessage
                    ? __chunk_1.h("chef-error", null, this.errorMessage)
                    : '', __chunk_1.h("chef-button", { tertiary: true, onClick: this.handleClose.bind(this) }, this.cancelBtnText)))
            ];
        }
    }
    getLoading() {
        return this.confirmLoading
            ? __chunk_1.h("chef-loading-spinner", null)
            : '';
    }
    handleSecondaryConfirm() {
        this.secondaryConfirm.emit();
    }
    handleConfirm() {
        this.confirm.emit();
    }
    handleClose() {
        this.close.emit();
    }
    static get style() { return "chef-page{background-color:var(--chef-white);display:block;height:100vh;min-height:450px;overflow:hidden;padding:64px;position:fixed;width:100vw}chef-page.example-page-width{width:100%}chef-page #page-header #header-description chef-page-header{padding-left:0}chef-page #page-header #close-button{margin-top:-32px}chef-page #page-container{position:relative}chef-page #page-footer{position:fixed;left:0;bottom:0;margin:64px;width:93%}chef-page #page-footer #right-buttons{float:right}chef-page #page-footer #right-buttons .add-member-button{margin-left:64px;width:175px}chef-page #page-footer #right-buttons chef-error{display:inline-block}chef-page #page-footer #right-buttons chef-loading-spinner{position:relative;top:2px;margin-right:5px}chef-page .flex{display:-ms-flexbox;display:flex}chef-page .flex .flex-right{margin-left:auto}"; }
}

exports.chef_page = ChefPage;
