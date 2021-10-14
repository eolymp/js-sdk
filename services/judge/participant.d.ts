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
    completeAt?: string;
    completeIn?: number;
    bonusTime?: number;
    passcode?: string;
};
export declare type Participant_User = {
    userId?: string;
};
