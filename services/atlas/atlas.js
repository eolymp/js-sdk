"use strict";
// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atlas = void 0;
class Atlas {
    constructor(cli) {
        this.cli = cli;
    }
    CreateProblem(input) {
        return this.cli.call("eolymp.atlas.Atlas/CreateProblem", input);
    }
    DeleteProblem(input) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteProblem", input);
    }
    ListProblems(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListProblems", input);
    }
    DescribeProblem(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeProblem", input);
    }
    UpdateVisibility(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateVisibility", input);
    }
    UpdatePrivacy(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdatePrivacy", input);
    }
    ListExamples(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListExamples", input);
    }
    UpdateVerifier(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateVerifier", input);
    }
    DescribeVerifier(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeVerifier", input);
    }
    UpdateInteractor(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateInteractor", input);
    }
    DescribeInteractor(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeInteractor", input);
    }
    CreateStatement(input) {
        return this.cli.call("eolymp.atlas.Atlas/CreateStatement", input);
    }
    UpdateStatement(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateStatement", input);
    }
    DeleteStatement(input) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteStatement", input);
    }
    ListStatements(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListStatements", input);
    }
    DescribeStatement(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeStatement", input);
    }
    CreateTestset(input) {
        return this.cli.call("eolymp.atlas.Atlas/CreateTestset", input);
    }
    UpdateTestset(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateTestset", input);
    }
    DeleteTestset(input) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteTestset", input);
    }
    ListTestsets(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListTestsets", input);
    }
    DescribeTestset(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeTestset", input);
    }
    CreateTest(input) {
        return this.cli.call("eolymp.atlas.Atlas/CreateTest", input);
    }
    UpdateTest(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateTest", input);
    }
    DeleteTest(input) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteTest", input);
    }
    ListTests(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListTests", input);
    }
    DescribeTest(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeTest", input);
    }
    GrantPermission(input) {
        return this.cli.call("eolymp.atlas.Atlas/GrantPermission", input);
    }
    RevokePermission(input) {
        return this.cli.call("eolymp.atlas.Atlas/RevokePermission", input);
    }
    ListPermissions(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListPermissions", input);
    }
    CreateCodeTemplate(input) {
        return this.cli.call("eolymp.atlas.Atlas/CreateCodeTemplate", input);
    }
    UpdateCodeTemplate(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateCodeTemplate", input);
    }
    DeleteCodeTemplate(input) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteCodeTemplate", input);
    }
    ListCodeTemplates(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListCodeTemplates", input);
    }
    DescribeCodeTemplate(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeCodeTemplate", input);
    }
    DescribeChange(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeChange", input);
    }
    ListChanges(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListChanges", input);
    }
    ListProblemTop(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListProblemTop", input);
    }
    DescribeProblemGrading(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeProblemGrading", input);
    }
    CreateSolution(input) {
        return this.cli.call("eolymp.atlas.Atlas/CreateSolution", input);
    }
    UpdateSolution(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateSolution", input);
    }
    DeleteSolution(input) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteSolution", input);
    }
    ListSolutions(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListSolutions", input);
    }
    DescribeSolution(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeSolution", input);
    }
    PublishSolution(input) {
        return this.cli.call("eolymp.atlas.Atlas/PublishSolution", input);
    }
    UnpublishSolution(input) {
        return this.cli.call("eolymp.atlas.Atlas/UnpublishSolution", input);
    }
    ApproveSolution(input) {
        return this.cli.call("eolymp.atlas.Atlas/ApproveSolution", input);
    }
    RefuseSolution(input) {
        return this.cli.call("eolymp.atlas.Atlas/RefuseSolution", input);
    }
    CreateCategory(input) {
        return this.cli.call("eolymp.atlas.Atlas/CreateCategory", input);
    }
    UpdateCategory(input) {
        return this.cli.call("eolymp.atlas.Atlas/UpdateCategory", input);
    }
    DeleteCategory(input) {
        return this.cli.call("eolymp.atlas.Atlas/DeleteCategory", input);
    }
    ListCategories(input) {
        return this.cli.call("eolymp.atlas.Atlas/ListCategories", input);
    }
    DescribeCategory(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeCategory", input);
    }
    AssignCategory(input) {
        return this.cli.call("eolymp.atlas.Atlas/AssignCategory", input);
    }
    UnassignCategory(input) {
        return this.cli.call("eolymp.atlas.Atlas/UnassignCategory", input);
    }
    CreateSubmission(input) {
        return this.cli.call("eolymp.atlas.Atlas/CreateSubmission", input);
    }
    DescribeSubmission(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeSubmission", input);
    }
    DescribeScore(input) {
        return this.cli.call("eolymp.atlas.Atlas/DescribeScore", input);
    }
}
exports.Atlas = Atlas;
//# sourceMappingURL=atlas.js.map