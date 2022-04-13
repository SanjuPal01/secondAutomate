import { EventEmitter } from '../../stencil.core';
/**
 * @description
 * Template to wrap content in chef styled "page". Provides a slot for page content.
 *
 * Events: confirm, cancel and secondaryConfirm
 *
 * @example
 * <chef-page
 *  class="example-page-width"
 *  heading="Add Members to Administrator"
 *  subheading="Automate only displays local users and local teams. For other types of members add a member expression."
 *  secondary-btn-text="Add Member Expression"
 *  secondary-btn-show="true"
 *  confirm-btn-text="Add Member"
 *  disable-confirm="true"
 *  cancel-btn-text="Cancel"
 * >
 *  <chef-table>
 *    <chef-thead>
 *       <chef-tr>
 *         <chef-th class="checkbox-row"></chef-th>
 *         <chef-th>ID</chef-th>
 *         <chef-th>Type</chef-th>
 *       </chef-tr>
 *    </chef-thead>
 *    <chef-tbody>
 *      <chef-tr>
 *        <chef-td>
 *         <chef-checkbox></chef-checkbox>
 *        </chef-td>
 *        <chef-td>1</chef-td>
 *        <chef-td>apple</chef-td>
 *      </chef-tr>
 *    </chef-tbody>
 *  </chef-table>
 * </chef-page>
 */
export declare class ChefPage {
    /**
     * Text for page heading
     */
    heading: string;
    /**
     * Text for page subheading
     */
    subheading: string;
    /**
     * Text for error message
     */
    errorMessage: string;
    /**
     * Text for secondary button
     */
    secondaryBtnText: string;
    /**
     * Show secondary button
     */
    secondaryBtnShow: boolean;
    /**
     * Text for confirm button
     */
    confirmBtnText: string;
    /**
     * Text for cancel button
     */
    cancelBtnText: string;
    /**
     * Indicate confirm is loading
     */
    confirmLoading: boolean;
    /**
     * Indicate page is loading
     */
    pageLoading: boolean;
    /**
     * Disable confirm buttom
     */
    disableConfirm: boolean;
    secondaryConfirm: EventEmitter;
    confirm: EventEmitter;
    close: EventEmitter;
    render(): any[];
    private getLoading;
    private handleSecondaryConfirm;
    private handleConfirm;
    private handleClose;
}
