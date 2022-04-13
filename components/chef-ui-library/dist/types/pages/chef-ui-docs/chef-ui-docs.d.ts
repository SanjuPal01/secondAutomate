import { Store } from '@stencil/redux';
import { IndexedEntities } from '../../entities/entities';
import { DocEntity } from '../../entities/docs/doc.entity';
export declare class ChefUIDocs {
    store: Store;
    match: any;
    docType: string;
    docs: IndexedEntities<DocEntity>;
    docIds: string[];
    componentWillLoad(): void;
    render(): any;
    private nav;
}
