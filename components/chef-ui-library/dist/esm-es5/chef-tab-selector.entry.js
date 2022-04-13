import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import './chunk-464ede08.js';
import { f as find } from './chunk-7cba3003.js';
/**
 * @description
 * A selection of tabs. Uses the chef-option atom to define its different states.
 *
 * @example
 * <chef-tab-selector>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <chef-tab-selector value='opt2'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <chef-tab-selector>
 *   <chef-option value='opt1'><chef-icon>thumb_up</chef-icon></chef-option>
 *   <chef-option value='opt2'><chef-icon>thumb_down</chef-icon></chef-option>
 * </chef-tab-selector>
 *
 * @example
 * <script>
 *   const toggle = document.querySelector('#ex1toggle');
 *   toggle.addEventListener('change', (event) => alert(event.target.value));
 * </script>
 *
 * <chef-tab-selector id='ex1toggle'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-tab-selector>
 */
var ChefTabSelector = /** @class */ (function () {
    function ChefTabSelector(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The value of the currently selected tab.
         */
        this.value = '';
        this.change = createEvent(this, "change", 7);
        this.input = createEvent(this, "input", 7);
    }
    ChefTabSelector.prototype.handleClick = function (event) {
        var option = event.target.closest('chef-option');
        if (option) {
            this.value = option.value;
            this.change.emit();
            this.input.emit();
        }
    };
    ChefTabSelector.prototype.componentDidLoad = function () {
        var options = this.clearOptions();
        this.selected = find(['value', this.value], options);
        if (!this.selected) {
            this.selected = this.el.querySelector('chef-option[selected]') || options[0];
            this.value = this.selected.value;
        }
        this.selected.selected = true;
    };
    ChefTabSelector.prototype.componentDidUpdate = function () {
        this.clearOptions();
        this.selected = this.el.querySelector("chef-option[value='" + this.value + "']");
        this.selected.selected = true;
    };
    ChefTabSelector.prototype.render = function () {
        return (h("slot", null));
    };
    ChefTabSelector.prototype.clearOptions = function () {
        var options = Array.from(this.el.querySelectorAll('chef-option'));
        options.forEach(function (opt) { return opt.selected = false; });
        return options;
    };
    Object.defineProperty(ChefTabSelector.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefTabSelector, "style", {
        get: function () { return "chef-tab-selector chef-option{position:relative;display:inline-block;color:var(--chef-primary-dark);font-size:16px;line-height:32px;min-width:72px;padding:8px 16px;cursor:pointer;background:transparent}chef-tab-selector chef-option:before{display:block;content:\"\";position:absolute;bottom:-2px;height:2px;left:0;width:100%;background:transparent}chef-tab-selector chef-option.selected:before{background:var(--chef-primary-bright)}chef-tab-selector chef-option:focus,chef-tab-selector chef-option:hover{background:#00f;background:var(--chef-lightest-grey)}chef-tab-selector chef-option:active{background:var(--chef-light-grey)}"; },
        enumerable: true,
        configurable: true
    });
    return ChefTabSelector;
}());
export { ChefTabSelector as chef_tab_selector };
