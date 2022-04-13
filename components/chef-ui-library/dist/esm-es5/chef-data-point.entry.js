import { r as registerInstance, d as createEvent, h } from './chunk-efdec40a.js';
/**
 * @description
 * chef-data-point is used in conjunction with various charts to specify data points.
 *
 * @example
 * <style>
 *   chef-radial-chart .failed, chef-radial-chart .critical {
 *     color: var(--chef-critical);
 *   }
 *  chef-radial-chart .warning, chef-radial-chart .warning {
 *     color: var(--chef-primary);
 *   }
 *   chef-radial-chart .success, chef-radial-chart .major {
 *     color: var(--chef-ok);
 *   }
 *   chef-radial-chart .skipped, chef-radial-chart .minor {
 *     color: var(--chef-unknown);
 *   }
 * </style>
 * <chef-radial-chart style="width: 220px; height: 220px;">
 *   <span slot="innerText">Text for the center of the chart</span>
 *
 *   <chef-data-point value="4" class="failed">4 Failed</chef-data-point>
 *   <chef-data-point value="3" class="warning">3 Failed</chef-data-point>
 *   <chef-data-point value="2" class="success">2 Successful</chef-data-point>
 *   <chef-data-point value="1" class="skipped">1 Skipped</chef-data-point>
 *
 *   <chef-data-point value="4" secondary class="critical">Critical</chef-data-point>
 *   <chef-data-point value="3" secondary class="warning">Warning</chef-data-point>
 *   <chef-data-point value="2" secondary class="major">Major</chef-data-point>
 *   <chef-data-point value="1" secondary class="minor">Minor</chef-data-point>
 * </chef-radial-chart>
 */
var ChefDataPoint = /** @class */ (function () {
    function ChefDataPoint(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The value assigned to the data point.
         */
        this.value = 0;
        /**
         * Some charts support special secondary data points.
         */
        this.secondary = false;
        this.updated = createEvent(this, "updated", 7);
    }
    ChefDataPoint.prototype.componentWillUpdate = function () {
        this.updated.emit();
    };
    ChefDataPoint.prototype.render = function () {
        return (h("slot", null));
    };
    return ChefDataPoint;
}());
export { ChefDataPoint as chef_data_point };
