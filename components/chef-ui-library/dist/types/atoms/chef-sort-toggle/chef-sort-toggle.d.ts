import { EventEmitter } from '../../stencil.core';
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
export declare class ChefSortToggle {
    /**
     * Indicates whether sort button is displayed as `asc` ↑, `desc` ↓, or `none` ↕.
     */
    order: 'asc' | 'desc' | 'none';
    /**
     * Optionally assign a column sort name.
     */
    sort: string;
    /**
     * `sort-toggled` event is emitted whenever the `order` prop is changed.
     *
     * Detail: `{ order: 'asc' | 'desc' | 'none', sort: string }`
     */
    sortToggled: EventEmitter;
    /**
     * Toggles order `prop` between `asc` ↑, `desc` ↓, or `none` ↕.
     */
    toggle(): Promise<void>;
    render(): any;
    private onClick;
}
