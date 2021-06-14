import { ExpressionBool, ExpressionID, ExpressionString } from "../wellknown/expression";
import { Language } from "./language";
import { Runtime } from "./runtime";
import { Task } from "./task";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Executor {
    private readonly cli;
    constructor(cli: Client);
    DescribeLanguage(input: DescribeLanguageInput): Promise<DescribeLanguageOutput>;
    ListLanguages(input: ListLanguagesInput): Promise<ListLanguagesOutput>;
    DescribeRuntime(input: DescribeRuntimeInput): Promise<DescribeRuntimeOutput>;
    ListRuntime(input: ListRuntimeInput): Promise<ListRuntimeOutput>;
    DescribeCodeTemplate(input: DescribeCodeTemplateInput): Promise<DescribeCodeTemplateOutput>;
}
export declare type CreateTaskInput = {
    task?: Task;
};
export declare type CreateTaskOutput = Record<string, unknown>;
export declare type DescribeLanguageInput = {
    languageId?: string;
};
export declare type DescribeLanguageOutput = {
    language?: Language;
};
export declare type ListLanguagesInput = {
    filters?: ListLanguagesInput_Filter;
};
export declare type ListLanguagesInput_Filter = {
    id?: ExpressionID[];
    name?: ExpressionString[];
    deprecated?: ExpressionBool[];
};
export declare type ListLanguagesOutput = {
    items?: Language[];
};
export declare type DescribeRuntimeInput = {
    runtimeId?: string;
};
export declare type DescribeRuntimeOutput = {
    runtime?: Runtime;
};
export declare type ListRuntimeInput = {
    filters?: ListRuntimeInput_Filter;
};
export declare type ListRuntimeInput_Filter = {
    id?: ExpressionID[];
    lang?: ExpressionID[];
    version?: ExpressionID[];
    name?: ExpressionString[];
    deprecated?: ExpressionBool[];
};
export declare type ListRuntimeOutput = {
    items?: Runtime[];
};
export declare type DescribeCodeTemplateInput = {
    runtimeId?: string;
};
export declare type DescribeCodeTemplateOutput = {
    template?: string;
};
export {};
