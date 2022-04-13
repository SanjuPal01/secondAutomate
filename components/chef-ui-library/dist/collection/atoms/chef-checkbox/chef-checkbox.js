import { Host, h } from "@stencil/core";
let id = 0;
/**
 * @description
 * `<chef-checkbox>` is used to display checkbox inputs. Clicking the checkbox,
 * or pressing `space` while the checkbox is focused, will toggle the `checked`
 * property. A `change` event emits when the `checked` property is toggled.
 *
 * @example
 * <div class="form-field">
 *   <chef-checkbox>Label Text</chef-checkbox>
 * </div>
 * <div class="form-field">
 *   <chef-checkbox checked>Label Text</chef-checkbox>
 * </div>
 * <div class="form-field">
 *   <chef-checkbox disabled>Label Text</chef-checkbox>
 * </div>
 * <div class="form-field">
 *   <chef-checkbox indeterminate>Label Text</chef-checkbox>
 * </div>
 */
export class ChefCheckbox {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.labelId = '';
        this.labelled = false;
    }
    handleKeydown(event) {
        if (event.key === ' ') {
            this.handleToggle(event);
        }
    }
    handleToggle(event) {
        if (event.target.nodeName !== 'A') {
            this.toggle();
            event.preventDefault();
        }
    }
    componentWillLoad() {
        this.labelId = `label-${++id}`;
    }
    componentDidRender() {
        this.labelled = this.labelEl.innerHTML.trim().length > 0;
    }
    toggle() {
        this.checked = !this.checked;
        this.indeterminate = false;
        this.change.emit(this.checked);
    }
    render() {
        const checkIcon = this.checked ? 'check' : this.indeterminate ? 'remove' : 'close';
        const labelRef = el => this.labelEl = el;
        return (h(Host, { role: "checkbox", tabindex: this.disabled ? '-1' : '0', "aria-checked": this.checked ? 'true' : this.indeterminate ? 'mixed' : 'false', "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": this.labelled ? this.labelId : null },
            h("div", { class: "check-wrap" },
                h("chef-icon", null, checkIcon)),
            h("div", { class: "label-wrap", id: this.labelId, ref: labelRef },
                h("slot", null))));
    }
    static get is() { return "chef-checkbox"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-checkbox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-checkbox.css"]
    }; }
    static get properties() { return {
        "checked": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "checked",
            "reflect": false,
            "defaultValue": "false"
        },
        "indeterminate": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "indeterminate",
            "reflect": false,
            "defaultValue": "false"
        },
        "disabled": {
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
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "labelId": {},
        "labelled": {}
    }; }
    static get events() { return [{
            "method": "change",
            "name": "change",
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
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeydown",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "handleToggle",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
