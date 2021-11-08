export declare type Member = {
    id?: string;
    name?: string;
    disabled?: boolean;
    users?: Member_User[];
    values?: Member_Value[];
};
export declare type Member_User = {
    userId?: string;
};
export declare type Member_Value = {
    attribute?: string;
    valueString?: string;
    valueNumber?: number;
};
