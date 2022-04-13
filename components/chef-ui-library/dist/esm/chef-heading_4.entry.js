import { r as registerInstance, h, c as getElement } from './chunk-efdec40a.js';

/**
 * @description
 * Child component for chef-page-header that displays the heading. Only text and inline
 * elements should be nested in this component.
 *
 * @example
 * <chef-page-header>
 *   <chef-heading>Some Heading Text</chef-heading>
 *   <chef-subheading>Some subheading text that goes below the heading.</chef-subheading>
 * </chef-page-header>
 */
class ChefHeading {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("h1", { class: "page-title" }, h("slot", null)));
    }
    static get style() { return "chef-heading .page-title{color:var(--chef-primary-dark);margin-top:0;margin-bottom:12px;font-weight:inherit;font-style:inherit;font-size:18px}"; }
}

/**
 * @description
 *  A simple loading spinner for all your loading UI needs.
 *
 * @example
 * <chef-loading-spinner size='300'></chef-loading-spinner>
 */
class ChefLoadingSpinner {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Width/height of the spinner
         */
        this.size = '16';
        /**
         * Fixed styling (default is false and displays inline)
         */
        this.fixed = false;
    }
    render() {
        const ring = (d, className = '') => {
            return (h("path", { class: className, d: d }, h("animateTransform", { attributeName: "transform", attributeType: "XML", type: "rotate", dur: "2s", from: "0 50 50", to: "360 50 50", repeatCount: "indefinite" })));
        };
        return (h("svg", { width: this.size, height: this.size, viewBox: "0 0 100 100", "aria-live": "polite", "aria-label": "Page loading, do not refresh the page", role: "status" }, ring('M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z'), ring('M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z'), ring('M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5L82,35.7z', 'alt')));
    }
    static get style() { return ".empty{--border-color:var(--chef-grey);border:1px dashed var(--border-color);border-radius:var(--chef-border-radius)}.new-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.new-row .cta{-ms-flex:1 0;flex:1 0;padding:1em;color:var(--chef-primary-bright)}.new-row .action{-ms-flex:0 1;flex:0 1;padding:0 1em}.new-row .action chef-button{margin:0}.form-field{display:block;font-size:13px;padding:.8em 0}.form-field chef-input{width:100%}.form-field>label,.label{display:block;padding-bottom:.75em;font-weight:700;color:var(--chef-primary-dark)}chef-loading-spinner{--fill:#3864f2;--fill-alt:#597ef4;display:inline-block;overflow:hidden}chef-loading-spinner svg{float:left}chef-loading-spinner path{fill:var(--fill)}chef-loading-spinner path.alt{fill:var(--fill-alt)}chef-loading-spinner[fixed]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;background:var(--chef-loading-bg-color);z-index:190}"; }
}

/**
 * @description
 * Header for most pages of the Automate UI. Note that only text and inline elements should be nested
 * inside of the chef-heading and chef-subheading elements; if you want to nest block level elements
 * in the header, put them below the chef-heading and chef-subheading (as shown in the last example).
 *
 * @example
 * <chef-page-header>
 *   <chef-heading>Some Heading Text</chef-heading>
 *   <chef-subheading>Some subheading text that goes below the heading.</chef-subheading>
 * </chef-page-header>
 *
 * @example
 * <chef-page-header>
 *   <chef-heading>Heading</chef-heading>
 *   <chef-subheading>
 *    If you want to have <a href="#">custom html and whatnot</a> in your text underneath
 *    the header you can add it like this.
 *   </chef-subheading>
 * </chef-page-header>
 *
 * @example
 * <chef-page-header>
 *   <chef-heading>Heading</chef-heading>
 *   <chef-subheading>If you need to add buttons, use the header-buttons slot.</chef-subheading>
 *   <div slot="header-buttons">
 *     <chef-button primary>Do a thing</chef-button>
 *   </div>
 * </chef-page-header>
 *
 * @example
 * <style>
 *  .box-with-stuff {
 *    padding: 10px;
 *    margin-top: 10px;
 *    background: #648FFF;
 *    color: #FFF;
 *    border-radius: 4px;
 *  }
 * </style>
 *
 * <chef-page-header>
 *   <chef-heading>Heading</chef-heading>
 *   <chef-subheading>
 *     If you need to add some block level elements underneath the subheading, add it below.
 *   </chef-subheading>
 *   <div class="box-with-stuff">
 *     A box with some stuff.
 *   </div>
 * </chef-page-header>
 */
class ChefPageHeader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.el.classList.add('contrasting');
    }
    render() {
        return (h("header", null, h("slot", null), h("div", { class: "header-buttons" }, h("slot", { name: "header-buttons" }))));
    }
    get el() { return getElement(this); }
    static get style() { return "chef-page-header{display:block;padding:25px 35px 16px;position:relative;font-style:normal;font-size:13px;color:var(--chef-dark-grey)}chef-page-header chef-heading{font-weight:700}chef-page-header chef-subheading{display:block;color:var(--chef-primary-dark)}chef-page-header.contrasting{background-color:var(--chef-white)}chef-page-header .header-buttons chef-button:first-child{margin-left:0}chef-page-header .header-buttons chef-button:last-child{margin-right:0}\@media (min-width:1024px){chef-page-header .header-buttons{margin:0;position:absolute;top:35px;right:35px}}"; }
}

/**
 * @description
 * Child component for chef-page-header that displays the sub-heading (the text below the heading).
 * Only text and inline elements should be nested inside of this element.
 *
 * @example
 * <chef-page-header>
 *   <chef-heading>Some Heading Text</chef-heading>
 *   <chef-subheading>Some subheading text that goes below the heading.</chef-subheading>
 * </chef-page-header>
 */
class ChefSubheading {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("p", { class: "page-subtitle" }, h("slot", null)));
    }
    static get style() { return "chef-subheading .page-subtitle{margin-top:0;margin-bottom:0;font-size:inherit;color:var(--chef-dark-grey)}"; }
}

export { ChefHeading as chef_heading, ChefLoadingSpinner as chef_loading_spinner, ChefPageHeader as chef_page_header, ChefSubheading as chef_subheading };
