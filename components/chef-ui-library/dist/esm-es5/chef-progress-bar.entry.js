import { r as registerInstance, h, H as Host } from './chunk-efdec40a.js';
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
var ChefProgressBar = /** @class */ (function () {
    function ChefProgressBar(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The current progress value.
         */
        this.value = 0;
        /**
         * The minimum progress value.
         */
        this.valueMin = 0;
        /**
         * The maximum progress value.
         */
        this.valueMax = 100;
        /**
         * Optional text to display at the start of the progress bar.
         */
        this.prefixText = '';
        /**
         * Optional text to display at the end of the progress bar.
         */
        this.suffixText = '';
    }
    Object.defineProperty(ChefProgressBar.prototype, "hasProgressText", {
        get: function () {
            return this.prefixText.length > 0 || this.suffixText.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefProgressBar.prototype, "ariaValueText", {
        get: function () {
            return this.hasProgressText ? [this.prefixText, this.suffixText].join(' ').trim() : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefProgressBar.prototype, "ariaValueNow", {
        get: function () {
            return "" + this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefProgressBar.prototype, "ariaValueMin", {
        get: function () {
            return "" + this.valueMin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefProgressBar.prototype, "ariaValueMax", {
        get: function () {
            return "" + this.valueMax;
        },
        enumerable: true,
        configurable: true
    });
    ChefProgressBar.prototype.render = function () {
        var progressText = this.hasProgressText ? (h("div", { class: "progress-text", "aria-hidden": true }, h("div", { class: "prefix" }, this.prefixText), h("div", { class: "suffix" }, this.suffixText))) : null;
        var valueStyle = { width: (this.value / (this.valueMax - this.valueMin)) * 100 + "%" };
        var progressBars = (h("div", { class: "progress-bars", "aria-hidden": true }, h("div", { class: "bar total" }), h("div", { class: "bar value", style: valueStyle })));
        return (h(Host, { role: "progressbar", "aria-valuenow": this.ariaValueNow, "aria-valuemin": this.ariaValueMin, "aria-valuemax": this.ariaValueMax, "aria-valuetext": this.ariaValueText }, progressText, progressBars));
    };
    Object.defineProperty(ChefProgressBar, "style", {
        get: function () { return "chef-progress-bar{display:block;margin:1em 0}chef-progress-bar .progress-text{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-size:13px;margin-bottom:6px}chef-progress-bar .progress-bars{position:relative;height:6px}chef-progress-bar .progress-bars .bar{position:absolute;bottom:0;left:0;height:100%;border-radius:var(--chef-border-radius)}chef-progress-bar .progress-bars .bar.value{background:#9cb2f9}chef-progress-bar .progress-bars .bar.total{background:#dee5fd;width:100%}"; },
        enumerable: true,
        configurable: true
    });
    return ChefProgressBar;
}());
export { ChefProgressBar as chef_progress_bar };
