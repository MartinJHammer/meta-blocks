export type ID = string;

export interface Meta {
    created?: Date;
    lastModified?: Date;
    tags?: string[];
    parent?: ID[];
    siblings?: ID[];
    children?: ID[];
}


export interface MetaBlock {
    id: ID;
    name: string;
    content: string;
    meta: Meta
}