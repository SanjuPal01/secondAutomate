import { r as registerInstance, d as createEvent, h, H as Host, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import { d as convert, r as require$$1, G as toNumber, N as isSymbol, J as identity } from './chunk-464ede08.js';
import { r as require$$0, f as find } from './chunk-7cba3003.js';
import { g as getOr } from './chunk-f76e3d4b.js';
import { r as require$$1$1 } from './chunk-b19cfb27.js';
import { c as clamp } from './chunk-95d7fd9f.js';

var func = convert('findIndex', require$$0);

func.placeholder = require$$1;
var findIndex = func;

/**
 * Creates a function that performs a relational operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @returns {Function} Returns the new relational operation function.
 */
function createRelationalOperation(operator) {
  return function(value, other) {
    if (!(typeof value == 'string' && typeof other == 'string')) {
      value = toNumber(value);
      other = toNumber(other);
    }
    return operator(value, other);
  };
}

var _createRelationalOperation = createRelationalOperation;

/**
 * Checks if `value` is less than or equal to `other`.
 *
 * @static
 * @memberOf _
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than or equal to
 *  `other`, else `false`.
 * @see _.gte
 * @example
 *
 * _.lte(1, 3);
 * // => true
 *
 * _.lte(3, 3);
 * // => true
 *
 * _.lte(3, 1);
 * // => false
 */
var lte = _createRelationalOperation(function(value, other) {
  return value <= other;
});

var lte_1 = lte;

var func$1 = convert('lte', lte_1);

func$1.placeholder = require$$1;
var lte$1 = func$1;

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

var _baseExtremum = baseExtremum;

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

var _baseGt = baseGt;

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? _baseExtremum(array, identity, _baseGt)
    : undefined;
}

var max_1 = max;

var func$2 = convert('max', max_1, require$$1$1);

func$2.placeholder = require$$1;
var max$1 = func$2;

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
class ChefSelect {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.change = createEvent(this, "change", 7);
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
        const index = this.clamp(find(lte$1(0), defaultIndexes));
        this.value = getOr('', [index, 'value'], this.options);
        this.selectedIndex = index;
        this.focusedIndex = index;
        this.syncOptions(index);
    }
    async componentWillUpdate() {
        const optionWidths = Promise.all(this.options.map((o) => o.getWidth()));
        this.minWidth = max$1(await optionWidths) || 0;
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
        return (h(Host, { role: "combobox", class: classNames, style: styles, tabindex: this.disabled ? '-1' : '0', highlighted: getOr('', 'optionId', focused) }, h("span", { class: "selected-value", role: "button", "aria-haspopup": "listbox", "aria-expanded": this.active }, h("span", { class: "option-content", innerHTML: this.selectedContent }), h("chef-icon", { "aria-hidden": true }, "expand_more")), h("div", { class: "options" }, h("chef-dropdown", { tabindex: "-1", visible: this.active, role: "listbox", "aria-activedescendant": getOr('', 'optionId', focused) }, h("slot", null)))));
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
    get el() { return getElement(this); }
    static get style() { return "chef-select{outline:none;border-radius:var(--chef-border-radius);border-color:var(--chef-grey);display:inline-block;background-color:var(--chef-white);cursor:pointer}chef-select .selected-value{display:block;padding:1em 3.5em 1em 1em;border-radius:inherit;border:1px solid;border-color:inherit;position:relative;-webkit-transition:border-color .5s ease;transition:border-color .5s ease}chef-select .selected-value chef-icon{position:absolute;right:.75em;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:1.25em}chef-select .selected-value:not(.disabled) .selected-value{cursor:pointer}chef-select.focused .selected-value{border-color:var(--chef-primary-bright)}chef-select.active .selected-value{border-bottom-left-radius:0;border-bottom-right-radius:0;z-index:102}chef-select .options{width:100%;position:relative}chef-select chef-dropdown{width:100%;border:1px solid;border-color:var(--chef-primary-bright);border-top:none;border-top-left-radius:0;border-top-right-radius:0;outline:none;z-index:101}chef-select chef-option{display:block;padding:1em 3em 1em 1.5em;border-bottom:1px solid var(--chef-grey);cursor:pointer;color:inherit;position:relative;white-space:nowrap}chef-select chef-option:last-child{border-bottom:0}chef-select chef-option:hover{background-color:var(--chef-lightest-grey);color:var(--chef-primary-bright);outline:none}chef-select chef-option .option-content{overflow:hidden;text-overflow:ellipsis;display:inline-block;width:100%}"; }
}

export { ChefSelect as chef_select };
