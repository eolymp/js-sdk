interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Keeper {
    private readonly cli;
    constructor(cli: Client);
    CreateObject(input: CreateObjectInput): Promise<CreateObjectOutput>;
    DescribeObject(input: DescribeObjectInput): Promise<DescribeObjectOutput>;
    DownloadObject(input: DownloadObjectInput): Promise<DownloadObjectOutput>;
}
export declare type CreateObjectInput = {
    data?: string;
};
export declare type CreateObjectOutput = {
    key?: string;
};
export declare type DescribeObjectInput = {
    key?: string;
};
export declare type DescribeObjectOutput = {
    size?: number;
};
export declare type DownloadObjectInput = {
    key?: string;
    offset?: number;
    size?: number;
};
export declare type DownloadObjectOutput = {
    data?: string;
    size?: number;
};
export {};
