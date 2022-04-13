import { r as registerInstance, d as createEvent, h, c as getElement } from './chunk-efdec40a.js';
import './chunk-d7ac2f15.js';
import './chunk-464ede08.js';
import { f as find } from './chunk-7cba3003.js';
/**
 * @description
 * A group of status filters. Uses the chef-option atom to render the status filters.
 *
 * @example
 * <chef-status-filter-group id="filters-example">
 *   <chef-option class="filter general" value="general">
 *     <chef-icon class="filter-icon">group_work</chef-icon>
 *     <div class="filter-label">Total</div>
 *     <div class="filter-total">30</div>
 *   </chef-option>
 *   <chef-option class="filter critical" value='critical'>
 *     <chef-icon class="filter-icon">warning</chef-icon>
 *     <div class="filter-label">Critical</div>
 *     <div class="filter-total">10</div>
 *   </chef-option>
 *   <chef-option class="filter warning" value='warning'>
 *     <chef-icon class="filter-icon">error</chef-icon>
 *     <div class="filter-label">Warning</div>
 *     <div class="filter-total">5</div>
 *   </chef-option>
 *   <chef-option class="filter success" value='success'>
 *     <chef-icon class="filter-icon">check_circle</chef-icon>
 *     <div class="filter-label">OK</div>
 *     <div class="filter-total">5</div>
 *   </chef-option>
 *   <chef-option class="filter disconnected" value='disconnected'>
 *     <chef-icon class="filter-icon"></chef-icon>
 *     <div class="filter-label">Disconnected</div>
 *     <div class="filter-total">8</div>
 *   </chef-option>
 *   <chef-option class="filter connected" value='connected'>
 *     <chef-icon class="filter-icon">link</chef-icon>
 *     <div class="filter-label">Connected</div>
 *     <div class="filter-total">22</div>
 *   </chef-option>
 *   <chef-option class="filter unknown" value='unknown'>
 *     <chef-icon class="filter-icon">help</chef-icon>
 *     <div class="filter-label">Unknown</div>
 *     <div class="filter-total">10</div>
 *   </chef-option>
 * </chef-status-filter-group>
 *
 * <chef-button id="lean-toggle" primary>Toggle lean attribute</chef-button>
 *
 * <script>
 *   const button = document.getElementById('lean-toggle');
 *   const filters = document.getElementById('filters-example');
 *   button.addEventListener('click', () => filters.toggleAttribute('lean'));
 * </script>
 *
 * <style>
 *   #lean-toggle { margin-left: 0; }
 * </style>
 */
var ChefStatusFilterGroup = /** @class */ (function () {
    function ChefStatusFilterGroup(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The value of the currently toggled option.
         */
        this.value = '';
        this.change = createEvent(this, "change", 7);
        this.input = createEvent(this, "input", 7);
    }
    ChefStatusFilterGroup.prototype.handleClick = function (event) {
        var option = event.target.closest('chef-option');
        if (option) {
            this.value = option.value;
            this.change.emit();
            this.input.emit();
        }
    };
    ChefStatusFilterGroup.prototype.componentDidLoad = function () {
        var _this = this;
        var options = this.clearOptions();
        this.selected = find(['value', this.value], options);
        if (!this.selected) {
            this.selected = this.el.querySelector('chef-option[selected]') || options[0];
            this.value = this.selected.value;
        }
        this.selected.selected = true;
        // add keypress listeners to all the child options
        options.forEach(function (option) {
            option.addEventListener('keypress', function (event) { return _this.handleKeypress(event); });
            option.setAttribute('tabindex', '0');
        });
    };
    ChefStatusFilterGroup.prototype.componentDidUpdate = function () {
        this.clearOptions();
        this.selected = this.el.querySelector("chef-option[value='" + this.value + "']");
        this.selected.selected = true;
    };
    ChefStatusFilterGroup.prototype.render = function () {
        return (h("slot", null));
    };
    ChefStatusFilterGroup.prototype.clearOptions = function () {
        var options = Array.from(this.el.querySelectorAll('chef-option'));
        options.forEach(function (opt) { return opt.selected = false; });
        return options;
    };
    ChefStatusFilterGroup.prototype.handleKeypress = function (event) {
        if (event.key === 'Enter') {
            this.handleClick(event);
        }
    };
    Object.defineProperty(ChefStatusFilterGroup.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChefStatusFilterGroup, "style", {
        get: function () { return "chef-status-filter-group{--active-color:var(--toggle-active-color,var(--chef-primary-bright));display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}chef-status-filter-group .filter{padding:8px 12px;cursor:pointer;background-color:var(--chef-white);-webkit-box-shadow:0 0 0 1px #dae1e6 inset;box-shadow:inset 0 0 0 1px #dae1e6;border-radius:4px;font-size:14px;display:-ms-inline-flexbox;display:inline-flex;margin-bottom:10px}chef-status-filter-group .filter:not(:last-child){margin-right:10px}chef-status-filter-group .filter .option-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100px}chef-status-filter-group .filter .filter-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;height:16px;width:16px;margin-right:4px}chef-status-filter-group .filter .filter-total{font-weight:600}chef-status-filter-group .filter .filter-label{-ms-flex-order:-1;order:-1;-ms-flex-preferred-size:100%;flex-basis:100%;margin-bottom:4px}chef-status-filter-group .filter.general chef-icon{color:var(--chef-primary-dark)}chef-status-filter-group .filter.critical chef-icon{color:var(--chef-critical)}chef-status-filter-group .filter.warning chef-icon{color:var(--chef-primary)}chef-status-filter-group .filter.success chef-icon{color:var(--chef-success)}chef-status-filter-group .filter.unknown chef-icon{color:var(--chef-dark-grey)}chef-status-filter-group .filter.connected chef-icon{color:var(--chef-success);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}chef-status-filter-group .filter.disconnected chef-icon{color:var(--chef-dark-grey);content:\"\";display:block;width:14px;height:14px;background:url(/assets/icon-disconnected.svg);background-size:contain}chef-status-filter-group .filter.selected{background:var(--chef-white)}chef-status-filter-group .filter.selected .filter-label,chef-status-filter-group .filter.selected .filter-total,chef-status-filter-group .filter.selected .lean-filter-label{color:var(--chef-primary-dark)}chef-status-filter-group .filter.selected.general{background:#f3f6f8;-webkit-box-shadow:0 0 0 1px #829ba8 inset;box-shadow:inset 0 0 0 1px #829ba8}chef-status-filter-group .filter.selected.critical{background:#f9dbea;-webkit-box-shadow:0 0 0 1px var(--chef-critical) inset;box-shadow:0 0 0 1px var(--chef-critical) inset}chef-status-filter-group .filter.selected.warning{background:#ffe5d4;-webkit-box-shadow:0 0 0 1px var(--chef-primary) inset;box-shadow:0 0 0 1px var(--chef-primary) inset}chef-status-filter-group .filter.selected.connected,chef-status-filter-group .filter.selected.success{background:#cfe8ff;-webkit-box-shadow:0 0 0 1px var(--chef-success) inset;box-shadow:0 0 0 1px var(--chef-success) inset}chef-status-filter-group .filter.selected.unknown{background:#e7e9e9;-webkit-box-shadow:0 0 0 1px var(--chef-dark-grey) inset;box-shadow:0 0 0 1px var(--chef-dark-grey) inset}chef-status-filter-group .filter.selected.disconnected{background:var(--chef-info-alert-light);-webkit-box-shadow:0 0 0 1px var(--chef-info-alert) inset;box-shadow:0 0 0 1px var(--chef-info-alert) inset}chef-status-filter-group .filter:hover{-webkit-box-shadow:0 0 0 0;box-shadow:0 0 0 0}chef-status-filter-group .filter:hover.general{background:#f3f6f8}chef-status-filter-group .filter:hover.critical{background:#f9dbea}chef-status-filter-group .filter:hover.warning{background:#ffe5d4}chef-status-filter-group .filter:hover.connected,chef-status-filter-group .filter:hover.success{background:#cfe8ff}chef-status-filter-group .filter:hover.unknown{background:#e7e9e9}chef-status-filter-group .filter:hover.disconnected{background:var(--chef-info-alert-light)}chef-status-filter-group[lean]{-ms-flex-wrap:wrap;flex-wrap:wrap}chef-status-filter-group[lean] .filter{margin-bottom:8px}chef-status-filter-group[lean] .filter:not(:last-child){margin-right:8px}chef-status-filter-group[lean] .filter .option-content{-ms-flex-wrap:nowrap;flex-wrap:nowrap;width:auto;min-width:auto}chef-status-filter-group[lean] .filter .filter-label{-ms-flex-order:0;order:0;-ms-flex-preferred-size:auto;flex-basis:auto;margin:0 8px 0 0}"; },
        enumerable: true,
        configurable: true
    });
    return ChefStatusFilterGroup;
}());
export { ChefStatusFilterGroup as chef_status_filter_group };
