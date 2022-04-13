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
export declare class ChefTooltip {
    /**
     * The ID of the element to attach the tooltip
     */
    for: string;
    /**
     * The delay before the tooltip is displayed in milliseconds.
     */
    delay: number;
    /**
     * The position of the tooltip in relation to the mouse/element.
     * Can be one of `top`, `left`, `right` or `bottom`.
     */
    position: 'top' | 'left' | 'right' | 'bottom';
    /**
     * The x and y offset of the tooltip in pixels.
     */
    offset: string;
    /**
     * If set the tooltip will follow the mouse when it is over the targetted element.
     */
    follow: boolean;
    /**
     * If set the tooltip will allow the mouse cursor to interact with its content.
     */
    interactable: boolean;
    visible: boolean;
    _screenPosition: number[];
    screenPosition: any;
    el: HTMLElement;
    componentDidLoad(): void;
    render(): any;
    setupDynamicPositioning(ref: HTMLElement): void;
    setupStaticPositioning(ref: HTMLElement): void;
    setStaticPosition(ref: HTMLElement): void;
}
