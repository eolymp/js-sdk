interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Typewriter {
    private readonly cli;
    constructor(cli: Client);
    UploadAsset<O>(input: UploadAssetInput, opts?: O): Promise<UploadAssetOutput>;
}
export declare type UploadAssetInput = {
    filename?: string;
    data?: string;
};
export declare type UploadAssetOutput = {
    link?: string;
};
export {};
