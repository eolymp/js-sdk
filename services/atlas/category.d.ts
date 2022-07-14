export declare type Category = {
    id?: string;
    visible?: boolean;
    index?: number;
    parentId?: string;
    image?: string;
    descriptions?: Category_Description[];
};
export declare type Category_Description = {
    locale?: string;
    title?: string;
    summary?: string;
};
