import type { ListenerMiddleware } from '@reduxjs/toolkit';
import { actions as UIActions } from '@/store/slices/ui';

const cartAsyncNotify: ListenerMiddleware = (store) => (next) => (action) => {
    if (action.type === 'cart/putCart/pending') {
        store.dispatch(
            UIActions.setNotification({
                status: 'pending',
                message: 'Updating cart data....',
                title: 'Sending',
            }),
        );
    }
    if (action.type === 'cart/putCart/fulfilled') {
        store.dispatch(
            UIActions.setNotification({
                status: 'success',
                message: 'Cart sucessfully updated.',
                title: 'Success',
            }),
        );
    }
    if (action.type === 'cart/putCart/rejected') {
        store.dispatch(
            UIActions.setNotification({
                status: 'error',
                message: 'Sending cart data failed.',
                title: 'Error!',
            }),
        );
    }

    return next(action);
};

export default cartAsyncNotify;
