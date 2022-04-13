import { r as registerInstance, d as createEvent, h, H as Host } from './chunk-efdec40a.js';

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
class ChefSortToggle {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Indicates whether sort button is displayed as `asc` ↑, `desc` ↓, or `none` ↕.
         */
        this.order = 'none';
        /**
         * Optionally assign a column sort name.
         */
        this.sort = '';
        this.sortToggled = createEvent(this, "sort-toggled", 7);
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
        return (h(Host, { role: "button" }, h("chef-button", { tertiary: true, onClick: this.onClick.bind(this) }, h("chef-icon", { class: "asc-icon" }, "arrow_drop_up"), h("chef-icon", { class: "desc-icon" }, "arrow_drop_down"))));
    }
    onClick() {
        this.toggle();
    }
    static get style() { return "chef-sort-toggle{display:inline-block}chef-sort-toggle chef-button{margin:0}chef-sort-toggle chef-button button{padding:0;height:32px;-ms-flex-direction:column;flex-direction:column}chef-sort-toggle chef-button .asc-icon{-webkit-transform:translateY(4px);transform:translateY(4px)}chef-sort-toggle chef-button .desc-icon{-webkit-transform:translateY(-4px);transform:translateY(-4px)}chef-sort-toggle chef-button .asc-icon:first-child,chef-sort-toggle chef-button .asc-icon:last-child,chef-sort-toggle chef-button .desc-icon:first-child,chef-sort-toggle chef-button .desc-icon:last-child{margin:0;font-size:18px;line-height:1;-webkit-transition:opacity .4s;transition:opacity .4s}chef-sort-toggle[order=asc] .desc-icon,chef-sort-toggle[order=desc] .asc-icon{opacity:0}"; }
}

export { ChefSortToggle as chef_sort_toggle };
