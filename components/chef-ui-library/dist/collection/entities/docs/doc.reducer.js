import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import { GET_DOCS, GET_DOCS_FAILED, GET_DOCS_SUCCESS } from './doc.actions';
import { DocEntity } from './doc.entity';
import { indexer } from '../entities';
const docIndexer = indexer(DocEntity.create);
export var Status;
(function (Status) {
    Status[Status["notLoaded"] = 0] = "notLoaded";
    Status[Status["loading"] = 1] = "loading";
    Status[Status["loadSuccess"] = 2] = "loadSuccess";
    Status[Status["loadFailure"] = 3] = "loadFailure";
})(Status || (Status = {}));
const initialState = {
    byId: {},
    allIds: [],
    status: Status.notLoaded
};
export function docReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DOCS:
            return set('status', Status.loading, state);
        case GET_DOCS_FAILED:
            console.warn('FAILED GETTING DOCS');
            return set('status', Status.loadFailure, state);
        case GET_DOCS_SUCCESS:
            const docs = docIndexer(action.payload.children);
            return pipe(set('status', Status.loadSuccess), set('byId', docs), set('allIds', map('id', docs)))(state);
        default:
            return state;
    }
}
