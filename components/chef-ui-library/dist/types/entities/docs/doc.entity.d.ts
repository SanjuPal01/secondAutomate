import { Entity } from '../entities';
interface Property {
    name: string;
    description?: string;
    defaultValue?: string;
}
export declare class DocEntity implements Entity {
    id: string;
    name: string;
    description: string;
    tag: string;
    styleUrl: string;
    shadow: boolean;
    properties: Property[];
    examples: string[];
    docType: string;
    constructor(jsonDoc?: {});
    static create(json: any): DocEntity;
}
export {};
