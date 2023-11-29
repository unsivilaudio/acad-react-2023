import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { type UIStore, actions } from '@/store/slices/ui';
import { RootState } from '@/store';

export default function useUI() {
    const dispatch = useDispatch();
    const state = useSelector<RootState, UIStore>((state) => state.ui);

    const uiActions = useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch],
    );

    return { ...state, ...uiActions };
}
