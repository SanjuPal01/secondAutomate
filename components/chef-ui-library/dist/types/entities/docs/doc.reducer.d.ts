import { DocEntity } from './doc.entity';
import { IndexedEntities } from '../entities';
export declare enum Status {
    notLoaded = 0,
    loading = 1,
    loadSuccess = 2,
    loadFailure = 3
}
export interface DocEntityState {
    readonly byId: IndexedEntities<DocEntity>;
    readonly allIds: string[];
    readonly status: Status;
}
export declare function docReducer(state: DocEntityState, action: any): DocEntityState;
