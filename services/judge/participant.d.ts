export declare type Participant = {
    id?: string;
    contestId?: string;
    name?: string;
    users?: Participant_User[];
    userId?: string;
    username?: string;
    status?: string;
    startedAt?: string;
    startedIn?: number;
    endAt?: string;
    endIn?: number;
    completeAt?: string;
    completeIn?: number;
    bonusTime?: number;
    passcode?: string;
    submits?: Participant_Submit[];
};
export declare type Participant_User = {
    userId?: string;
};
export declare type Participant_Submit = {
    problemId?: string;
    counter?: number;
};
