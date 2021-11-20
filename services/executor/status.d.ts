export declare type Status = {
    reference?: string;
    origin?: string;
    type?: string;
    error?: string;
    failure?: string;
    runs?: Status_Run[];
    signature?: string;
    version?: number;
    agent?: string;
};
export declare type Status_Run = {
    reference?: string;
    status?: string;
    score?: number;
    cost?: number;
    wallTimeUsage?: number;
    wallTimeLimit?: number;
    cpuTimeUsage?: number;
    cpuTimeLimit?: number;
    memoryUsage?: number;
    memoryLimit?: number;
    exitCode?: number;
    signal?: number;
    output?: string;
    stderr?: string;
    verifierLog?: string;
    interactorLog?: string;
};
