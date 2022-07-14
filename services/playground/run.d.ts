export declare type Run = {
    id?: string;
    lang?: string;
    source?: string;
    input?: string;
    status?: string;
    error?: string;
    exitCode?: number;
    signal?: number;
    wallTimeUsage?: number;
    cpuTimeUsage?: number;
    memoryUsage?: number;
    output?: string;
};
