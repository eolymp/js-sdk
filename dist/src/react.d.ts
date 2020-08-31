/// <reference types="react" />
import { SDK } from "./sdk";
declare type BackendProps = {
    url: string;
    children: any;
};
export declare function Backend(props: BackendProps): JSX.Element;
export declare function useBackend(): SDK;
export {};
