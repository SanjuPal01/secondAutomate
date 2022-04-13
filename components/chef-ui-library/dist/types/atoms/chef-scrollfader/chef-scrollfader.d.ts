/**
 * @description
 * Scrollfader behavior. The element contained within the scrollfader will remain invisible until the page is scrolled to the scrollfader. The element will then fade in. This is generally used for elements that will have a fixed position on the page, otherwise they would never be visible.
 *
 * Note: IE11 Support is dependent on a polyfill.
 *
 * @example
 * <div style='height: 2000px'>
 *   <h1>Scroll to see the scrollfader in action</h1>
 *   <chef-scrollfader>
 *     <h2 style='position: fixed;'>I should fade in when the document is scrolled</h2>
 *   </chef-scrollfader>
 * </div>
 */
export declare class ChefScrollfader {
    el: HTMLElement;
    render(): any[];
    componentDidLoad(): void;
}
