import {Client} from "./client"

export class Twirp {
    private readonly client: Client;

    constructor(client: Client) {
        this.client = client
    }

    call(method: string, args: any) {
        return this.client.do("POST", "/twirp/" + method, JSON.stringify(args))
    }
}
