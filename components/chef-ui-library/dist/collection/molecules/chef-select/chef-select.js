import { Host, h } from "@stencil/core";
import clamp from 'lodash/fp/clamp';
import findIndex from 'lodash/fp/findIndex';
import getOr from 'lodash/fp/getOr';
import find from 'lodash/fp/find';
import lte from 'lodash/fp/lte';
import max from 'lodash/fp/max';
/**
 * @description
 * The `<chef-select>` molecule defines a custom select molecule. The select molecule
 * will fill the width of it's container.
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2' selected>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select value='opt3'>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select value='opt3' change='alert("Value Changed!")'>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <div style='width: 200px'>
 *   <chef-select disabled='true'>
 *     <chef-option>select something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 */
export class ChefSelect {
    constructor() {
        /**
         * Disable your select menu by setting this to true
         */
        this.disabled = false;
        this.options = [];
        this.selectedIndex = 0;
        this.selectedContent = '';
        this.focusedIndex = 0;
        this.focused = false;
        this.active = false;
        this.minWidth = 0;
    }
    handleFocus() {
        if (!this.disabled) {
            this.focused = true;
        }
    }
    handleFocusOut(event) {
        const relatedTarget = event.relatedTarget;
        event.stopPropagation();
        if (!relatedTarget || relatedTarget.nodeName !== 'CHEF-DROPDOWN') {
            this.focused = false;
            this.active = false;
        }
    }
    handleClickActivation(event) {
        if (this.disabled) {
            return;
        }
        else if (this.active) {
            const option = event.target.closest('chef-option');
            if (!option)
                return;
            const optionId = option.optionId;
            this.makeSelection(findIndex(['optionId', optionId], this.options));
        }
        else {
            this.activate(this.selectedIndex);
        }
    }
    handleKeydown(event) {
        switch (event.key) {
            case (' '):
            case ('Enter'):
                return this.handleKeyActivation();
            case ('Escape'):
                return this.handleEscape();
            case ('ArrowUp'):
                return this.handleUp(event);
            case ('ArrowDown'):
                return this.handleDown(event);
        }
    }
    handleKeyActivation() {
        if (this.disabled) {
            return;
        }
        else if (this.active) {
            this.makeSelection(this.focusedIndex);
        }
        else {
            this.activate(this.selectedIndex);
        }
    }
    handleEscape() {
        this.active = false;
        this.focusedIndex = this.selectedIndex;
    }
    handleUp(event) {
        event.preventDefault();
        this.focusedIndex = this.clamp(this.focusedIndex - 1);
    }
    handleDown(event) {
        event.preventDefault();
        this.focusedIndex = this.clamp(this.focusedIndex + 1);
    }
    componentDidLoad() {
        this.options = Array.from(this.el.querySelectorAll('chef-option'));
        // The default option is determined by first checking the value property, then
        // looking for a selected attribute on the options list and finally defaulting
        // to the first option if all else fails.
        const defaultIndexes = [findIndex(['value', this.value], this.options),
            findIndex('selected', this.options),
            0];
        const index = this.clamp(find(lte(0), defaultIndexes));
        this.value = getOr('', [index, 'value'], this.options);
        this.selectedIndex = index;
        this.focusedIndex = index;
        this.syncOptions(index);
    }
    async componentWillUpdate() {
        const optionWidths = Promise.all(this.options.map((o) => o.getWidth()));
        this.minWidth = max(await optionWidths) || 0;
        const selected = this.options[this.selectedIndex];
        this.selectedContent = selected ? await selected.getContent() : '';
    }
    render() {
        const focused = this.options[this.focusedIndex];
        const styles = { minWidth: `${this.minWidth + 20}px` };
        const classNames = [
            this.focused ? 'focused' : '',
            this.active ? 'active' : '',
            this.disabled ? 'disabled' : ''
        ].join(' ');
        return (h(Host, { role: "combobox", class: classNames, style: styles, tabindex: this.disabled ? '-1' : '0', highlighted: getOr('', 'optionId', focused) },
            h("span", { class: "selected-value", role: "button", "aria-haspopup": "listbox", "aria-expanded": this.active },
                h("span", { class: "option-content", innerHTML: this.selectedContent }),
                h("chef-icon", { "aria-hidden": true }, "expand_more")),
            h("div", { class: "options" },
                h("chef-dropdown", { tabindex: "-1", visible: this.active, role: "listbox", "aria-activedescendant": getOr('', 'optionId', focused) },
                    h("slot", null)))));
    }
    clamp(value) {
        return clamp(0, this.options.length - 1, value);
    }
    makeSelection(index) {
        const changeEvent = new CustomEvent('change');
        this.selectedIndex = index;
        this.active = false;
        this.value = getOr('', [index, 'value'], this.options);
        this.change.emit(changeEvent);
        this.syncOptions(index);
    }
    activate(index) {
        const dropdown = this.el.querySelector('chef-dropdown');
        this.active = true;
        this.focusedIndex = this.clamp(index);
        dropdown.focus();
    }
    syncOptions(index) {
        if (this.options[index]) {
            this.options.forEach((opt) => opt.selected = false);
            this.options[index].selected = true;
        }
    }
    static get is() { return "chef-select"; }
    static get originalStyleUrls() { return {
        "$": ["chef-select.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-select.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The selected value"
            },
            "attribute": "value",
            "reflect": false
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
                "text": "Disable your select menu by setting this to true"
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "options": {},
        "selectedIndex": {},
        "selectedContent": {},
        "focusedIndex": {},
        "focused": {},
        "active": {},
        "minWidth": {}
    }; }
    static get events() { return [{
            "method": "change",
            "name": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Emitted when the value of the molecule changes."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "focus",
            "method": "handleFocus",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "focusout",
            "method": "handleFocusOut",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "click",
            "method": "handleClickActivation",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "keydown",
            "method": "handleKeydown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
