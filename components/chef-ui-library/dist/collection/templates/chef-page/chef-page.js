import { h } from "@stencil/core";
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
export class ChefPage {
    constructor() {
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
    }
    render() {
        const footerStyle = { display: (this.confirmBtnText === '' ? 'none' : 'block') };
        if (this.pageLoading) {
            return [
                h("chef-loading-spinner", { size: "50", fixed: true })
            ];
        }
        else {
            return [
                h("div", { id: "page-header", class: "flex" },
                    h("div", { id: "header-description", class: "flex-left" },
                        h("chef-page-header", null,
                            h("chef-heading", null, this.heading),
                            h("chef-subheading", null, this.subheading))),
                    h("div", { id: "close-button", class: "flex-right" },
                        h("chef-button", { secondary: true, class: "close-button", "aria-label": "Close", onClick: this.handleClose.bind(this) },
                            h("chef-icon", { "aria-hidden": "true" }, "close")))),
                h("div", { id: "page-container" },
                    h("slot", null)),
                h("div", { id: "page-footer", style: footerStyle },
                    (this.secondaryBtnText && this.secondaryBtnShow)
                        ? h("chef-button", { secondary: true, onClick: this.handleSecondaryConfirm.bind(this) }, this.secondaryBtnText)
                        : '',
                    h("div", { id: "right-buttons" },
                        (this.disableConfirm || this.confirmLoading)
                            ? h("chef-button", { primary: true, disabled: true },
                                this.getLoading(),
                                h("ng-container", null, this.confirmBtnText))
                            : h("chef-button", { type: "submit", form: "ruleForm", primary: true, onClick: this.handleConfirm.bind(this) },
                                h("ng-container", null, this.confirmBtnText)),
                        this.errorMessage
                            ? h("chef-error", null, this.errorMessage)
                            : '',
                        h("chef-button", { tertiary: true, onClick: this.handleClose.bind(this) }, this.cancelBtnText)))
            ];
        }
    }
    getLoading() {
        return this.confirmLoading
            ? h("chef-loading-spinner", null)
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
    static get is() { return "chef-page"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-page.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-page.css"]
    }; }
    static get properties() { return {
        "heading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text for page heading"
            },
            "attribute": "heading",
            "reflect": true
        },
        "subheading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text for page subheading"
            },
            "attribute": "subheading",
            "reflect": true
        },
        "errorMessage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text for error message"
            },
            "attribute": "error-message",
            "reflect": true
        },
        "secondaryBtnText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text for secondary button"
            },
            "attribute": "secondary-btn-text",
            "reflect": true
        },
        "secondaryBtnShow": {
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
                "text": "Show secondary button"
            },
            "attribute": "secondary-btn-show",
            "reflect": true,
            "defaultValue": "false"
        },
        "confirmBtnText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text for confirm button"
            },
            "attribute": "confirm-btn-text",
            "reflect": true,
            "defaultValue": "'Confirm'"
        },
        "cancelBtnText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text for cancel button"
            },
            "attribute": "cancel-btn-text",
            "reflect": true,
            "defaultValue": "'Cancel'"
        },
        "confirmLoading": {
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
                "text": "Indicate confirm is loading"
            },
            "attribute": "confirm-loading",
            "reflect": true,
            "defaultValue": "false"
        },
        "pageLoading": {
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
                "text": "Indicate page is loading"
            },
            "attribute": "page-loading",
            "reflect": true,
            "defaultValue": "false"
        },
        "disableConfirm": {
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
                "text": "Disable confirm buttom"
            },
            "attribute": "disable-confirm",
            "reflect": true,
            "defaultValue": "true"
        }
    }; }
    static get events() { return [{
            "method": "secondaryConfirm",
            "name": "secondaryConfirm",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "confirm",
            "name": "confirm",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "close",
            "name": "close",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
