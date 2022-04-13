import '@stencil/router';
import '@stencil/redux';
import { getDocs } from './entities/docs/doc.actions';
export declare class ChefLibraryApp {
    store: any;
    getDocs: typeof getDocs;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
