import React, {useContext, useEffect, useState} from "react";
import {SDK} from "./sdk";
import {Client} from "./client";

const Context = React.createContext({});

type BackendProps = {
    url: string,
    children: any,
}

// Backend is high-level component to provide Backend context to other components
export function Backend(props: BackendProps) {
    const [sdk, setSDK] = useState(new SDK(new Client(props.url)));

    useEffect(() => {
        setSDK(new SDK(new Client(props.url)));
    }, [props.url]);

    return (<Context.Provider value={sdk}>{props.children}</Context.Provider>)
}

// useBackend helps to get backend from context
export function useBackend(): SDK {
    return useContext(Context) as SDK
}
