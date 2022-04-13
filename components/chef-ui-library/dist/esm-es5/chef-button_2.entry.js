import { r as registerInstance, h, H as Host } from './chunk-efdec40a.js';
/**
 * @description
 * `<chef-button>` is used to display buttons. It has three style variants:
 *
 * - `primary`
 * - `secondary`
 * - `tertiary`
 *
 * Adding `caution` will modify these style variants to their cautious version.
 *
 * @example
 * <chef-button primary>
 *   Primary
 * </chef-button>
 * <chef-button primary>
 *   <chef-icon>alarm</chef-icon>
 * </chef-button>
 *
 * @example
 * <chef-button primary>Button Text</chef-button>
 * <chef-button primary disabled>Button Text</chef-button>
 * <chef-button primary caution>Button Text</chef-button>
 * <chef-button primary caution disabled>Button Text</chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button secondary>Button Text</chef-button>
 * <chef-button secondary disabled>Button Text</chef-button>
 * <chef-button secondary caution>Button Text</chef-button>
 * <chef-button secondary caution disabled>Button Text</chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button tertiary>Button Text</chef-button>
 * <chef-button tertiary disabled>Button Text</chef-button>
 * <chef-button tertiary caution>Button Text</chef-button>
 * <chef-button tertiary caution disabled>Button Text</chef-button>
 *
 * @example
 * <chef-button primary>
 *   <chef-icon>add</chef-icon>
 * </chef-button>
 * <chef-button primary disabled>
 *   <chef-icon>add</chef-icon>
 * </chef-button>
 * <chef-button primary caution>
 *   <chef-icon>remove</chef-icon>
 * </chef-button>
 * <chef-button primary caution disabled>
 *   <chef-icon>remove</chef-icon>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button secondary>
 *   <chef-icon>add</chef-icon>
 * </chef-button>
 * <chef-button secondary disabled>
 *   <chef-icon>add</chef-icon>
 * </chef-button>
 * <chef-button secondary caution>
 *   <chef-icon>remove</chef-icon>
 * </chef-button>
 * <chef-button secondary caution disabled>
 *   <chef-icon>remove</chef-icon>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button tertiary>
 *   <chef-icon>add</chef-icon>
 * </chef-button>
 * <chef-button tertiary disabled>
 *   <chef-icon>add</chef-icon>
 * </chef-button>
 * <chef-button tertiary caution>
 *   <chef-icon>remove</chef-icon>
 * </chef-button>
 * <chef-button tertiary caution disabled>
 *   <chef-icon>remove</chef-icon>
 * </chef-button>
 *
 * @example
 * <chef-button primary>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button primary disabled>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button primary caution>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button primary caution disabled>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button secondary>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button secondary disabled>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button secondary caution>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button secondary caution disabled>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button tertiary>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button tertiary disabled>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button tertiary caution>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button tertiary caution disabled>
 *   <chef-icon>close</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 *
 * @example
 * <chef-button primary>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button primary disabled>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button primary caution>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button primary caution disabled>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button secondary>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button secondary disabled>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button secondary caution>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button secondary caution disabled>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button tertiary>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button tertiary disabled>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button tertiary caution>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 * <chef-button tertiary caution disabled>
 *   <span>Button Text</span>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 *
 * @example
 * <chef-button primary>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button primary disabled>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button primary caution>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button primary caution disabled>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button secondary>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button secondary disabled>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button secondary caution>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button secondary caution disabled>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button tertiary>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button tertiary disabled>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button tertiary caution>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 * <chef-button tertiary caution disabled>
 *   <chef-icon>bookmark</chef-icon>
 *   <span>Button Text</span>
 *   <chef-icon>close</chef-icon>
 * </chef-button>
 *
 * @example
 * <chef-button primary>
 *   <chef-icon>save</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button primary disabled>
 *   <chef-loading-spinner></chef-loading-spinner>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button primary caution>
 *   <chef-icon>delete</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button primary caution disabled>
 *   <chef-loading-spinner></chef-loading-spinner>
 *   <span>Button Text</span>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button secondary>
 *   <chef-icon>save</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button secondary disabled>
 *   <chef-loading-spinner></chef-loading-spinner>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button secondary caution>
 *   <chef-icon>delete</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button secondary caution disabled>
 *   <chef-loading-spinner></chef-loading-spinner>
 *   <span>Button Text</span>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button tertiary>
 *   <chef-icon>save</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button tertiary disabled>
 *   <chef-loading-spinner></chef-loading-spinner>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button tertiary caution>
 *   <chef-icon>delete</chef-icon>
 *   <span>Button Text</span>
 * </chef-button>
 * <chef-button tertiary caution disabled>
 *   <chef-loading-spinner></chef-loading-spinner>
 *   <span>Button Text</span>
 * </chef-button>
 *
 * @example
 * <chef-button secondary disabled>
 *   <chef-icon>chevron_left</chef-icon>
 * </chef-button>
 * <chef-button primary>1</chef-button>
 * <chef-button secondary>2</chef-button>
 * <chef-button secondary>3</chef-button>
 * <chef-button secondary>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button secondary>
 *   <chef-icon>chevron_left</chef-icon>
 * </chef-button>
 * <chef-button secondary>1</chef-button>
 * <chef-button primary>2</chef-button>
 * <chef-button secondary>3</chef-button>
 * <chef-button secondary>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-button secondary>
 *   <chef-icon>chevron_left</chef-icon>
 * </chef-button>
 * <chef-button secondary>1</chef-button>
 * <chef-button secondary>2</chef-button>
 * <chef-button primary>3</chef-button>
 * <chef-button secondary disabled>
 *   <chef-icon>chevron_right</chef-icon>
 * </chef-button>
 *
 * @example
 * <chef-button type="reset" tertiary>Cancel</chef-button>
 * <chef-button type="button" secondary>Save Draft</chef-button>
 * <chef-button type="submit" primary>Submit</chef-button>
 *
 * @example
 * <chef-button url="/" primary>Link!</chef-button>
 * <chef-button url="/" target="_blank" secondary>Link in a new tab!</chef-button>
 */
var ChefButton = /** @class */ (function () {
    function ChefButton(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The button type (either 'button', 'submit', or 'reset')
         */
        this.type = 'button';
        /**
         * Create a primary button
         */
        this.primary = false;
        /**
         * Create a secondary button
         */
        this.secondary = false;
        /**
         * Create a tertiary button
         */
        this.tertiary = false;
        /**
         * Indicate button as potentially dangerous
         */
        this.caution = false;
        /**
         * Indicate button as disabled
         */
        this.disabled = false;
    }
    ChefButton.prototype.render = function () {
        var link = (h("a", { href: this.url, target: this.target }, h("slot", null)));
        var button = (h("button", { type: this.type, form: this.form, disabled: this.disabled, "aria-disabled": this.disabled }, h("slot", null)));
        return (h(Host, { "aria-disabled": this.disabled }, this.url ? link : button));
    };
    Object.defineProperty(ChefButton, "style", {
        get: function () { return ".empty{--border-color:var(--chef-grey);border:1px dashed var(--border-color);border-radius:var(--chef-border-radius)}.new-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.new-row .cta{-ms-flex:1 0;flex:1 0;padding:1em;color:var(--chef-primary-bright)}.new-row .action{-ms-flex:0 1;flex:0 1;padding:0 1em}.new-row .action chef-button{margin:0}.form-field{display:block;font-size:13px;padding:.8em 0}.form-field chef-input{width:100%}.form-field>label,.label{display:block;padding-bottom:.75em;font-weight:700;color:var(--chef-primary-dark)}chef-button a,chef-button button{background:transparent;border:0 solid transparent;color:inherit;cursor:inherit;display:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-wrap:inherit;flex-wrap:inherit;font-size:inherit;font-family:inherit;line-height:inherit;margin:0;padding:0 12px;pointer-events:inherit;text-decoration:inherit;width:inherit;min-width:inherit;max-width:inherit;height:inherit;min-height:inherit;max-height:inherit}chef-button{--background-color:var(--chef-dark-grey);--border-color:var(--chef-dark-grey);--color:var(--chef-white);background-color:var(--background-color);border-width:1px;border-style:solid;border-color:var(--border-color);border-radius:var(--chef-border-radius);color:var(--color);cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-size:14px;margin:8px;min-height:32px;min-width:32px;text-align:center;white-space:nowrap;vertical-align:top}chef-button chef-icon,chef-button chef-loading-spinner{margin:0 8px;font-size:16px;pointer-events:none}chef-button chef-icon:first-child,chef-button chef-loading-spinner:first-child{margin:0 8px 0 -4px}chef-button chef-icon:last-child,chef-button chef-loading-spinner:last-child{margin:0 -4px 0 8px}chef-button chef-icon:first-child:last-child,chef-button chef-loading-spinner:first-child:last-child{margin:0 -4px}chef-button chef-icon+chef-icon,chef-button chef-icon+chef-loading-spinner,chef-button chef-loading-spinner+chef-icon,chef-button chef-loading-spinner+chef-loading-spinner{margin:0 8px 0 0}chef-button chef-icon+chef-icon:last-child,chef-button chef-icon+chef-loading-spinner:last-child,chef-button chef-loading-spinner+chef-icon:last-child,chef-button chef-loading-spinner+chef-loading-spinner:last-child{margin:0 -4px 0 0}chef-button[disabled]{pointer-events:none}chef-button[primary]{--background-color:#3864f2;--border-color:#3864f2;--color:var(--chef-white)}chef-button[primary]:hover{--background-color:#174af0;--border-color:#174af0;--color:var(--chef-white)}chef-button[primary]:active{--background-color:#0e3dd5;--border-color:#0e3dd5;--color:var(--chef-white)}chef-button[primary][disabled]{--background-color:#bdcbfb;--border-color:#bdcbfb;--color:var(--chef-white)}chef-button[primary][disabled] chef-loading-spinner{--fill:var(--chef-white);--fill-alt:#dee5fd}chef-button[primary] chef-loading-spinner{--fill:#dee5fd;--fill-alt:#bdcbfb}chef-button[primary][caution]{--background-color:#dc267f;--border-color:#dc267f;--color:var(--chef-white)}chef-button[primary][caution]:hover{--background-color:#ba1e6a;--border-color:#ba1e6a;--color:var(--chef-white)}chef-button[primary][caution]:active{--background-color:#961856;--border-color:#961856;--color:var(--chef-white)}chef-button[primary][caution][disabled]{--background-color:#f3b7d4;--border-color:#f3b7d4;--color:var(--chef-white)}chef-button[primary][caution][disabled] chef-loading-spinner{--fill:var(--chef-white);--fill-alt:#f9dbea}chef-button[primary][caution] chef-loading-spinner{--fill:#f9dbea;--fill-alt:#f3b7d4}chef-button[secondary]{--background-color:var(--chef-white);--border-color:#3864f2;--color:#3864f2}chef-button[secondary]:hover{--background-color:#dee5fd;--border-color:#174af0;--color:#174af0}chef-button[secondary]:active{--background-color:#bdcbfb;--border-color:#0e3dd5;--color:#0e3dd5}chef-button[secondary][disabled]{--background-color:var(--chef-white);--border-color:#bdcbfb;--color:#bdcbfb}chef-button[secondary][disabled] chef-loading-spinner{--fill:#9cb2f9;--fill-alt:#bdcbfb}chef-button[secondary] chef-loading-spinner{--fill:#3864f2;--fill-alt:#597ef4}chef-button[secondary][caution]{--background-color:var(--chef-white);--border-color:#dc267f;--color:#dc267f}chef-button[secondary][caution]:hover{--background-color:#f9dbea;--border-color:#ba1e6a;--color:#ba1e6a}chef-button[secondary][caution]:active{--background-color:#f3b7d4;--border-color:#961856;--color:#961856}chef-button[secondary][caution][disabled]{--background-color:var(--chef-white);--border-color:#f3b7d4;--color:#f3b7d4}chef-button[secondary][caution][disabled] chef-loading-spinner{--fill:#ee93bf;--fill-alt:#f3b7d4}chef-button[secondary][caution] chef-loading-spinner{--fill:#dc267f;--fill-alt:#e24a94}chef-button[tertiary]{--background-color:transparent;--border-color:transparent;--color:#3864f2}chef-button[tertiary]:hover{--background-color:#dee5fd;--border-color:transparent;--color:#174af0}chef-button[tertiary]:active{--background-color:#bdcbfb;--border-color:transparent;--color:#0e3dd5}chef-button[tertiary][disabled]{--background-color:transparent;--border-color:transparent;--color:#bdcbfb}chef-button[tertiary][disabled] chef-loading-spinner{--fill:#9cb2f9;--fill-alt:#bdcbfb}chef-button[tertiary] chef-loading-spinner{--fill:#3864f2;--fill-alt:#597ef4}chef-button[tertiary][caution]{--background-color:transparent;--border-color:transparent;--color:#dc267f}chef-button[tertiary][caution]:hover{--background-color:#f9dbea;--border-color:transparent;--color:#ba1e6a}chef-button[tertiary][caution]:active{--background-color:#f3b7d4;--border-color:transparent;--color:#961856}chef-button[tertiary][caution][disabled]{--background-color:transparent;--border-color:transparent;--color:#f3b7d4}chef-button[tertiary][caution][disabled] chef-loading-spinner{--fill:#ee93bf;--fill-alt:#f3b7d4}chef-button[tertiary][caution] chef-loading-spinner{--fill:#dc267f;--fill-alt:#e24a94}"; },
        enumerable: true,
        configurable: true
    });
    return ChefButton;
}());
/**
 * @description
 * Display a material icon.
 *
 * @example
 * <chef-icon style='font-size: 5em'>accessibility</chef-icon>
 *
 * @example
 * <chef-icon style='font-size: 5em; color: red;'>alarm</chef-icon>
 */
var ChefIcon = /** @class */ (function () {
    function ChefIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    ChefIcon.prototype.render = function () {
        return (h("slot", null));
    };
    Object.defineProperty(ChefIcon, "style", {
        get: function () { return "chef-icon{font-family:Material Icons;font-weight:400;font-style:normal;font-size:inherit;color:inherit;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}"; },
        enumerable: true,
        configurable: true
    });
    return ChefIcon;
}());
export { ChefButton as chef_button, ChefIcon as chef_icon };
