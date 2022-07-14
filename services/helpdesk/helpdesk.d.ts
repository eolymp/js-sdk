import { ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression";
import { Document } from "./document";
interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Helpdesk {
    private readonly cli;
    constructor(cli: Client);
    DescribeDocument<O>(input: DescribeDocumentInput, opts?: O): Promise<DescribeDocumentOutput>;
    ListDocuments<O>(input: ListDocumentsInput, opts?: O): Promise<ListDocumentsOutput>;
    CreateDocument<O>(input: CreateDocumentInput, opts?: O): Promise<CreateDocumentOutput>;
    UpdateDocument<O>(input: UpdateDocumentInput, opts?: O): Promise<UpdateDocumentOutput>;
    DeleteDocument<O>(input: DeleteDocumentInput, opts?: O): Promise<DeleteDocumentOutput>;
    DescribePath<O>(input: DescribePathInput, opts?: O): Promise<DescribePathOutput>;
    ListPaths<O>(input: ListPathsInput, opts?: O): Promise<ListPathsOutput>;
    ListParents<O>(input: ListParentsInput, opts?: O): Promise<ListParentsOutput>;
}
export declare type DescribeDocumentInput = {
    documentId?: string;
};
export declare type DescribeDocumentOutput = {
    document?: Document;
};
export declare type ListDocumentsInput = {
    offset?: number;
    size?: number;
    filters?: ListDocumentsInput_Filter;
};
export declare type ListDocumentsInput_Filter = {
    query?: string;
    id?: ExpressionID[];
    path?: ExpressionString[];
    locale?: ExpressionEnum[];
};
export declare type ListDocumentsOutput = {
    total?: number;
    items?: Document[];
};
export declare type CreateDocumentInput = {
    document?: Document;
};
export declare type CreateDocumentOutput = {
    documentId?: string;
};
export declare type UpdateDocumentInput = {
    documentId?: string;
    document?: Document;
};
export declare type UpdateDocumentOutput = Record<string, unknown>;
export declare type DeleteDocumentInput = {
    documentId?: string;
};
export declare type DeleteDocumentOutput = Record<string, unknown>;
export declare type DescribePathInput = {
    path?: string;
    preferredLocales?: string[];
};
export declare type DescribePathOutput = {
    document?: Document;
};
export declare type ListPathsInput = {
    preferredLocales?: string[];
    offset?: number;
    size?: number;
    filters?: ListPathsInput_Filter;
};
export declare type ListPathsInput_Filter = {
    query?: string;
    path?: ExpressionString[];
    label?: ExpressionEnum[];
};
export declare type ListPathsOutput = {
    total?: number;
    items?: Document[];
};
export declare type ListParentsInput = {
    path?: string;
    preferredLocales?: string[];
};
export declare type ListParentsOutput = {
    total?: number;
    items?: Document[];
};
export {};
