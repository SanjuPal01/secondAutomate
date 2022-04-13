export interface ChefOption extends HTMLElement {
    value: string;
    (getId: any): string;
    (getContents: any): string;
    (getValue: any): string;
}
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
export declare class ChefOption {
    /**
     * The value that will be returned when the option is selected.
     */
    value: string;
    /**
     * Specifies whether or not this option is selected.
     */
    selected: boolean;
    /**
     * Used to identify different options.
     * This is set automatically so you shouldn't have to change it.
     */
    optionId: string;
    el: HTMLElement;
    private width;
    constructor();
    getContent(): Promise<string>;
    getWidth(): Promise<number>;
    componentWillLoad(): void;
    render(): any;
}
