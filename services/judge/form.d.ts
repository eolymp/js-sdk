export declare type Form = {
    fields?: Form_Field[];
};
export declare type Form_Field = {
    id?: string;
    description?: Form_Field_Description[];
    type?: string;
    required?: boolean;
    regexp?: string;
    min?: number;
    max?: number;
    choices?: string[];
};
export declare type Form_Field_Description = {
    default?: boolean;
    locale?: string;
    label?: string;
    help?: string;
    choices?: string[];
};
export declare type Registration = {
    data?: Registration_Data[];
};
export declare type Registration_Data = {
    fieldId?: string;
    value?: string;
};
