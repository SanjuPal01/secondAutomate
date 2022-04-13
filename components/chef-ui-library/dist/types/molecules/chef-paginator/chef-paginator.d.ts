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
export declare class ChefPaginator {
    /**
     * The total number of pages to show in the paginator
     */
    pageCount: string;
    /**
     * The current page to highlight. This is the param that you will update on a page change.
     */
    currentPage: string;
    render(): any;
    private controlsLeft;
    private controlsRight;
    private pageLinks;
    private pageNums;
    private firstPage;
    private prevPage;
    private lastPage;
    private nextPage;
    private pageHref;
    private navigateTo;
    private linkTo;
}
