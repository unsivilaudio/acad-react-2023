import { type SyntheticEvent } from 'react';

import { useCartCtx } from '@/context/cart-context';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Modal from '@/components/ui/Modal';

export default function Checkout() {
    const { progress, closeCart, clearCart, cart } = useCartCtx();

    function handleSubmitForm(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        alert('Your order has been submitted!');
        event.currentTarget.reset();
        clearCart();
    }

    return (
        <Modal open={progress === 'checkout'} onClose={closeCart}>
            <form
                className='flex flex-col gap-2 py-2'
                onSubmit={handleSubmitForm}
            >
                <h2 className='font-title text-2xl font-bold'>Checkout</h2>
                <p>Total Amount: ${cart.totalAmount.toFixed(2)}</p>
                <div className='mb-3 flex flex-col gap-2'>
                    <Input name='full-name' label='Full Name' />
                    <Input name='email' label='Email' />
                    <Input name='street' label='Street' />
                    <div className='flex flex-wrap justify-start gap-4'>
                        <Input name='zipcode' label='Zip Code' />
                        <Input name='city' label='City' />
                    </div>
                </div>
                <div className='flex justify-end gap-4'>
                    <Button
                        variant='text-dark'
                        type='button'
                        onClick={closeCart}
                    >
                        Cancel
                    </Button>
                    <Button>Submit Order</Button>
                </div>
            </form>
        </Modal>
    );
}
