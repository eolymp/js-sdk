export declare type Leaf = {
    text?: Text;
    link?: Link;
    ref?: Ref;
    variable?: Variable;
};
export declare type Style = {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    fixed?: boolean;
    math?: boolean;
};
export declare type Text = {
    str?: string;
    style?: Style;
};
export declare type Link = {
    url?: string;
    children?: Leaf[];
};
export declare type Ref = {
    ref?: string;
    children?: Leaf[];
};
export declare type Variable = {
    name?: string;
    style?: Style;
};
