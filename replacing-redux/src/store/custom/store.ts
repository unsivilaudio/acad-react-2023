import { useState, useEffect } from 'react';

type Listener<T> = React.Dispatch<React.SetStateAction<T>>;
type Action<S> = (obj: S, pay: object) => S;

let globalState = {} as any;
let listeners: Listener<any>[] = [];
let actions = {} as any;

export const useStore = <Store, Actions>() => {
    const setState = useState<Store>(globalState as Store)[1];

    function dispatch(actionIdentifier: keyof Actions, actionPayload: any) {
        const newState: Store = actions[actionIdentifier](
            globalState,
            actionPayload,
        );
        globalState = { ...globalState, ...newState };

        for (const listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners = listeners.filter((li) => li !== setState);
        };
    }, [setState]);

    return [globalState, dispatch] as [Store, typeof dispatch];
};

export const initStore = <T, V extends typeof globalState>(
    userActions: T,
    initialState: V,
) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }

    actions = { ...actions, ...userActions };
};
