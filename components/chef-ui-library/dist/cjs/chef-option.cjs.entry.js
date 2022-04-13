'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

let id = 0;
/**
 * @description
 * The `<chef-option>` atom is used to specify options for the [`<chef-select>`](/molecules/chef-select),
 * [`<chef-toggle>`](/molecules/chef-toggle), [`<chef-radio>`](/molecules/chef-radio), and
 * [`<chef-phat-radio>`](/molecules/chef-phat-radio) molecules.
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
 *     <chef-option value='opt1' icon='assignment_ind'>Option 1</chef-option>
 *     <chef-option value='opt2' icon='chrome_reader_mode'>Option 2</chef-option>
 *     <chef-option value='opt3' icon='business_center'>Option 3</chef-option>
 *   </chef-select>
 * </div>
 *
 * @example
 * <chef-toggle>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-toggle>
 *
 * @example
 * <chef-toggle value='opt2'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-toggle>
 *
 * @example
 * <chef-toggle>
 *   <chef-option value='opt1'><chef-icon>thumb_up</chef-icon></chef-option>
 *   <chef-option value='opt2'><chef-icon>thumb_down</chef-icon></chef-option>
 * </chef-toggle>
 *
 * @example
 * <script>
 *   const toggle = document.querySelector('#ex1toggle');
 *   toggle.addEventListener('toggle', (event) => alert(event.target.value));
 * </script>
 *
 * <chef-toggle id='ex1toggle'>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-toggle>
 *
 * @example
 * <chef-radio>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-radio>
 *
 * @example
 * <chef-phat-radio>
 *   <chef-option value='opt1'>Option 1</chef-option>
 *   <chef-option value='opt2'>Option 2</chef-option>
 *   <chef-option value='opt3'>Option 3</chef-option>
 * </chef-phat-radio>
 */
class ChefOption {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * The value that will be returned when the option is selected.
         */
        this.value = '';
        /**
         * Specifies whether or not this option is selected.
         */
        this.selected = false;
        this.width = 0;
        id = id + 1;
        this.optionId = this.optionId || `chef-option${id}`;
    }
    async getContent() {
        return Promise.resolve(this.el.querySelector('.option-content').innerHTML);
    }
    async getWidth() {
        return Promise.resolve(this.width);
    }
    componentWillLoad() {
        this.width = this.el.scrollWidth;
    }
    render() {
        return (__chunk_1.h(__chunk_1.Host, { role: "option", id: this.optionId, class: this.selected ? 'selected' : '' }, __chunk_1.h("style", null, `
            [selected=${this.optionId}] [${this.optionId}],
            [highlighted=${this.optionId}] #${this.optionId} {
              background-color: var(--chef-primary-bright);
              color: var(--chef-white);
            }
          `), __chunk_1.h("span", { class: "option-content" }, __chunk_1.h("slot", null))));
    }
    get el() { return __chunk_1.getElement(this); }
}

exports.chef_option = ChefOption;
