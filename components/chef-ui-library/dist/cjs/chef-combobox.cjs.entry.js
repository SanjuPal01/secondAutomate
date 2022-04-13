'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
class ChefCombobox {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.change = __chunk_1.createEvent(this, "change", 7);
    }
    componentDidLoad() {
        this.wrapButtons();
    }
    componentDidUpdate() {
        this.wrapButtons();
    }
    render() {
        return (__chunk_1.h("div", null, __chunk_1.h("slot", null)));
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
    get el() { return __chunk_1.getElement(this); }
    static get style() { return "chef-combobox{display:inline-block}chef-combobox>div{display:grid;grid-template-columns:auto 5fr;grid-auto-flow:column;-ms-flex-pack:start;justify-content:start}chef-combobox>div chef-select{grid-column-start:1;border-bottom-right-radius:0;border-top-right-radius:0;border-right-color:transparent;background-color:var(--chef-lightest-grey)}chef-combobox>div chef-input{grid-column-start:2}chef-combobox>div>*{grid-column-start:3}chef-combobox>div chef-input{border-radius:0}chef-combobox>div chef-input:first-of-type{border-radius:var(--chef-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}chef-combobox>div chef-input:first-of-type:last-of-type{border-radius:var(--chef-border-radius);border-top-left-radius:0;border-bottom-left-radius:0}chef-combobox>div chef-input~chef-input{border-top-color:transparent}chef-combobox>div chef-input:last-of-type{border-radius:var(--chef-border-radius);border-top-left-radius:0;border-top-right-radius:0}"; }
}

exports.chef_combobox = ChefCombobox;
