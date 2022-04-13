export interface Entity {
    readonly id: string;
}
export interface IndexedEntities<T> {
    readonly [id: string]: T;
}
export declare const indexer: <T extends Entity>(transform: (object: any) => T) => (object: any) => IndexedEntities<T>;
