import { r as registerInstance, h } from './chunk-efdec40a.js';

/**
 * @description
 * Generic dropdown atom. This is a basic atom to be used for constructing
 * things like drop down menus and select boxes. This atom makes no assumptions
 * about how it's content is styled. It's up to the developer to style content
 * appropriately.
 *
 * @example
 * <chef-button id='drop-toggle' primary>Click Me!</chef-button>
 * <chef-dropdown id='drop'>
 *   <p>Some content to go in my dropdown</p>
 *   <p>Some content to go in my dropdown</p>
 *   <p>Some content to go in my dropdown</p>
 *   <p>Some content to go in my dropdown</p>
 *   <p>Some content to go in my dropdown</p>
 *   <p>Some content to go in my dropdown</p>
 *   <p>Some content to go in my dropdown</p>
 *   <p>Some content to go in my dropdown</p>
 *   <p>Some content to go in my dropdown</p>
 * </chef-dropdown>
 *
 * <script>
 *   const toggle = document.getElementById('drop-toggle');
 *   const dropdown = document.getElementById('drop');
 *   toggle.addEventListener('click', e => dropdown.visible = !dropdown.visible);
 * </script>
 */
class ChefDropdown {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.visible = false;
    }
    render() {
        return (h("slot", null));
    }
    static get style() { return "chef-dropdown{position:absolute;display:none;-webkit-box-shadow:var(--chef-box-shadow);box-shadow:var(--chef-box-shadow);border-radius:var(--chef-border-radius);background-color:var(--chef-white)}chef-dropdown[visible]{display:block}"; }
}

export { ChefDropdown as chef_dropdown };
