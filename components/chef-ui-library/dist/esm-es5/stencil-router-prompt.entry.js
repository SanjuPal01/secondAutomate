import { r as registerInstance, c as getElement } from './chunk-efdec40a.js';
import { A as ActiveRouter } from './chunk-28fcf980.js';
var StencilRouterPrompt = /** @class */ (function () {
    function StencilRouterPrompt(hostRef) {
        registerInstance(this, hostRef);
        this.when = true;
        this.message = '';
    }
    StencilRouterPrompt.prototype.enable = function (message) {
        if (this.unblock) {
            this.unblock();
        }
        if (this.history) {
            this.unblock = this.history.block(message);
        }
    };
    StencilRouterPrompt.prototype.disable = function () {
        if (this.unblock) {
            this.unblock();
            this.unblock = undefined;
        }
    };
    StencilRouterPrompt.prototype.componentWillLoad = function () {
        if (this.when) {
            this.enable(this.message);
        }
    };
    StencilRouterPrompt.prototype.updateMessage = function (newMessage, prevMessage) {
        if (this.when) {
            if (!this.when || prevMessage !== newMessage) {
                this.enable(this.message);
            }
        }
        else {
            this.disable();
        }
    };
    StencilRouterPrompt.prototype.componentDidUnload = function () {
        this.disable();
    };
    StencilRouterPrompt.prototype.render = function () {
        return null;
    };
    Object.defineProperty(StencilRouterPrompt.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StencilRouterPrompt, "watchers", {
        get: function () {
            return {
                "message": ["updateMessage"],
                "when": ["updateMessage"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return StencilRouterPrompt;
}());
ActiveRouter.injectProps(StencilRouterPrompt, [
    'history',
]);
export { StencilRouterPrompt as stencil_router_prompt };
