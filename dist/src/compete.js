"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compete = void 0;
var Compete = /** @class */ (function () {
    function Compete(twirp) {
        this.twirp = twirp;
    }
    Compete.prototype.CreateContest = function (input) {
        return this.twirp.call("eolymp.compete.Compete/CreateContest", input);
    };
    Compete.prototype.ImportProblem = function (input) {
        return this.twirp.call("eolymp.compete.Compete/ImportProblem", input);
    };
    Compete.prototype.DeleteProblem = function (input) {
        return this.twirp.call("eolymp.compete.Compete/DeleteProblem", input);
    };
    Compete.prototype.SyncProblem = function (input) {
        return this.twirp.call("eolymp.compete.Compete/SyncProblem", input);
    };
    Compete.prototype.StartContest = function (input) {
        return this.twirp.call("eolymp.compete.Compete/StartContest", input);
    };
    Compete.prototype.CreateSubmission = function (input) {
        return this.twirp.call("eolymp.compete.Compete/CreateSubmission", input);
    };
    Compete.prototype.DescribeSubmission = function (input) {
        return this.twirp.call("eolymp.compete.Compete/DescribeSubmission", input);
    };
    Compete.prototype.DescribeContest = function (input) {
        return this.twirp.call("eolymp.compete.Compete/DescribeContest", input);
    };
    Compete.prototype.ListContests = function (input) {
        return this.twirp.call("eolymp.compete.Compete/ListContests", input);
    };
    Compete.prototype.ListProblems = function (input) {
        return this.twirp.call("eolymp.compete.Compete/ListProblems", input);
    };
    Compete.prototype.ListParticipants = function (input) {
        return this.twirp.call("eolymp.compete.Compete/ListParticipants", input);
    };
    Compete.prototype.ListSubmissions = function (input) {
        return this.twirp.call("eolymp.compete.Compete/ListSubmissions", input);
    };
    return Compete;
}());
exports.Compete = Compete;
//# sourceMappingURL=compete.js.map