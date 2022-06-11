export declare type Member = {
    id?: string;
    name?: string;
    disabled?: boolean;
    registered?: boolean;
    staffed?: boolean;
    ghost?: boolean;
    status?: string;
    users?: Member_User[];
    values?: Member_Value[];
};
export declare type Member_User = {
    userId?: string;
};
export declare type Member_Value = {
    attributeKey?: string;
    valueString?: string;
    valueNumber?: number;
};
