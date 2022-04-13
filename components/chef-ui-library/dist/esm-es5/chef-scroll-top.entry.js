import { r as registerInstance, h, c as getElement } from './chunk-efdec40a.js';
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
var ChefScrollTop = /** @class */ (function () {
    function ChefScrollTop(hostRef) {
        registerInstance(this, hostRef);
    }
    ChefScrollTop.prototype.render = function () {
        var _this = this;
        return (h("chef-scrollfader", null, h("chef-button", { class: "chef-scroll-button", onClick: function () { return _this.scrollToTop(); }, primary: true }, h("chef-icon", null, "arrow_upward"), h("span", { class: "visually-hidden" }, "Scroll to Top"))));
    };
    ChefScrollTop.prototype.scrollToTop = function () {
        scrollTo(document.documentElement, 0, 1000);
        function scrollTo(element, to, duration) {
            if (duration < 0)
                return;
            // Calculates the difference between the current scroll point and the top of the document
            var difference = to - element.scrollTop;
            // Calculates how much the window should move
            var perTick = difference / duration * 10;
            // This fires every 10 milliseconds to move the window
            setTimeout(function () {
                element.scrollTop = element.scrollTop + perTick;
                scrollTo(element, 0, duration - 10);
            }, 10);
        }
    };
    Object.defineProperty(ChefScrollTop.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefScrollTop, "style", {
        get: function () { return "chef-scroll-top .sentinel{position:absolute;top:100vh}chef-scroll-top .chef-scroll-button{position:fixed;bottom:25px;right:25px;width:40px;height:40px;border-radius:50%}chef-scroll-top .chef-scroll-button chef-icon:first-child{margin:0}"; },
        enumerable: true,
        configurable: true
    });
    return ChefScrollTop;
}());
export { ChefScrollTop as chef_scroll_top };
