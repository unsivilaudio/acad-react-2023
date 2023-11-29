import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/store';
import { type AuthStore, actions } from '@/store/slices/auth';

export default function useAuth() {
    const dispatch = useDispatch();
    const state = useSelector<RootState, AuthStore>((store) => store.auth);

    if (!state) {
        throw new Error('You must use this hook inside of a Redux store.');
    }

    const authActions = useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch],
    );

    return { ...state, ...authActions };
}
