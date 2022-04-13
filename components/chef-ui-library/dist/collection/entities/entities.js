import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
export const indexer = (transform) => pipe(map(transform), reduce((acc, entity) => set(entity.id, entity, acc), {}));
