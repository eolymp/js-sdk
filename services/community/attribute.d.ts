export declare type Attribute = {
    key?: string;
    description?: Attribute_Description[];
    type?: string;
    index?: number;
    required?: boolean;
    hidden?: boolean;
    regexp?: string;
    min?: number;
    max?: number;
    choices?: string[];
};
export declare type Attribute_Description = {
    default?: boolean;
    locale?: string;
    label?: string;
    help?: string;
    choices?: string[];
};
