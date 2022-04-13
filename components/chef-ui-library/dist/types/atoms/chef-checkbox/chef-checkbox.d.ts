import { EventEmitter } from '../../stencil.core';
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
export declare class ChefCheckbox {
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
    change: EventEmitter;
    handleKeydown(event: KeyboardEvent): void;
    handleToggle(event: any): void;
    labelId: string;
    labelled: boolean;
    labelEl: HTMLElement;
    componentWillLoad(): void;
    componentDidRender(): void;
    toggle(): void;
    render(): any;
}
