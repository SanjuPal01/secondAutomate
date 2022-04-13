import { Host, h } from "@stencil/core";
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
export class ChefOption {
    constructor() {
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
        return (h(Host, { role: "option", id: this.optionId, class: this.selected ? 'selected' : '' },
            h("style", null, `
            [selected=${this.optionId}] [${this.optionId}],
            [highlighted=${this.optionId}] #${this.optionId} {
              background-color: var(--chef-primary-bright);
              color: var(--chef-white);
            }
          `),
            h("span", { class: "option-content" },
                h("slot", null))));
    }
    static get is() { return "chef-option"; }
    static get properties() { return {
        "value": {
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
                "text": "The value that will be returned when the option is selected."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "''"
        },
        "selected": {
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
                "text": "Specifies whether or not this option is selected."
            },
            "attribute": "selected",
            "reflect": false,
            "defaultValue": "false"
        },
        "optionId": {
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
                "text": "Used to identify different options.\nThis is set automatically so you shouldn't have to change it."
            },
            "attribute": "option-id",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "getContent": {
            "complexType": {
                "signature": "() => Promise<string>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<string>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "getWidth": {
            "complexType": {
                "signature": "() => Promise<number>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<number>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
