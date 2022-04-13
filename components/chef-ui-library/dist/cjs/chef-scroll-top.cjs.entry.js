'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-4c3d2c6d.js');

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
class ChefScrollTop {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("chef-scrollfader", null, __chunk_1.h("chef-button", { class: "chef-scroll-button", onClick: () => this.scrollToTop(), primary: true }, __chunk_1.h("chef-icon", null, "arrow_upward"), __chunk_1.h("span", { class: "visually-hidden" }, "Scroll to Top"))));
    }
    scrollToTop() {
        scrollTo(document.documentElement, 0, 1000);
        function scrollTo(element, to, duration) {
            if (duration < 0)
                return;
            // Calculates the difference between the current scroll point and the top of the document
            const difference = to - element.scrollTop;
            // Calculates how much the window should move
            const perTick = difference / duration * 10;
            // This fires every 10 milliseconds to move the window
            setTimeout(() => {
                element.scrollTop = element.scrollTop + perTick;
                scrollTo(element, 0, duration - 10);
            }, 10);
        }
    }
    get el() { return __chunk_1.getElement(this); }
    static get style() { return "chef-scroll-top .sentinel{position:absolute;top:100vh}chef-scroll-top .chef-scroll-button{position:fixed;bottom:25px;right:25px;width:40px;height:40px;border-radius:50%}chef-scroll-top .chef-scroll-button chef-icon:first-child{margin:0}"; }
}

exports.chef_scroll_top = ChefScrollTop;
