interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Keeper {
    private readonly cli;
    constructor(cli: Client);
    CreateObject<O>(input: CreateObjectInput, opts?: O): Promise<CreateObjectOutput>;
    DescribeObject<O>(input: DescribeObjectInput, opts?: O): Promise<DescribeObjectOutput>;
    DownloadObject<O>(input: DownloadObjectInput, opts?: O): Promise<DownloadObjectOutput>;
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
