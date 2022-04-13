import { r as registerInstance, h } from './chunk-efdec40a.js';

/**
 * @description
 * `<chef-badge>` is used to Badges are generally used to provide context or emphasis on a
 * characteristic of another object in the interface, e.g., the channel name for a Habitat
 * package. They are generally actionless. But when there are more descriptions needed to
 * help explain the context, a hover state with tooltip can be added.
 *
 * Semantic colors can be applied to indicate: general, primary, critical, warning, and success.
 *
 * @example
 * <chef-badge>general</chef-badge>
 * <chef-badge primary>primary</chef-badge>
 * <chef-badge critical>critical</chef-badge>
 * <chef-badge warning>warning</chef-badge>
 * <chef-badge success>success</chef-badge>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-badge no-data>general</chef-badge>
 * <chef-badge no-data primary>primary</chef-badge>
 * <chef-badge no-data critical>critical</chef-badge>
 * <chef-badge no-data warning>warning</chef-badge>
 * <chef-badge no-data success>success</chef-badge>
 *
 * @example
 * <chef-badge id="general-tooltip" tooltip="Tooltip">general</chef-badge>
 * <chef-badge primary id="primary-tooltip" tooltip="Tooltip">primary</chef-badge>
 * <chef-badge critical id="critical-tooltip" tooltip="Tooltip">critical</chef-badge>
 * <chef-badge warning id="warning-tooltip" tooltip="Tooltip">warning</chef-badge>
 * <chef-badge success id="success-tooltip" tooltip="Tooltip">success</chef-badge>
 *
 * <chef-separator></chef-separator>
 *
 * <chef-badge no-data id="general-2-tooltip" tooltip="Tooltip">general</chef-badge>
 * <chef-badge no-data primary id="primary-2-tooltip" tooltip="Tooltip">primary</chef-badge>
 * <chef-badge no-data critical id="critical-2-tooltip" tooltip="Tooltip">critical</chef-badge>
 * <chef-badge no-data warning id="warning-2-tooltip" tooltip="Tooltip">warning</chef-badge>
 * <chef-badge no-data success id="success-2-tooltip" tooltip="Tooltip">success</chef-badge>
 */
class ChefBadge {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Indicate badge has no data
         */
        this.noData = false;
    }
    render() {
        const tooltip = this.tooltip ? h("chef-tooltip", { for: this.id }, this.tooltip) : null;
        const badge = (h("div", { class: "badge", id: this.id, "no-data": this.noData }, h("slot", null)));
        return [badge, tooltip];
    }
    static get style() { return ":root{--chef-font-family:\"Muli\",Helvetica,Arial,sans-serif;--chef-base-font-size:16px;--chef-orange:#fe6100;--ebony-clay:#222435;--royal-blue:#3864f2;--malibu:#648fff;--pink:#dc267f;--violet:#a424b4;--indigo:#785ef0;--science-blue:#0075db;--sirocco:#697272;--iron:#dfe3e5;--mystic:#e6ebee;--haze:#f3f6f8;--white:#fff;--black:#000;--atomic-tangerine:#ff9654;--blue-de-france:#3da5ff;--gray:#b7bcbc;--blue:#174af0;--palatinate-blue:#0e3dd5;--lavender-blue:#bdcbfb;--lavender:#dee5fd;--maroon:#ba1e6a;--lavender-pink:#f387d4;--piggy-pink:#f9dbea;--mahogany:#b74500;--deep-peach:#ffcaaa;--antique-white:#ffe5d4;--dark-cerulean:#00417a;--medium-teal-blue:#005bab;--columbia-blue:#9ed2ff;--glitter:#cfe8ff;--fuchsia:#a424b4;--fuchsia-light:#fadafa;--fuchsia-dark:#440f4b;--chef-primary:var(--chef-orange);--chef-primary-dark:var(--ebony-clay);--chef-primary-bright:var(--royal-blue);--chef-primary-light:var(--malibu);--chef-primary-hover:var(--blue);--chef-critical:var(--pink);--chef-warning:var(--atomic-tangerine);--chef-major:var(--violet);--chef-minor:var(--indigo);--chef-success:var(--science-blue);--chef-info-alert:var(--fuchsia);--chef-info-alert-light:var(--fuchsia-light);--chef-info-alert-dark:var(--fuchsia-dark);--chef-dark-grey:var(--sirocco);--chef-grey:var(--iron);--chef-light-grey:var(--mystic);--chef-lightest-grey:var(--haze);--chef-white:var(--white);--chef-black:var(--black);--chef-ok:var(--blue-de-france);--chef-unknown:var(--gray);--chef-border-radius:4px;--chef-box-shadow:0 0 12px 0 rgba(110,119,119,0.2);--chef-modal-bg-color:rgba(34,36,53,0.4);--chef-loading-bg-color:rgba(224,228,230,0.65);--chef-badge-primary-background:var(--lavender);--chef-badge-primary-border:var(--lavender-blue);--chef-badge-primary-color:var(--blue);--chef-control-alternate-color:var(--palatinate-blue);--chef-badge-critical-background:var(--piggy-pink);--chef-badge-critical-border:var(--lavender-pink);--chef-badge-critical-color:var(--maroon);--chef-badge-warning-background:var(--antique-white);--chef-badge-warning-border:var(--deep-peach);--chef-badge-warning-color:var(--mahogany);--chef-badge-success-background:var(--glitter);--chef-badge-success-border:var(--columbia-blue);--chef-badge-success-color:var(--medium-teal-blue)}chef-badge .badge{background:transparent;border:0 solid transparent;color:inherit;cursor:inherit;display:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-wrap:inherit;flex-wrap:inherit;font-size:inherit;font-family:inherit;line-height:inherit;padding:0 5px;pointer-events:inherit;text-decoration:inherit;text-transform:uppercase;width:inherit;min-width:inherit;max-width:inherit;height:inherit;min-height:inherit;max-height:inherit}chef-badge[tooltip]{cursor:pointer}chef-badge{--background-color:var(--chef-lightest-grey);--border-color:var(--chef-grey);--color:var(--chef-primary-dark);background-color:var(--background-color);border-width:1px;border-style:solid;border-color:var(--border-color);border-radius:2px;color:var(--color);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-size:11px;font-weight:600;letter-spacing:.2px;line-height:16px;margin:0 5px;min-height:15px;min-width:15px;text-align:center;white-space:nowrap;vertical-align:top}chef-badge chef-tooltip{font-size:13px;padding:1.5em}chef-badge[no-data]{border-style:dashed}chef-badge[primary]{--background-color:var(--chef-badge-primary-background);--border-color:var(--chef-badge-primary-border);--color:var(--chef-badge-primary-color)}chef-badge[critical]{--background-color:var(--chef-badge-critical-background);--border-color:var(--chef-badge-critical-border);--color:var(--chef-badge-critical-color)}chef-badge[warning]{--background-color:var(--chef-badge-warning-background);--border-color:var(--chef-badge-warning-border);--color:var(--chef-badge-warning-color)}chef-badge[success]{--background-color:var(--chef-badge-success-background);--border-color:var(--chef-badge-success-border);--color:var(--chef-badge-success-color)}"; }
}

export { ChefBadge as chef_badge };
