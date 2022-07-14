"use strict";
// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atlas = void 0;
class Atlas {
    constructor(cli) {
        this.cli = cli;
    }
    CreateProblem(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateProblem", input, opts);
    }
    DeleteProblem(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteProblem", input, opts);
    }
    ListProblems(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListProblems", input, opts);
    }
    DescribeProblem(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeProblem", input, opts);
    }
    UpdateVisibility(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateVisibility", input, opts);
    }
    UpdatePrivacy(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdatePrivacy", input, opts);
    }
    ListExamples(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListExamples", input, opts);
    }
    UpdateVerifier(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateVerifier", input, opts);
    }
    DescribeVerifier(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeVerifier", input, opts);
    }
    UpdateInteractor(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateInteractor", input, opts);
    }
    DescribeInteractor(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeInteractor", input, opts);
    }
    CreateStatement(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateStatement", input, opts);
    }
    UpdateStatement(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateStatement", input, opts);
    }
    DeleteStatement(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteStatement", input, opts);
    }
    ListStatements(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListStatements", input, opts);
    }
    DescribeStatement(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeStatement", input, opts);
    }
    CreateTestset(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateTestset", input, opts);
    }
    UpdateTestset(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateTestset", input, opts);
    }
    DeleteTestset(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteTestset", input, opts);
    }
    ListTestsets(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListTestsets", input, opts);
    }
    DescribeTestset(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeTestset", input, opts);
    }
    CreateTest(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateTest", input, opts);
    }
    UpdateTest(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateTest", input, opts);
    }
    DeleteTest(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteTest", input, opts);
    }
    ListTests(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListTests", input, opts);
    }
    DescribeTest(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeTest", input, opts);
    }
    GrantPermission(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/GrantPermission", input, opts);
    }
    RevokePermission(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/RevokePermission", input, opts);
    }
    ListPermissions(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListPermissions", input, opts);
    }
    CreateCodeTemplate(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateCodeTemplate", input, opts);
    }
    UpdateCodeTemplate(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateCodeTemplate", input, opts);
    }
    DeleteCodeTemplate(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteCodeTemplate", input, opts);
    }
    ListCodeTemplates(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListCodeTemplates", input, opts);
    }
    DescribeCodeTemplate(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeCodeTemplate", input, opts);
    }
    CreateAttachment(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateAttachment", input, opts);
    }
    UpdateAttachment(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateAttachment", input, opts);
    }
    DeleteAttachment(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteAttachment", input, opts);
    }
    ListAttachments(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListAttachments", input, opts);
    }
    DescribeAttachment(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeAttachment", input, opts);
    }
    DescribeChange(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeChange", input, opts);
    }
    ListChanges(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListChanges", input, opts);
    }
    ListProblemTop(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListProblemTop", input, opts);
    }
    DescribeProblemGrading(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeProblemGrading", input, opts);
    }
    CreateSolution(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateSolution", input, opts);
    }
    UpdateSolution(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateSolution", input, opts);
    }
    DeleteSolution(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteSolution", input, opts);
    }
    ListSolutions(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListSolutions", input, opts);
    }
    DescribeSolution(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeSolution", input, opts);
    }
    PublishSolution(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/PublishSolution", input, opts);
    }
    UnpublishSolution(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UnpublishSolution", input, opts);
    }
    ApproveSolution(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ApproveSolution", input, opts);
    }
    RefuseSolution(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/RefuseSolution", input, opts);
    }
    CreateCategory(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateCategory", input, opts);
    }
    UpdateCategory(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateCategory", input, opts);
    }
    DeleteCategory(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteCategory", input, opts);
    }
    ListCategories(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/ListCategories", input, opts);
    }
    DescribeCategory(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeCategory", input, opts);
    }
    AssignCategory(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/AssignCategory", input, opts);
    }
    UnassignCategory(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/UnassignCategory", input, opts);
    }
    CreateSubmission(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/CreateSubmission", input, opts);
    }
    DescribeSubmission(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeSubmission", input, opts);
    }
    DescribeScore(input, opts) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeScore", input, opts);
    }
}
exports.Atlas = Atlas;
//# sourceMappingURL=atlas.js.map