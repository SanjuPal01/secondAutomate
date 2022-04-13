var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h } from './chunk-efdec40a.js';
var preClickText = 'Copy to clipboard';
var postClickText = 'Copied!';
var postClickTime = 1500;
var id = 0;
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
var ChefClipboard = /** @class */ (function () {
    function ChefClipboard(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The text to be copied to the clipboard.
         */
        this.value = '';
        /**
         * An optional icon that is displayed by default. To suppress the icon pass in the empty string.
         */
        this.icon = 'content_copy';
        /**
         * An optional label that is empty by default. When present, it appears to the right of the icon (if the icon is present).
         */
        this.label = '';
        /**
         * An optional attribute that creates a plain div instead of a chef-button as the carrier when set to true.
         */
        this.plain = false;
        this.tooltipText = preClickText;
    }
    ChefClipboard.prototype.handleClick = function () {
        var _this = this;
        // Without the setTimeout wrapper on `copy` a parent DOM element may not respond
        // properly to events. Specifically, selecting "Copy Token" inside a `<chef-control-menu>`
        // caused the `<chef-control-menu>` not to close.
        setTimeout(function () { return _this.copy(_this.value); }, 0);
        // This duplicate, immediate call is *also* necessary--without it the same "Copy Token" action
        // fails in Firefox: the clipboard never receives the copied text.
        this.copy(this.value);
        this.tooltipText = postClickText;
        setTimeout(function () { return _this.tooltipText = preClickText; }, postClickTime);
    };
    ChefClipboard.prototype.copy = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var el, copied;
            return __generator(this, function (_a) {
                el = document.createElement('textarea');
                el.value = value;
                el.style.position = 'absolute';
                el.style.left = '-9999px';
                document.body.appendChild(el);
                // copy
                el.select();
                copied = document.execCommand('copy');
                // cleanup
                document.body.removeChild(el);
                return [2 /*return*/, Promise.resolve(copied)];
            });
        });
    };
    Object.defineProperty(ChefClipboard.prototype, "buttonProps", {
        get: function () {
            return this.icon ? {
                tertiary: true
            } : {
                primary: true
            };
        },
        enumerable: true,
        configurable: true
    });
    ChefClipboard.prototype.render = function () {
        var buttonId = "clipboard-btn-" + ++id;
        return (this.plain ?
            [
                h("div", Object.assign({ id: buttonId }, this.buttonProps), this.icon ? h("chef-icon", null, this.icon) : '', this.label ? h("span", { class: "clipboard-label" }, this.label) : '')
            ] :
            [
                h("chef-button", Object.assign({ id: buttonId }, this.buttonProps), this.icon ? h("chef-icon", null, this.icon) : '', this.label ? h("span", { class: "clipboard-label" }, this.label) : ''),
                h("chef-tooltip", { for: buttonId }, this.tooltipText)
            ]);
    };
    return ChefClipboard;
}());
export { ChefClipboard as chef_clipboard };
