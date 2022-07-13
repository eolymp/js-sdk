export declare type Project = {
    ern?: string;
    id?: string;
    name?: string;
    runtime?: string;
    visibility?: string;
    authorId?: string;
    createdOn?: string;
    updatedOn?: string;
    target?: Project_Target;
    labels?: string[];
};
export declare type Project_Target = {
    spaceId?: string;
    problemId?: string;
};
