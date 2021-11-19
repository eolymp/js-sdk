import { Container } from "../typewriter/block";
export declare type Document = {
    id?: string;
    path?: string;
    locale?: string;
    title?: string;
    content?: Container;
    labels?: string[];
};
