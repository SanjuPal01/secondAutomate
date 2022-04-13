/**
 * @description
 * The `<chef-markdown>` atom is used to parse and display markdown text.
 *
 * @example
 * <chef-markdown text="# Heading with a [link](#to-nothing)"></chef-markdown>
 *
 * @example
 * <textarea id='md-editor' placeholder='Type some markdown...'></textarea>
 * <chef-markdown id='md-display'></chef-markdown>
 *
 * <style>
 *  #md-editor { width: 100%; min-height: 10em; }
 * </style>
 *
 * <script>
 *   const editor = document.getElementById('md-editor');
 *   const display = document.getElementById('md-display');
 *   editor.addEventListener('input', e => display.text = e.target.value);
 * </script>
 */
export declare class ChefMarkdown {
    /**
     * The markdown text to be parsed.
     */
    text: string;
    render(): any;
    private parse;
}
