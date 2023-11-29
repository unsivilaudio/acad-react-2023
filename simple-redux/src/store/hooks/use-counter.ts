import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState } from '@/store';
import { type CounterStore, actions } from '@/store/slices/counter';

export default function useCounter() {
    const dispatch = useDispatch();
    const state = useSelector<RootState, CounterStore>(
        (store) => store.counter,
    );
    if (!state) {
        throw new Error('You must use this hook inside of a Redux store.');
    }

    const counterActions = useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch],
    );

    return { ...state, ...counterActions };
}
