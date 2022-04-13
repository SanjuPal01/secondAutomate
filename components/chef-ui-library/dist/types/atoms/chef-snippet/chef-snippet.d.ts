/**
 * https://github.com/PrismJS/prism/issues/1409
 * Need to look into a better way to load and use any non-default languages that we need.
 */
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-ruby';
/**
 * @description
 * The `<chef-snippet>` atom is used to display syntax-highlighted code blocks.
 *
 * As of 2018.10.25 the default supported languages are:
 *
 *  -  markup (and aliases xml, html mathml, and svg)
 *  -  javascript (and alias js)
 *  -  css
 *  -  clike (read this one as "like the C language")
 *
 * Automate is configured to use these additional languages as well:
 *
 *  -  json
 *  -  ruby
 *
 * @example
 * <chef-snippet code="<h1>Highlight me</h1>"></chef-snippet>
 *
 * @example
 * <details style="margin:1em;cursor:pointer;">
 *   <summary>Example Snippet</summary>
 *   <chef-snippet code="const el = document.querySelector('h1');" lang="js"></chef-snippet>
 * </details>
 */
export declare class ChefSnippet {
    /**
     * The code snippet to be highlighted.
     */
    code: string;
    /**
     * The language the code snippet is written in.
     * See the "Description" for active languages and http://prismjs.com/#languages-list for
     * a list of all available languages.
     */
    lang: string;
    render(): any;
    private highlight;
}
