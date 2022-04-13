/**
 * @description
 * The `<chef-progress-bar>` atom is used to display progress status information.
 *
 * @example
 * <chef-progress-bar value="10"></chef-progress-bar>
 * <chef-progress-bar value="50"></chef-progress-bar>
 * <chef-progress-bar value="90"></chef-progress-bar>
 *
 * @example
 * <chef-progress-bar value="0.1" value-min="0" value-max="1"></chef-progress-bar>
 * <chef-progress-bar value="0.5" value-min="0" value-max="1"></chef-progress-bar>
 * <chef-progress-bar value="0.9" value-min="0" value-max="1"></chef-progress-bar>
 *
 * @example
 * <chef-progress-bar value="10" prefix-text="10%"></chef-progress-bar>
 * <chef-progress-bar value="50" prefix-text="50%"></chef-progress-bar>
 * <chef-progress-bar value="90" prefix-text="90%"></chef-progress-bar>
 *
 * @example
 * <chef-progress-bar value="10" suffix-text="10%"></chef-progress-bar>
 * <chef-progress-bar value="50" suffix-text="50%"></chef-progress-bar>
 * <chef-progress-bar value="90" suffix-text="90%"></chef-progress-bar>
 *
 * @example
 * <chef-progress-bar value="10" prefix-text="10% Complete" suffix-text="90% Remaining"></chef-progress-bar>
 * <chef-progress-bar value="50" prefix-text="50% Complete" suffix-text="50% Remaining"></chef-progress-bar>
 * <chef-progress-bar value="90" prefix-text="90% Complete" suffix-text="10% Remaining"></chef-progress-bar>
 *
 * @example
 * <chef-progress-bar value="10" prefix-text="10% complete" suffix-text="01:00:00 until finished"></chef-progress-bar>
 * <chef-progress-bar value="50" prefix-text="50% complete" suffix-text="00:30:00 until finished"></chef-progress-bar>
 * <chef-progress-bar value="90" prefix-text="90% complete" suffix-text="00:01:00 until finished"></chef-progress-bar>
 *
 * @example
 * <chef-progress-bar value="0" value-max="150" prefix-text="Upload starting" suffix-text="0 of 150 uploaded"></chef-progress-bar>
 * <chef-progress-bar value="75" value-max="150" prefix-text="Upload in progress" suffix-text="75 of 150 uploaded"></chef-progress-bar>
 * <chef-progress-bar value="150" value-max="150"  prefix-text="Upload completed" suffix-text="150 of 150 uploaded"></chef-progress-bar>
 */
export declare class ChefProgressBar {
    /**
     * The current progress value.
     */
    value: number;
    /**
     * The minimum progress value.
     */
    valueMin: number;
    /**
     * The maximum progress value.
     */
    valueMax: number;
    /**
     * Optional text to display at the start of the progress bar.
     */
    prefixText: string;
    /**
     * Optional text to display at the end of the progress bar.
     */
    suffixText: string;
    readonly hasProgressText: boolean;
    readonly ariaValueText: string;
    readonly ariaValueNow: string;
    readonly ariaValueMin: string;
    readonly ariaValueMax: string;
    render(): any;
}
