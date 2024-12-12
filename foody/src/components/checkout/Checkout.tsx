import { type SyntheticEvent, type ReactNode, useActionState } from 'react';

import { useCartCtx } from '@/context/cart-context';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';
import useHttp from '@/hooks/use-http';

type CustomerFormValues = {
    name: string;
    email: string;
    street: string;
    'postal-code': string;
    city: string;
};

const requestConfig = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
};

export default function Checkout() {
    const { progress, closeCart, clearCart, cart } = useCartCtx();
    const { data, error, sendRequest, clearData } = useHttp(
        'http://localhost:8080/orders',
        requestConfig,
    );

    async function checkoutAction(_prevState: FormData, fd: FormData) {
        const customerData = Object.fromEntries(fd) as CustomerFormValues;
        await sendRequest(
            JSON.stringify({
                order: {
                    items: cart.items,
                    customer: customerData,
                },
            }),
        );
        return fd;
    }

    const [_formState, formAction, pending] = useActionState<
        FormData,
        FormData
    >(checkoutAction, new FormData());

    function handleSuccessClose() {
        clearCart();
        clearData();
    }

    let actions: ReactNode = (
        <>
            <Button variant='text-dark' type='button' onClick={closeCart}>
                Cancel
            </Button>
            <Button>Submit Order</Button>
        </>
    );

    if (pending) {
        actions = <span className='pr-4'>Sending order data...</span>;
    }

    if (data && !error) {
        return (
            <Modal open={progress === 'checkout'} onClose={handleSuccessClose}>
                <div className='space-y-4'>
                    <h2 className='font-title text-2xl font-bold'>Success!</h2>
                    <p>Your order was submitted sucessfully.</p>
                    <p>
                        We will get back to you with more details via email with
                        the next few minutes.
                    </p>
                    <div className='flex justify-end gap-4'>
                        <Button onClick={handleSuccessClose}>Close</Button>
                    </div>
                </div>
            </Modal>
        );
    }

    return (
        <Modal open={progress === 'checkout'} onClose={closeCart}>
            <form className='flex flex-col gap-2 py-2' action={formAction}>
                <h2 className='font-title text-2xl font-bold'>Checkout</h2>
                <p>Total Amount: ${cart.totalAmount.toFixed(2)}</p>
                <div className='mb-3 flex flex-col gap-2'>
                    <Input name='name' label='Full Name' />
                    <Input name='email' label='Email' />
                    <Input name='street' label='Street' />
                    <div className='flex flex-wrap justify-start gap-4'>
                        <Input name='postal-code' label='Zip Code' />
                        <Input name='city' label='City' />
                    </div>
                </div>
                {error && (
                    <p className='font-bold text-red-500'>
                        Failed to submit order.
                    </p>
                )}
                <div className='flex justify-end gap-4'>{actions}</div>
            </form>
        </Modal>
    );
}
