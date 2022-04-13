/**
 * @param name  The tag name to search for.
 * @param json  The json object to search through.
 * @returns     The text for the first matching tag.
 */
export declare const findTag: (name: string, json: object) => string;
/**
 * @param name  The tag name to search for.
 * @param json  The json object to search through.
 * @returns     A list containing the text for each matching tag.
 */
export declare const filterTags: (name: string, json: object) => string[];
/**
 * @param json The json object to extract metadata from.
 * @returns    An object containing the components metadata.
 */
export declare const getComponentMetaData: (json: object) => {
    tag: string;
    styleUrl: string;
    shadow: boolean;
};
export declare function getComponentProps(children: object[]): any;
/**
 * The type of the component is derived from it's parent directory.
 * It can be one of 'atoms', 'molecules', 'charts' or 'templates'.
 * @param json The json object to extract the type from.
 * @returns    The string representing the component type.
 */
export declare const getType: (json: object) => string;
