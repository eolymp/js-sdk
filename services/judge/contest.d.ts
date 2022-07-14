export declare type Contest = {
    id?: string;
    name?: string;
    startsAt?: string;
    startsIn?: number;
    endsAt?: string;
    endsIn?: number;
    duration?: number;
    status?: string;
    visibility?: string;
    participationMode?: string;
    format?: string;
    domain?: string;
    spaceId?: string;
};
export declare type Contest_Appearance = {
    title?: string;
    tagline?: string;
    logoImage?: string;
    primaryColor?: string;
    secondaryColor?: string;
};
export declare type Contest_Scoring = {
    showScoreboard?: boolean;
    attemptPenalty?: number;
    freezingTime?: number;
};
