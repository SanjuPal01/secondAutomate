import { Host, h } from "@stencil/core";
import debounce from 'lodash/fp/debounce';
/**
 * @description
 * chef-tooltip provides a way to create simple tooltips for elements.
 * You can change the background color of the tooltip with the --tooltip-color css variable.
 *
 * @example
 * <chef-tooltip for='fancy-button'>Fancy Button Tooltip</chef-tooltip>
 * <chef-button primary id='fancy-button'>A Button</chef-button>
 *
 * @example
 * <chef-tooltip for='another-button' delay=1000>A Tooltip with a longer delay</chef-tooltip>
 * <chef-button primary id='another-button'>Another Button</chef-button>
 *
 * @example
 * <chef-tooltip for='not-a-button'>A tooltip for something other than a button</chef-tooltip>
 * <div style='padding: 1em;' id='not-a-button'>This is not a button. But it has a tooltip.</div>
 *
 * @example
 * <chef-tooltip for='complex-tooltip'>
 *   <div style='padding: 1em;'>
 *     <span style='color: red;'>Tooltips can even contain markup and styling</span>
 *   </div>
 * </chef-tooltip>
 * <chef-button primary id='complex-tooltip'>Yet another button</chef-button>
 *
 * @example
 * <chef-tooltip style='--tooltip-color: lightblue;' for='fancy-background'>A Tooltip Of A Different Color</chef-tooltip>
 * <chef-button primary id='fancy-background'>Colored Tooltips!</chef-button>
 *
 * @example
 * <chef-tooltip follow for='following-tooltip'>Tooltip that follows</chef-tooltip>
 * <p id='following-tooltip'>
 *    once upon a midnight dreary, while i pondered, weak and weary. over many a
 *    quaint and curious volume of forgotten lore. while i nodded, nearly napping,
 *    suddenly there came a tapping. as of some one gently rapping, rapping at my
 *    chamber door. 'tis some visiter, i muttered, tapping at my chamber door. only
 *    this, and nothing more. ah, distinctly i remember it was in the bleak december.
 *    and each separate dying ember wrought its ghost upon the floor. eagerly i wished
 *    the morrow;—vainly i had sought to borrow. from my books surcease of
 *    sorrow—sorrow for the lost lenore. for the rare and radiant maiden whom the
 *    angels name lenore. nameless here for evermore. and the silken sad uncertain
 *    rustling of each purple curtain thrilled me, filled me with fantastic terrors
 * </p>
 *
 * @example
 * <chef-tooltip offset='-50 0' for='offset-tooltip'>offset tooltip</chef-tooltip>
 * <chef-button primary id='offset-tooltip'>Button</chef-button>
 *
 * @example
 * <chef-tooltip position='left' for='left-tooltip'>Left</chef-tooltip>
 * <chef-button primary id='left-tooltip'>Left</chef-button>
 *
 * @example
 * <chef-tooltip position='right' for='right-tooltip'>Right</chef-tooltip>
 * <chef-button primary id='right-tooltip'>Right</chef-button>
 *
 * @example
 * <chef-tooltip position='bottom' for='bottom-tooltip'>Bottom</chef-tooltip>
 * <chef-button primary id='bottom-tooltip'>Bottom</chef-button>
 *
 * @example
 * <chef-tooltip offset='0 -50' position='left' for='offset-position'>Left offset</chef-tooltip>
 * <chef-button primary id='offset-position'>Left offset</chef-button>
 *
 * @example
 * <chef-tooltip follow for='following-left' position='left'>Tooltip that follows</chef-tooltip>
 * <p id='following-left'>
 *    once upon a midnight dreary, while i pondered, weak and weary. over many a
 *    quaint and curious volume of forgotten lore. while i nodded, nearly napping,
 *    suddenly there came a tapping. as of some one gently rapping, rapping at my
 *    chamber door. 'tis some visiter, i muttered, tapping at my chamber door. only
 *    this, and nothing more. ah, distinctly i remember it was in the bleak december.
 *    and each separate dying ember wrought its ghost upon the floor. eagerly i wished
 *    the morrow;—vainly i had sought to borrow. from my books surcease of
 *    sorrow—sorrow for the lost lenore. for the rare and radiant maiden whom the
 *    angels name lenore. nameless here for evermore. and the silken sad uncertain
 *    rustling of each purple curtain thrilled me, filled me with fantastic terrors
 * </p>
 *
 * @example
 * <chef-tooltip interactable for='interactable-example'>
 *   The contents of this tooltip can be interacted with.
 * </chef-tooltip>
 * <chef-button primary id='interactable-example'>Interactable Tooltip</chef-button>
 * <p>
 *   By default, tooltip content can't be interacted with because the tooltip will hide
 *   after leaving the tooltip target. Applying an <code>interactable</code> attribute
 *   will prevent the tooltip from hiding while the mouse cursor is within the tooltip.
 * </p>
 */
export class ChefTooltip {
    constructor() {
        /**
         * The delay before the tooltip is displayed in milliseconds.
         */
        this.delay = 100;
        /**
         * The position of the tooltip in relation to the mouse/element.
         * Can be one of `top`, `left`, `right` or `bottom`.
         */
        this.position = 'top';
        /**
         * The x and y offset of the tooltip in pixels.
         */
        this.offset = '0 0';
        /**
         * If set the tooltip will follow the mouse when it is over the targetted element.
         */
        this.follow = false;
        /**
         * If set the tooltip will allow the mouse cursor to interact with its content.
         */
        this.interactable = false;
        this.visible = false;
        this._screenPosition = [0, 0];
    }
    set screenPosition([x, y]) {
        const [offsetX, offsetY] = this.offset.split(' ').map((i) => parseInt(i, 10));
        this._screenPosition = [x + (offsetX || 0), y + (offsetY || 0)];
    }
    get screenPosition() {
        return this._screenPosition;
    }
    componentDidLoad() {
        const ref = document.querySelector(`#${this.for}`);
        if (ref) {
            if (this.follow) {
                this.setupDynamicPositioning(ref);
            }
            else {
                this.setupStaticPositioning(ref);
            }
        }
    }
    render() {
        const [x, y] = this.screenPosition;
        const styles = { left: `${x}px`, top: `${y}px` };
        const classNames = [
            this.visible ? 'visible' : '',
            this.interactable ? 'interactable' : '',
            this.position,
            this.follow ? 'follow' : ''
        ].join(' ');
        return (h(Host, { class: classNames, style: styles },
            h("slot", null)));
    }
    setupDynamicPositioning(ref) {
        const delayedShow = debounce(this.delay, () => this.visible = true);
        const handleMouseEnter = (event) => {
            this.screenPosition = [event.clientX, event.clientY];
        };
        const handleMouseMove = (event) => {
            this.screenPosition = [event.clientX, event.clientY];
            delayedShow();
        };
        const handleMouseLeave = () => {
            delayedShow.cancel();
            this.visible = false;
        };
        ref.addEventListener('mouseenter', handleMouseEnter);
        ref.addEventListener('mousemove', handleMouseMove);
        ref.addEventListener('mouseleave', handleMouseLeave);
    }
    setupStaticPositioning(ref) {
        let transitionTimeoutID, hideTimeoutID;
        const transitionDuration = parseFloat(getComputedStyle(this.el).transitionDuration) * 1000;
        const hideTooltip = () => {
            hideTimeoutID = setTimeout(() => this.visible = false, this.delay);
            transitionTimeoutID = setTimeout(handleTransitionComplete, transitionDuration);
        };
        const cancelHideTooltip = () => {
            clearTimeout(hideTimeoutID);
            clearTimeout(transitionTimeoutID);
        };
        const handleMouseEnter = () => {
            cancelHideTooltip();
            addEventListener('scroll', handleScroll);
        };
        const handleMouseMove = debounce(this.delay, () => {
            this.setStaticPosition(ref);
            this.visible = true;
        });
        const handleScroll = () => this.setStaticPosition(ref);
        const handleMouseLeave = () => {
            handleMouseMove.cancel();
            hideTooltip();
        };
        const handleTransitionComplete = () => removeEventListener('scroll', handleScroll);
        const handleTooltipEnter = () => {
            cancelHideTooltip();
        };
        const handleTooltipLeave = () => {
            hideTooltip();
        };
        if (this.interactable) {
            this.el.addEventListener('mouseenter', handleTooltipEnter);
            this.el.addEventListener('mouseleave', handleTooltipLeave);
        }
        ref.addEventListener('mouseenter', handleMouseEnter);
        ref.addEventListener('mousemove', handleMouseMove);
        ref.addEventListener('mouseleave', handleMouseLeave);
    }
    setStaticPosition(ref) {
        const boundingRect = ref.getBoundingClientRect();
        const top = boundingRect.top;
        const bottom = top + boundingRect.height;
        const left = boundingRect.left;
        const right = left + boundingRect.width;
        const centerXOffset = boundingRect.width / 2;
        const centerYOffset = boundingRect.height / 2;
        switch (this.position) {
            case 'left':
                this.screenPosition = [left, top + centerYOffset];
                break;
            case 'right':
                this.screenPosition = [right, top + centerYOffset];
                break;
            case 'bottom':
                this.screenPosition = [left + centerXOffset, bottom];
                break;
            case 'top':
            default:
                this.screenPosition = [left + centerXOffset, top];
                break;
        }
    }
    static get is() { return "chef-tooltip"; }
    static get originalStyleUrls() { return {
        "$": ["./chef-tooltip.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-tooltip.css"]
    }; }
    static get properties() { return {
        "for": {
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
                "text": "The ID of the element to attach the tooltip"
            },
            "attribute": "for",
            "reflect": true
        },
        "delay": {
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
                "text": "The delay before the tooltip is displayed in milliseconds."
            },
            "attribute": "delay",
            "reflect": false,
            "defaultValue": "100"
        },
        "position": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'top' | 'left' | 'right' | 'bottom'",
                "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The position of the tooltip in relation to the mouse/element.\nCan be one of `top`, `left`, `right` or `bottom`."
            },
            "attribute": "position",
            "reflect": false,
            "defaultValue": "'top'"
        },
        "offset": {
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
                "text": "The x and y offset of the tooltip in pixels."
            },
            "attribute": "offset",
            "reflect": false,
            "defaultValue": "'0 0'"
        },
        "follow": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If set the tooltip will follow the mouse when it is over the targetted element."
            },
            "attribute": "follow",
            "reflect": false,
            "defaultValue": "false"
        },
        "interactable": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If set the tooltip will allow the mouse cursor to interact with its content."
            },
            "attribute": "interactable",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "visible": {},
        "_screenPosition": {}
    }; }
    static get elementRef() { return "el"; }
}
