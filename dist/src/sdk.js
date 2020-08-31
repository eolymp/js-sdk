"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = void 0;
var executor_1 = require("./executor");
var cognito_1 = require("./cognito");
var compete_1 = require("./compete");
var oauth_1 = require("./oauth");
var twirp_1 = require("./twirp");
var SDK = /** @class */ (function () {
    function SDK(client) {
        var _this = this;
        this.client = client;
        this.twirp = new twirp_1.Twirp(this.client);
        this.executor = new executor_1.Executor(this.twirp);
        this.cognito = new cognito_1.Cognito(this.twirp);
        this.compete = new compete_1.Compete(this.twirp);
        this.oauth = new oauth_1.OAuth(this.client);
        // make graphql query
        this.graphql = function (query, variables) {
            return _this.client.do("POST", "/graphql", JSON.stringify({ query: query, variables: variables }));
        };
        // shortcut to set token
        this.token = function (token) {
            _this.client.setAccessToken(token ? token : "");
        };
    }
    return SDK;
}());
exports.SDK = SDK;
//# sourceMappingURL=sdk.js.map