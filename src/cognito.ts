import {Twirp} from "./twirp"

export class Cognito {
    private readonly twirp: Twirp;

    constructor(twirp: Twirp) {
        this.twirp = twirp
    }

    IntrospectUser() {
        return this.twirp.call("eolymp.cognito.Service/IntrospectUser", {})
    }
}