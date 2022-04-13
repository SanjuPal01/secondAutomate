import { Host, h } from "@stencil/core";
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
export class ChefProgressBar {
    constructor() {
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
    get hasProgressText() {
        return this.prefixText.length > 0 || this.suffixText.length > 0;
    }
    get ariaValueText() {
        return this.hasProgressText ? [this.prefixText, this.suffixText].join(' ').trim() : null;
    }
    get ariaValueNow() {
        return `${this.value}`;
    }
    get ariaValueMin() {
        return `${this.valueMin}`;
    }
    get ariaValueMax() {
        return `${this.valueMax}`;
    }
    render() {
        const progressText = this.hasProgressText ? (h("div", { class: "progress-text", "aria-hidden": true },
            h("div", { class: "prefix" }, this.prefixText),
            h("div", { class: "suffix" }, this.suffixText))) : null;
        const valueStyle = { width: `${(this.value / (this.valueMax - this.valueMin)) * 100}%` };
        const progressBars = (h("div", { class: "progress-bars", "aria-hidden": true },
            h("div", { class: "bar total" }),
            h("div", { class: "bar value", style: valueStyle })));
        return (h(Host, { role: "progressbar", "aria-valuenow": this.ariaValueNow, "aria-valuemin": this.ariaValueMin, "aria-valuemax": this.ariaValueMax, "aria-valuetext": this.ariaValueText },
            progressText,
            progressBars));
    }
    static get is() { return "chef-progress-bar"; }
    static get originalStyleUrls() { return {
        "$": ["chef-progress-bar.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-progress-bar.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The current progress value."
            },
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        },
        "valueMin": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The minimum progress value."
            },
            "attribute": "value-min",
            "reflect": false,
            "defaultValue": "0"
        },
        "valueMax": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The maximum progress value."
            },
            "attribute": "value-max",
            "reflect": false,
            "defaultValue": "100"
        },
        "prefixText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Optional text to display at the start of the progress bar."
            },
            "attribute": "prefix-text",
            "reflect": false,
            "defaultValue": "''"
        },
        "suffixText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Optional text to display at the end of the progress bar."
            },
            "attribute": "suffix-text",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
}
