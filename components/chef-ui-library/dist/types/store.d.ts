export declare const configureStore: (initialState: any) => import("redux").Store<{
    docs: import("./entities/docs/doc.reducer").DocEntityState;
}, import("redux").AnyAction> & {
    dispatch: unknown;
};
