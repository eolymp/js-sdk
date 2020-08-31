import {Executor} from "./executor";
import {Cognito} from "./cognito";
import {Compete} from "./compete";
import {OAuth} from "./oauth";
import {Client} from "./client";
import {Twirp} from "./twirp";

export class SDK {
    public readonly executor: Executor;
    public readonly cognito: Cognito;
    public readonly compete: Compete;
    public readonly oauth: OAuth;
    public readonly graphql: (query: string, variables: any) => Promise<any>;
    public readonly token: (token: string|null) => void;

    private readonly client: Client;
    private readonly twirp: Twirp;

    constructor(client: Client) {
        this.client = client;
        this.twirp = new Twirp(this.client);
        this.executor = new Executor(this.twirp);
        this.cognito = new Cognito(this.twirp);
        this.compete = new Compete(this.twirp);
        this.oauth = new OAuth(this.client);

        // make graphql query
        this.graphql = (query, variables) => {
            return this.client.do("POST", "/graphql", JSON.stringify({query, variables}))
        };

        // shortcut to set token
        this.token = (token) => {
            this.client.setAccessToken(token ? token : "");
        };
    }
}
