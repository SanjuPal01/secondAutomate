import { Dictionary } from 'lodash';
/**
 * @description
 * chef-radial-chart is used to create radial charts. Data points are specified using
 * chef-data-point. Colors and various styling can be done through css by setting a
 * class on chef-data-point. Secondary data points are displayed as an outer ring
 * around the primary chart. There is also a slot, innerText, provided to add text
 * to the center of the radial.
 * Modifying data points after render will not automatically trigger a re-render. After
 * modifying your data points call the `updateDataPoints()` method on the component to
 * trigger a re-render.
 *
 * @example
 * <style>
 *   chef-radial-chart .failed, chef-radial-chart .critical {
 *     color: var(--chef-critical);
 *   }
 *   chef-radial-chart .warning, chef-radial-chart .warning {
 *     color: var(--chef-warning);
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
 *   <chef-data-point value="3" class="warning">3 Warning</chef-data-point>
 *   <chef-data-point value="2" class="success">2 Successful</chef-data-point>
 *   <chef-data-point value="1" class="skipped">1 Skipped</chef-data-point>
 *
 *   <chef-data-point value="4" secondary class="critical">Critical</chef-data-point>
 *   <chef-data-point value="3" secondary class="warning">Warning</chef-data-point>
 *   <chef-data-point value="2" secondary class="major">Major</chef-data-point>
 *   <chef-data-point value="1" secondary class="minor">Minor</chef-data-point>
 * </chef-radial-chart>
 *
 * @example
 * <style>
 *   chef-radial-chart .failed, chef-radial-chart .critical {
 *     color: var(--chef-critical);
 *   }
 *   chef-radial-chart .warning, chef-radial-chart .warning {
 *     color: var(--chef-warning);
 *   }
 *   chef-radial-chart .success, chef-radial-chart .major {
 *     color: var(--chef-ok);
 *   }
 *   chef-radial-chart .skipped, chef-radial-chart .minor {
 *     color: var(--chef-unknown);
 *   }
 * </style>
 * <chef-radial-chart gap-size="5" style="width: 220px; height: 220px;">
 *   <span slot="innerText">Text for the center of the chart</span>
 *
 *   <chef-data-point value="" class="failed">4 Failed</chef-data-point>
 *   <chef-data-point value="" class="warning">3 Warning</chef-data-point>
 *   <chef-data-point value="2" class="success">2 Successful</chef-data-point>
 *   <chef-data-point value="1" class="skipped">1 Skipped</chef-data-point>
 * </chef-radial-chart>
 */
export declare class ChefRadialChart {
    /**
     * Optionally set an id. This is automatically set to a unique ID if left blank.
     */
    id: string;
    /**
     * The width of the gap (in degrees) to apply between chart segments.
     */
    gapSize: number;
    /**
     * Optionally hide tooltips. They are shown by default.
     */
    tooltips: boolean;
    dataPoints: Dictionary<HTMLChefDataPointElement[]>;
    el: HTMLElement;
    handleDataPointUpdated(): void;
    constructor();
    updateDataPoints(): Promise<void>;
    componentWillLoad(): void;
    render(): any[];
    createTooltips([segment, element]: [any, any]): any;
    drawSegment({ innerRadius, outerRadius, cornerRadius }: {
        innerRadius: any;
        outerRadius: any;
        cornerRadius?: number;
    }, [segment, element]: [any, any]): any;
    handleHover(event: any): void;
}
