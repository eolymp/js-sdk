interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Typewriter {
    private readonly cli;
    constructor(cli: Client);
    UploadAsset(input: UploadAssetInput): Promise<UploadAssetOutput>;
}
export declare type UploadAssetInput = {
    filename?: string;
    data?: string;
};
export declare type UploadAssetOutput = {
    link?: string;
};
export {};
