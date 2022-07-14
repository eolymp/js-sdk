export declare type Space = {
    id?: string;
    key?: string;
    name?: string;
    image?: string;
    type?: string;
    plan?: string;
    visibility?: string;
    membership?: string;
    minTeamSize?: number;
    maxTeamSize?: number;
};
export declare type Space_Quota = {
    problemsPerSpace?: number;
    membersPerSpace?: number;
    contestsPerSpace?: number;
    activeContestsPerSpace?: number;
    scoreboardsPerSpace?: number;
    permissionsPerSpace?: number;
    attributesPerSpace?: number;
    problemsPerContest?: number;
    participantsPerContest?: number;
};
