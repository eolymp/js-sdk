import { Interactor } from "./interactor";
import { Verifier } from "./verifier";
export declare type Task = {
    reference?: string;
    origin?: string;
    priority?: number;
    lang?: string;
    runtime?: string;
    source?: string;
    useFileIo?: boolean;
    redirectStderrToStdout?: boolean;
    useWorkspaceArchive?: boolean;
    preconditions?: Task_Precondition[];
    constraints?: Task_Constraint[];
    verifier?: Verifier;
    interactor?: Interactor;
    runs?: Task_Run[];
};
export declare type Task_Run = {
    reference?: string;
    index?: number;
    debug?: boolean;
    cost?: number;
    labels?: string[];
    inputObjectId?: string;
    inputContent?: string;
    answerObjectId?: string;
    answerContent?: string;
};
export declare type Task_Precondition = {
    selector?: string[];
    dependsOn?: string[];
    stopOnFailure?: boolean;
    maxExecutionTime?: number;
};
export declare type Task_Constraint = {
    selector?: string[];
    wallTimeLimit?: number;
    cpuTimeLimit?: number;
    memoryLimit?: number;
    fileSizeLimit?: number;
};
