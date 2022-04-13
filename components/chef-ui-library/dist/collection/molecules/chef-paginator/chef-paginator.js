import { h } from "@stencil/core";
import range from 'lodash/fp/range';
import map from 'lodash/fp/map';
import clamp from 'lodash/fp/clamp';
import take from 'lodash/fp/take';
import takeRight from 'lodash/fp/takeRight';
import intersection from 'lodash/fp/intersection';
import isNumber from 'lodash/fp/isNumber';
/**
 * @description
 * Adds pagination. The paginator functions by adding a query string in the form of 'page=<page number>' to the current pages url. To implement just subscribe to url changes and update your view accordingly. Anything passed as a child to the paginator will be rendered beside the paginator.
 *
 * @example
 * <chef-paginator page-count='20' current-page='5'>
 * </chef-paginator>
 *
 * @example
 * <chef-paginator page-count='20' current-page='5'>
 *   Some text to render with my fancy paginator
 * </chef-paginator>
 *
 * @example
 * <chef-paginator page-count='20' current-page='5'>
 *   <strong>Maybe something bolder?</strong>
 * </chef-paginator>
 *
 * @example
 * <div style='height: 2000px'>
 *   <chef-scrollfader>
 *     <chef-paginator style='position: fixed; top: 50%; left: 40%;' page-count='20' current-page='5'>
 *       In combo with the chef-scrollfader.
 *     </chef-paginator>
 *   </chef-scrollfader>
 * </div>
 */
export class ChefPaginator {
    constructor() {
        /**
         * The total number of pages to show in the paginator
         */
        this.pageCount = '1';
        /**
         * The current page to highlight. This is the param that you will update on a page change.
         */
        this.currentPage = '1';
    }
    render() {
        // Angular always passes a string as the property type.
        // We don't want strings, we want numbers, so here we
        // convert the string to a number and pass those values
        // around.
        const currentPage = parseInt(this.currentPage, 10);
        const pageCount = parseInt(this.pageCount, 10);
        return (h("div", { class: "paginator" },
            h("div", { class: "text" },
                h("slot", null)),
            h("div", { class: "controls" },
                this.controlsLeft(currentPage),
                this.pageLinks(currentPage, pageCount),
                this.controlsRight(currentPage, pageCount))));
    }
    controlsLeft(currentPage) {
        return (h("div", { class: "left" },
            this.linkTo(this.firstPage(), h("chef-icon", null, "arrow_back")),
            this.linkTo(this.prevPage(currentPage), h("chef-icon", null, "keyboard_arrow_left"))));
    }
    controlsRight(currentPage, pageCount) {
        return (h("div", { class: "right" },
            this.linkTo(this.nextPage(currentPage, pageCount), h("chef-icon", null, "keyboard_arrow_right")),
            this.linkTo(this.lastPage(pageCount), h("chef-icon", null, "arrow_forward"))));
    }
    pageLinks(currentPage, pageCount) {
        const pageLink = (cp) => (i) => {
            const active = i === parseInt(cp, 10);
            return isNumber(i) ? this.linkTo(this.pageHref(i), i, active) : '...';
        };
        const pageNums = this.pageNums(currentPage, pageCount);
        const pageLabels = pageNums.map(num => num.toString());
        if (pageNums[0] !== 1) {
            pageLabels[0] = '...';
        }
        if (pageNums[pageNums.length - 1] !== pageCount) {
            pageLabels[pageNums.length - 1] = '...';
        }
        return (h("div", { class: "pages" }, map(pageLink(currentPage))(pageLabels)));
    }
    pageNums(currentPage, pageCount) {
        const itemsToShow = 7;
        const start = clamp(0, pageCount)(currentPage - 4);
        const end = clamp(0, pageCount)(start + itemsToShow);
        const fullList = range(1, pageCount + 1);
        const firstHalf = take(end)(fullList);
        const lastHalf = takeRight(pageCount - (end - itemsToShow))(fullList);
        return intersection(firstHalf, lastHalf);
    }
    firstPage() {
        return this.pageHref(1);
    }
    prevPage(currentPage) {
        const pageNum = currentPage > 1 ? currentPage - 1 : currentPage;
        return this.pageHref(pageNum);
    }
    lastPage(pageCount) {
        return this.pageHref(pageCount);
    }
    nextPage(currentPage, pageCount) {
        const pageNum = currentPage < pageCount ? currentPage + 1 : pageCount;
        return this.pageHref(pageNum);
    }
    pageHref(pageNum) {
        const [url, paramString] = document.location.href.split('?');
        const params = new URLSearchParams(paramString);
        params.set('page', pageNum.toString());
        return `${url}?${params}`;
    }
    navigateTo(event) {
        event.preventDefault();
        window.history.pushState({}, '', event.currentTarget.href);
        const popStateEvent = new PopStateEvent('popstate', null);
        dispatchEvent(popStateEvent);
        event.currentTarget.blur();
    }
    linkTo(href, content, active = false) {
        return h("a", { class: active ? 'active' : '', onClick: this.navigateTo, href: href }, content);
    }
    static get is() { return "chef-paginator"; }
    static get originalStyleUrls() { return {
        "$": ["chef-paginator.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["chef-paginator.css"]
    }; }
    static get properties() { return {
        "pageCount": {
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
                "text": "The total number of pages to show in the paginator"
            },
            "attribute": "page-count",
            "reflect": false,
            "defaultValue": "'1'"
        },
        "currentPage": {
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
                "text": "The current page to highlight. This is the param that you will update on a page change."
            },
            "attribute": "current-page",
            "reflect": false,
            "defaultValue": "'1'"
        }
    }; }
}
