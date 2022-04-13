import { h } from "@stencil/core";
/**
 * @description
 * The combobox is used to layout combination chef-select and chef-input fields.
 * The combobox can support one or more chef-inputs. Additional elements are layed
 * out via css grids.
 *
 * @example
 * <chef-combobox>
 *   <chef-select>
 *     <chef-option>Select Something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *     <chef-option value='opt4'>Option 4</chef-option>
 *   </chef-select>
 *   <chef-input></chef-input>
 * </chef-combobox>
 *
 * @example
 * <chef-combobox>
 *   <chef-select>
 *     <chef-option>Select Something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *     <chef-option value='opt4'>Option 4</chef-option>
 *   </chef-select>
 *   <chef-input></chef-input>
 *   <chef-input></chef-input>
 *   <chef-input></chef-input>
 *   <chef-input></chef-input>
 * </chef-combobox>
 *
 * @example
 * <chef-combobox>
 *   <chef-select>
 *     <chef-option>Select Something</chef-option>
 *     <chef-option value='opt1'>Option 1</chef-option>
 *     <chef-option value='opt2'>Option 2</chef-option>
 *     <chef-option value='opt3'>Option 3</chef-option>
 *     <chef-option value='opt4'>Option 4</chef-option>
 *   </chef-select>
 *
 *   <chef-input></chef-input>
 *   <chef-button secondary caution><chef-icon>delete</chef-icon></chef-button>
 *
 *   <chef-input></chef-input>
 *   <chef-button secondary caution><chef-icon>delete</chef-icon></chef-button>
 *
 *   <chef-input></chef-input>
 *   <chef-button secondary caution><chef-icon>delete</chef-icon></chef-button>
 *
 *   <chef-input></chef-input>
 *   <chef-button secondary caution><chef-icon>delete</chef-icon></chef-button>
 *
 * </chef-combobox>
 */
export class ChefCombobox {
    componentDidLoad() {
        this.wrapButtons();
    }
    componentDidUpdate() {
        this.wrapButtons();
    }
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    wrapButtons() {
        const buttons = Array.from(this.el.querySelectorAll('chef-combobox>div>chef-button'));
        buttons.forEach((elem) => {
            const parent = elem.parentNode;
            const b = parent.removeChild(elem);
            const div = document.createElement('div');
            div.appendChild(b);
            parent.appendChild(div);
        });
    }
    static get is() { return "chef-combobox"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-combobox.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-combobox.css"]
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
    static get elementRef() { return "el"; }
}
