import { r as registerInstance, h, H as Host } from './chunk-efdec40a.js';

/**
 * @description
 * Description
 *
 * @example
 * <chef-alert type='success'>It's a success!</chef-alert>
 *
 * @description
 * Description
 *
 * @example
 * <chef-alert type='error'>Oh, no!</chef-alert>
 */
class ChefAlert {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { role: "alert" }, h("chef-icon", { "aria-hidden": "true" }, this.alertIcon(this.type)), h("slot", null)));
    }
    alertIcon(type) {
        switch (type) {
            case 'success': {
                return 'check_circle';
            }
            case 'error': {
                return 'report_problem';
            }
        }
    }
    static get style() { return "chef-alert{--alert-color:var(--chef-success);background-color:var(--alert-color);display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:8px;width:100%;color:var(--chef-white);border-radius:4px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}chef-alert>chef-icon{margin-right:8px}chef-alert[type=success]{--alert-color:var(--chef-success)}chef-alert[type=error]{--alert-color:var(--chef-critical)}"; }
}

export { ChefAlert as chef_alert };
