"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executor = void 0;
var Executor = /** @class */ (function () {
    function Executor(twirp) {
        this.twirp = twirp;
    }
    Executor.prototype.CreateTask = function (input) {
        return this.twirp.call("eolymp.executor.Executor/CreateTask", input);
    };
    Executor.prototype.DescribeTask = function (input) {
        return this.twirp.call("eolymp.executor.Executor/DescribeTask", input);
    };
    return Executor;
}());
exports.Executor = Executor;
//# sourceMappingURL=executor.js.map