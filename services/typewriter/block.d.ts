import { Leaf } from "./leaf";
export declare type Block = {
    paragraph?: Paragraph;
    layout?: Layout;
    code?: Code;
    math?: Math;
    image?: Image;
    heading?: Heading;
    list?: List;
    embed?: Embed;
    comment?: Comment;
};
export declare type Container = {
    children?: Block[];
};
export declare type Paragraph = {
    children?: Leaf[];
};
export declare type Layout = {
    direction?: string;
    alignItems?: string;
    alignContent?: string;
    justifyItems?: string;
    justifyContent?: string;
    gap?: number;
    padding?: number[];
    children?: Container[];
};
export declare type List = {
    style?: string;
    children?: Container[];
};
export declare type Image = {
    src?: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
};
export declare type Heading = {
    level?: number;
    children?: Leaf[];
};
export declare type Math = {
    content?: string;
};
export declare type Code = {
    lang?: string;
    content?: string;
};
export declare type Comment = {
    content?: string;
};
export declare type Embed = {
    path?: string;
    values?: Embed_Value[];
};
export declare type Embed_Value = {
    name?: string;
    value?: string;
};
