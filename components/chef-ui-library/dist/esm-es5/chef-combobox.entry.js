import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-efdec40a.js';
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
var ChefCombobox = /** @class */ (function () {
    function ChefCombobox(hostRef) {
        registerInstance(this, hostRef);
        this.change = createEvent(this, "change", 7);
    }
    ChefCombobox.prototype.componentDidLoad = function () {
        this.wrapButtons();
    };
    ChefCombobox.prototype.componentDidUpdate = function () {
        this.wrapButtons();
    };
    ChefCombobox.prototype.render = function () {
        return (h("div", null, h("slot", null)));
    };
    ChefCombobox.prototype.wrapButtons = function () {
        var buttons = Array.from(this.el.querySelectorAll('chef-combobox>div>chef-button'));
        buttons.forEach(function (elem) {
            var parent = elem.parentNode;
            var b = parent.removeChild(elem);
            var div = document.createElement('div');
            div.appendChild(b);
            parent.appendChild(div);
        });
    };
    Object.defineProperty(ChefCombobox.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefCombobox, "style", {
        get: function () { return "chef-combobox{display:inline-block}chef-combobox>div{display:grid;grid-template-columns:auto 5fr;grid-auto-flow:column;-ms-flex-pack:start;justify-content:start}chef-combobox>div chef-select{grid-column-start:1;border-bottom-right-radius:0;border-top-right-radius:0;border-right-color:transparent;background-color:var(--chef-lightest-grey)}chef-combobox>div chef-input{grid-column-start:2}chef-combobox>div>*{grid-column-start:3}chef-combobox>div chef-input{border-radius:0}chef-combobox>div chef-input:first-of-type{border-radius:var(--chef-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}chef-combobox>div chef-input:first-of-type:last-of-type{border-radius:var(--chef-border-radius);border-top-left-radius:0;border-bottom-left-radius:0}chef-combobox>div chef-input~chef-input{border-top-color:transparent}chef-combobox>div chef-input:last-of-type{border-radius:var(--chef-border-radius);border-top-left-radius:0;border-top-right-radius:0}"; },
        enumerable: true,
        configurable: true
    });
    return ChefCombobox;
}());
export { ChefCombobox as chef_combobox };
