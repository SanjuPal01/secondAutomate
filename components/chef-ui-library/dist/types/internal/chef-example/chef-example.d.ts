/**
 * @description
 * The `<chef-example>` molecule is used to display syntax-highlighted example code alongside their
 * rendered output.
 *
 * @example
 * <chef-example code="<h1>Highlight me</h1>"></chef-example>
 */
export declare class ChefExample {
    el: HTMLElement;
    /**
     * The example code to be presented.
     */
    code: string;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    render(): any[];
    private execScripts;
}
