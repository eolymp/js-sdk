import { Interactor } from "../executor/interactor";
import { Verifier } from "../executor/verifier";
import { Permission } from "./permission";
import { Problem } from "./problem";
import { Statement } from "./statement";
import { Template } from "./template";
import { Test } from "./test";
import { Testset } from "./testset";
export declare type Change = {
    id?: string;
    timestamp?: string;
    ipAddress?: string;
    userId?: string;
    problemId?: string;
    createProblem?: Change_CreateProblem;
    updateProblem?: Change_UpdateProblem;
    updateVerifier?: Change_UpdateVerifier;
    updateInteractor?: Change_UpdateInteractor;
    deleteProblem?: Change_DeleteProblem;
    createStatement?: Change_CreateStatement;
    updateStatement?: Change_UpdateStatement;
    deleteStatement?: Change_DeleteStatement;
    createTestset?: Change_CreateTestset;
    updateTestset?: Change_UpdateTestset;
    deleteTestset?: Change_DeleteTestset;
    createTest?: Change_CreateTest;
    updateTest?: Change_UpdateTest;
    deleteTest?: Change_DeleteTest;
    createTemplate?: Change_CreateTemplate;
    updateTemplate?: Change_UpdateTemplate;
    deleteTemplate?: Change_DeleteTemplate;
    grantPermission?: Change_GrantPermission;
    revokePermission?: Change_RevokePermission;
};
export declare type Change_CreateProblem = {
    after?: Problem;
};
export declare type Change_UpdateProblem = {
    before?: Problem;
    after?: Problem;
};
export declare type Change_UpdateVerifier = {
    before?: Verifier;
    after?: Verifier;
};
export declare type Change_UpdateInteractor = {
    before?: Interactor;
    after?: Interactor;
};
export declare type Change_DeleteProblem = {
    before?: Problem;
};
export declare type Change_CreateStatement = {
    after?: Statement;
};
export declare type Change_UpdateStatement = {
    before?: Statement;
    after?: Statement;
};
export declare type Change_DeleteStatement = {
    before?: Statement;
};
export declare type Change_CreateTestset = {
    after?: Testset;
};
export declare type Change_UpdateTestset = {
    before?: Testset;
    after?: Testset;
};
export declare type Change_DeleteTestset = {
    before?: Testset;
};
export declare type Change_CreateTest = {
    after?: Test;
};
export declare type Change_UpdateTest = {
    before?: Test;
    after?: Test;
};
export declare type Change_DeleteTest = {
    before?: Test;
};
export declare type Change_CreateTemplate = {
    after?: Template;
};
export declare type Change_UpdateTemplate = {
    before?: Template;
    after?: Template;
};
export declare type Change_DeleteTemplate = {
    before?: Template;
};
export declare type Change_GrantPermission = {
    after?: Permission;
};
export declare type Change_RevokePermission = {
    before?: Permission;
};
