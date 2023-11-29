import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { type CartStore, actions } from '@/store/slices/cart';
import { RootState } from '@/store';

export default function useCart() {
    const dispatch = useDispatch();
    const state = useSelector<RootState, CartStore>((state) => state.cart);

    const cartActions = useMemo(
        () => bindActionCreators(actions, dispatch),
        [dispatch],
    );

    return { ...state, ...cartActions };
}
