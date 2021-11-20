import { ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression";
import { Document } from "./document";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Helpdesk {
    private readonly cli;
    constructor(cli: Client);
    DescribeDocument(input: DescribeDocumentInput): Promise<DescribeDocumentOutput>;
    ListDocuments(input: ListDocumentsInput): Promise<ListDocumentsOutput>;
    CreateDocument(input: CreateDocumentInput): Promise<CreateDocumentOutput>;
    UpdateDocument(input: UpdateDocumentInput): Promise<UpdateDocumentOutput>;
    DeleteDocument(input: DeleteDocumentInput): Promise<DeleteDocumentOutput>;
    DescribePath(input: DescribePathInput): Promise<DescribePathOutput>;
    ListPaths(input: ListPathsInput): Promise<ListPathsOutput>;
    ListParents(input: ListParentsInput): Promise<ListParentsOutput>;
}
export declare type DescribeDocumentInput = {
    documentId?: string;
};
export declare type DescribeDocumentOutput = {
    document?: Document;
};
export declare type ListDocumentsInput = {
    searchQuery?: string;
    offset?: number;
    size?: number;
    filters?: ListDocumentsInput_Filter;
};
export declare type ListDocumentsInput_Filter = {
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
