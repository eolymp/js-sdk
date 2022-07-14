import { Inline } from "./inline";
export declare type Container = {
    children?: Block[];
};
export declare type Block = {
    paragraph?: Block_Paragraph;
    layout?: Block_Layout;
    code?: Block_Code;
    math?: Block_Math;
    image?: Block_Image;
    heading?: Block_Heading;
    list?: Block_List;
    embed?: Block_Embed;
    table?: Block_Table;
    widget?: Block_Widget;
};
export declare type Block_Paragraph = {
    children?: Inline[];
};
export declare type Block_Layout = {
    direction?: string;
    alignItems?: string;
    alignContent?: string;
    justifyItems?: string;
    justifyContent?: string;
    gap?: number;
    padding?: number[];
    children?: Container[];
};
export declare type Block_List = {
    style?: string;
    children?: Block_List_Item[];
};
export declare type Block_List_Item = {
    children?: Block[];
};
export declare type Block_Image = {
    src?: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
    zoomable?: boolean;
};
export declare type Block_Heading = {
    level?: number;
    children?: Inline[];
};
export declare type Block_Math = {
    content?: string;
};
export declare type Block_Code = {
    lang?: string;
    content?: string;
};
export declare type Block_Embed = {
    path?: string;
    values?: Block_Embed_Value[];
};
export declare type Block_Embed_Value = {
    name?: string;
    value?: string;
};
export declare type Block_Table = {
    header?: string;
    children?: Block_Table_Row[];
};
export declare type Block_Table_Row = {
    children?: Block_Table_Cell[];
};
export declare type Block_Table_Cell = {
    children?: Block[];
};
export declare type Block_Widget = {
    name?: string;
    attributes?: Record<string, string>;
    children?: Block[];
};
