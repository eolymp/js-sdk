import { Twirp } from "./twirp";
export declare class Cognito {
    private readonly twirp;
    constructor(twirp: Twirp);
    IntrospectUser(): Promise<any>;
}
