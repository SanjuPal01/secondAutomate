import { Host, h } from "@stencil/core";
/**
 * @description
 * The `<chef-sort-toggle>` atom is used to display a sort button.
 *
 * @example
 * <chef-sort-toggle order='none'></chef-sort-toggle>
 * <chef-sort-toggle order='asc'></chef-sort-toggle>
 * <chef-sort-toggle order='desc'></chef-sort-toggle>
 * <chef-sort-toggle></chef-sort-toggle>
 *
 * @example
 * <chef-table class='table'>
 *   <chef-tr>
 *     <chef-th>
 *       Name
 *       <chef-sort-toggle sort="name"></chef-sort-toggle>
 *     </chef-th>
 *     <chef-th>
 *       Date Created
 *       <chef-sort-toggle sort="date" order='asc'></chef-sort-toggle>
 *     </chef-th>
 *     <chef-th>
 *       Status
 *       <chef-sort-toggle sort="status" order='desc'></chef-sort-toggle>
 *     </chef-th>
 *   </chef-tr>
 * </chef-table>
 * <chef-snippet class='snippet' lang='js'></chef-snippet>
 *
 * <style>
 *   .table { margin: 1em; }
 * </style>
 *
 * <script>
 *   const table = document.querySelector('.table');
 *   const snippet = document.querySelector('.snippet');
 *   table.addEventListener('sort-toggled', event => {
 *     snippet.code = JSON.stringify(event.detail, null, 2);
 *   });
 * </script>
 */
export class ChefSortToggle {
    constructor() {
        /**
         * Indicates whether sort button is displayed as `asc` ↑, `desc` ↓, or `none` ↕.
         */
        this.order = 'none';
        /**
         * Optionally assign a column sort name.
         */
        this.sort = '';
    }
    /**
     * Toggles order `prop` between `asc` ↑, `desc` ↓, or `none` ↕.
     */
    async toggle() {
        switch (this.order) {
            case 'none':
                this.order = 'asc';
                break;
            case 'asc':
                this.order = 'desc';
                break;
            case 'desc':
            default:
                this.order = 'none';
        }
        this.sortToggled.emit({
            order: this.order,
            sort: this.sort
        });
    }
    render() {
        return (h(Host, { role: "button" },
            h("chef-button", { tertiary: true, onClick: this.onClick.bind(this) },
                h("chef-icon", { class: "asc-icon" }, "arrow_drop_up"),
                h("chef-icon", { class: "desc-icon" }, "arrow_drop_down"))));
    }
    onClick() {
        this.toggle();
    }
    static get is() { return "chef-sort-toggle"; }
    static get originalStyleUrls() { return {
        "$": ["chef-sort-toggle.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-sort-toggle.css"]
    }; }
    static get properties() { return {
        "order": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "'asc' | 'desc' | 'none'",
                "resolved": "\"asc\" | \"desc\" | \"none\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Indicates whether sort button is displayed as `asc` \u2191, `desc` \u2193, or `none` \u2195."
            },
            "attribute": "order",
            "reflect": true,
            "defaultValue": "'none'"
        },
        "sort": {
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
                "text": "Optionally assign a column sort name."
            },
            "attribute": "sort",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get events() { return [{
            "method": "sortToggled",
            "name": "sort-toggled",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "`sort-toggled` event is emitted whenever the `order` prop is changed.\n\nDetail: `{ order: 'asc' | 'desc' | 'none', sort: string }`"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "toggle": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Toggles order `prop` between `asc` \u2191, `desc` \u2193, or `none` \u2195.",
                "tags": []
            }
        }
    }; }
}
