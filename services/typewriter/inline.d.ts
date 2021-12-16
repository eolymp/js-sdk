export declare type Inline = {
    text?: Inline_Text;
    link?: Inline_Link;
    math?: Inline_Math;
    code?: Inline_Code;
    variable?: Inline_Variable;
};
export declare type Inline_Style = {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
};
export declare type Inline_Text = {
    str?: string;
    style?: Inline_Style;
};
export declare type Inline_Link = {
    url?: string;
    children?: Inline[];
};
export declare type Inline_Math = {
    content?: string;
};
export declare type Inline_Code = {
    content?: string;
};
export declare type Inline_Variable = {
    name?: string;
    style?: Inline_Style;
};
