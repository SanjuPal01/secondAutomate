'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
class ChefCheckbox {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.labelId = '';
        this.labelled = false;
        this.change = __chunk_1.createEvent(this, "change", 7);
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
        return (__chunk_1.h(__chunk_1.Host, { role: "checkbox", tabindex: this.disabled ? '-1' : '0', "aria-checked": this.checked ? 'true' : this.indeterminate ? 'mixed' : 'false', "aria-disabled": this.disabled ? 'true' : null, "aria-labelledby": this.labelled ? this.labelId : null }, __chunk_1.h("div", { class: "check-wrap" }, __chunk_1.h("chef-icon", null, checkIcon)), __chunk_1.h("div", { class: "label-wrap", id: this.labelId, ref: labelRef }, __chunk_1.h("slot", null))));
    }
    static get style() { return "chef-checkbox{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}chef-checkbox,chef-checkbox .check-wrap{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}chef-checkbox .check-wrap{width:20px;min-width:20px;height:20px;border:2px solid;border-radius:var(--chef-border-radius);color:var(--chef-white);-ms-flex-pack:center;justify-content:center}chef-checkbox .check-wrap chef-icon{color:var(--chef-white)}chef-checkbox .label-wrap{display:none;margin-left:14px;font-size:14px;color:var(--chef-primary-dark)}chef-checkbox[aria-labelledby] .label-wrap{display:block}chef-checkbox[aria-checked=true] .check-wrap{border-color:var(--chef-primary-bright);background-color:var(--chef-primary-bright)}chef-checkbox[aria-checked=false] .check-wrap{border-color:var(--chef-dark-grey);background-color:var(--chef-white)}chef-checkbox[aria-checked=mixed] .check-wrap{border-color:var(--chef-primary-bright);background-color:var(--chef-primary-bright)}chef-checkbox[aria-disabled]{border:var(--chef-grey);opacity:.5;cursor:default;pointer-events:none}"; }
}

exports.chef_checkbox = ChefCheckbox;
