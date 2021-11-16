export declare type Content = {
    text?: Text;
    paragraph?: Paragraph;
    enumerate?: Enumerate;
    image?: Image;
    style?: Style;
    link?: Link;
    ref?: Ref;
    header?: Header;
    math?: Math;
    flex?: Flex;
    code?: Code;
    embed?: Embed;
    variable?: Variable;
    comment?: Comment;
};
export declare type Text = {
    str?: string;
};
export declare type Paragraph = {
    children?: Content[];
};
export declare type Enumerate = {
    style?: string;
    children?: Content[];
};
export declare type Image = {
    src?: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
};
export declare type Style = {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    children?: Content[];
};
export declare type Link = {
    url?: string;
    children?: Content[];
};
export declare type Ref = {
    ref?: string;
    children?: Content[];
};
export declare type Header = {
    level?: number;
    children?: Content[];
};
export declare type Math = {
    inline?: boolean;
    content?: string;
};
export declare type Flex = {
    direction?: string;
    alignItems?: string;
    alignContent?: string;
    justifyItems?: string;
    justifyContent?: string;
    gap?: number;
    padding?: number[];
    children?: Content[];
};
export declare type Code = {
    inline?: boolean;
    lang?: string;
    content?: string;
};
export declare type Variable = {
    name?: string;
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
