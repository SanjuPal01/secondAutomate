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
import { r as registerInstance, d as createEvent, h, H as Host } from './chunk-efdec40a.js';
/**
 * @description
 * The `<chef-sort-toggle>` atom is used to display a sort button.
 *
 * @example
 * <chef-sort-toggle order='none'></chef-sort-toggle>
 * <chef-sort-toggle order='asc'></chef-sort-toggle>
 * <chef-sort-toggle order='desc'></chef-sort-toggle>
 * <chef-sort-toggle></chef-sort-toggle>
 *
 * @example
 * <chef-table class='table'>
 *   <chef-tr>
 *     <chef-th>
 *       Name
 *       <chef-sort-toggle sort="name"></chef-sort-toggle>
 *     </chef-th>
 *     <chef-th>
 *       Date Created
 *       <chef-sort-toggle sort="date" order='asc'></chef-sort-toggle>
 *     </chef-th>
 *     <chef-th>
 *       Status
 *       <chef-sort-toggle sort="status" order='desc'></chef-sort-toggle>
 *     </chef-th>
 *   </chef-tr>
 * </chef-table>
 * <chef-snippet class='snippet' lang='js'></chef-snippet>
 *
 * <style>
 *   .table { margin: 1em; }
 * </style>
 *
 * <script>
 *   const table = document.querySelector('.table');
 *   const snippet = document.querySelector('.snippet');
 *   table.addEventListener('sort-toggled', event => {
 *     snippet.code = JSON.stringify(event.detail, null, 2);
 *   });
 * </script>
 */
var ChefSortToggle = /** @class */ (function () {
    function ChefSortToggle(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Indicates whether sort button is displayed as `asc` ↑, `desc` ↓, or `none` ↕.
         */
        this.order = 'none';
        /**
         * Optionally assign a column sort name.
         */
        this.sort = '';
        this.sortToggled = createEvent(this, "sort-toggled", 7);
    }
    /**
     * Toggles order `prop` between `asc` ↑, `desc` ↓, or `none` ↕.
     */
    ChefSortToggle.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (this.order) {
                    case 'none':
                        this.order = 'asc';
                        break;
                    case 'asc':
                        this.order = 'desc';
                        break;
                    case 'desc':
                    default:
                        this.order = 'none';
                }
                this.sortToggled.emit({
                    order: this.order,
                    sort: this.sort
                });
                return [2 /*return*/];
            });
        });
    };
    ChefSortToggle.prototype.render = function () {
        return (h(Host, { role: "button" }, h("chef-button", { tertiary: true, onClick: this.onClick.bind(this) }, h("chef-icon", { class: "asc-icon" }, "arrow_drop_up"), h("chef-icon", { class: "desc-icon" }, "arrow_drop_down"))));
    };
    ChefSortToggle.prototype.onClick = function () {
        this.toggle();
    };
    Object.defineProperty(ChefSortToggle, "style", {
        get: function () { return "chef-sort-toggle{display:inline-block}chef-sort-toggle chef-button{margin:0}chef-sort-toggle chef-button button{padding:0;height:32px;-ms-flex-direction:column;flex-direction:column}chef-sort-toggle chef-button .asc-icon{-webkit-transform:translateY(4px);transform:translateY(4px)}chef-sort-toggle chef-button .desc-icon{-webkit-transform:translateY(-4px);transform:translateY(-4px)}chef-sort-toggle chef-button .asc-icon:first-child,chef-sort-toggle chef-button .asc-icon:last-child,chef-sort-toggle chef-button .desc-icon:first-child,chef-sort-toggle chef-button .desc-icon:last-child{margin:0;font-size:18px;line-height:1;-webkit-transition:opacity .4s;transition:opacity .4s}chef-sort-toggle[order=asc] .desc-icon,chef-sort-toggle[order=desc] .asc-icon{opacity:0}"; },
        enumerable: true,
        configurable: true
    });
    return ChefSortToggle;
}());
export { ChefSortToggle as chef_sort_toggle };
