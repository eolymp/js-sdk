export declare type ErrorReport = {
    reportId?: string;
};
export declare type InvalidArgument = {
    argumentPath?: string;
    validation?: Validation[];
};
export declare type Validation = {
    argumentPath?: string[];
    errorMessage?: string;
    localization?: ErrorLocalization;
};
export declare type QuotaExceeded = {
    quota?: number;
    usage?: number;
};
export declare type ErrorLocalization = {
    phraseKey?: string;
    phraseParams?: Record<string, string>;
};
