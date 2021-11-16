import { Document } from "./document";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Helpdesk {
    private readonly cli;
    constructor(cli: Client);
    DescribeDocument(input: DescribeDocumentInput): Promise<DescribeDocumentOutput>;
    CreateDocument(input: CreateDocumentInput): Promise<CreateDocumentOutput>;
    UpdateDocument(input: UpdateDocumentInput): Promise<UpdateDocumentOutput>;
    DeleteDocument(input: DeleteDocumentInput): Promise<DeleteDocumentOutput>;
}
export declare type DescribeDocumentInput = {
    path?: string;
};
export declare type DescribeDocumentOutput = {
    document?: Document;
};
export declare type CreateDocumentInput = {
    path?: string;
    document?: Document;
};
export declare type CreateDocumentOutput = Record<string, unknown>;
export declare type UpdateDocumentInput = {
    path?: string;
    document?: Document;
};
export declare type UpdateDocumentOutput = Record<string, unknown>;
export declare type DeleteDocumentInput = {
    path?: string;
};
export declare type DeleteDocumentOutput = Record<string, unknown>;
export {};
