/**
 * @description
 * The `<chef-clipboard>` atom is used to copy content into the user's clipboard.
 *
 * @example
 * <chef-input id="input" value="text to copy"></chef-input>
 * <chef-clipboard id="clipboard" value="text to copy"></chef-clipboard>
 * <script>
 *   const input = document.getElementById('input');
 *   const clipboard = document.getElementById('clipboard');
 *   input.addEventListener('input', e => clipboard.value = e.target.value);
 * </script>
 *
 * @example
 * <chef-table>
 *   <chef-tr>
 *     <chef-td>
 *       <chef-clipboard value="Linux Baseline"></chef-clipboard> Linux Baseline
 *     </chef-td>
 *     <chef-td>
 *       <chef-clipboard value="owner/linux-baseline"></chef-clipboard> owner/linux-baseline
 *     </chef-td>
 *     <chef-td>
 *       <chef-clipboard value="Linux Baseline" label="With Label and Icon"></chef-clipboard>
 *     </chef-td>
 *     <chef-td>
 *       <chef-clipboard value="owner/linux-baseline" label="Without Icon" icon=""></chef-clipboard>
 *     </chef-td>
 *   </chef-tr>
 * </chef-table>
 */
export declare class ChefClipboard {
    /**
     * The text to be copied to the clipboard.
     */
    value: string;
    /**
     * An optional icon that is displayed by default. To suppress the icon pass in the empty string.
     */
    icon: string;
    /**
     * An optional label that is empty by default. When present, it appears to the right of the icon (if the icon is present).
     */
    label: string;
    /**
     * An optional attribute that creates a plain div instead of a chef-button as the carrier when set to true.
     */
    plain: boolean;
    tooltipText: string;
    handleClick(): void;
    copy(value: string): Promise<boolean>;
    readonly buttonProps: {
        tertiary: boolean;
        primary?: undefined;
    } | {
        primary: boolean;
        tertiary?: undefined;
    };
    render(): any[];
}
