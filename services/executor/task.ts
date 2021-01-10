// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-eolymp for more details.

import {Verifier} from "./verifier"

export type Task = {
    reference?: string;
    origin?: string;
    priority?: number;
    lang?: string;
    source?: string;
    useFileIo?: boolean;
    redirectStderrToStdout?: boolean;
    timeLimit?: number;
    memoryLimit?: number;
    fileSizeLimit?: number;
    verifier?: Verifier;
    runs?: Task_Run[];
}

export type Task_Run = {
    reference?: string;
    debug?: boolean;
    inputObjectId?: string;
    inputContent?: string;
    answerObjectId?: string;
    answerContent?: string;
}

