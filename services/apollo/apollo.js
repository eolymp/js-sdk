"use strict";
// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apollo = void 0;
class Apollo {
    constructor(cli) {
        this.cli = cli;
    }
    CreateSubmission(input) {
        return this.cli.call("eolymp.apollo.Apollo/CreateSubmission", input);
    }
    DescribeSubmission(input) {
        return this.cli.call("eolymp.apollo.Apollo/DescribeSubmission", input);
    }
}
exports.Apollo = Apollo;
//# sourceMappingURL=apollo.js.map