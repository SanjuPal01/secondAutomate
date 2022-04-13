/**
 * @description
 * Button that scrolls the user to the top of the page. The button is positioned
 * to be displayed after the user scrolls the equivalent of one viewport height.
 *
 * @example
 * <div style="height: 3000px">
 *  Scroll to see the button and try it out!
 *  <chef-scroll-top></chef-scroll-top>
 * </div>
 */
export declare class ChefScrollTop {
    el: HTMLElement;
    render(): any;
    private scrollToTop;
}
