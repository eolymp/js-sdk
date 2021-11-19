import { Interactor } from "./interactor";
import { Verifier } from "./verifier";
export declare type Task = {
    reference?: string;
    origin?: string;
    priority?: number;
    lang?: string;
    source?: string;
    useFileIo?: boolean;
    redirectStderrToStdout?: boolean;
    constraints?: Task_Constraint[];
    verifier?: Verifier;
    interactor?: Interactor;
    runs?: Task_Run[];
    preconditions?: Task_Precondition[];
};
export declare type Task_Run = {
    reference?: string;
    index?: number;
    debug?: boolean;
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
