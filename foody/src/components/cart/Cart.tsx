import CartItem from '@/components/cart/CartItem';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

type CartProps = {
    open: boolean;
    toggleShowCart: (show?: boolean) => void;
};

export default function Cart({ open, toggleShowCart }: CartProps) {
    function handleCloseModal() {
        toggleShowCart(false);
    }

    function handleAddItem() {
        //@TODO
    }

    function handleRemoveItem() {
        // @TODO
    }

    return (
        <Modal open={open} toggleShow={toggleShowCart}>
            <div>
                <h1 className='font-title my-4 text-2xl font-bold'>
                    Your Cart
                </h1>
                <ul className='my-2 space-y-1'>
                    <CartItem
                        title='Seafood Paella'
                        quantity={1}
                        price={19.99}
                        onDecrement={handleRemoveItem}
                        onIncrement={handleAddItem}
                    />
                    <CartItem
                        title='Seafood Paella'
                        quantity={1}
                        price={19.99}
                        onDecrement={handleRemoveItem}
                        onIncrement={handleAddItem}
                    />
                    <CartItem
                        title='Seafood Paella'
                        quantity={1}
                        price={19.99}
                        onDecrement={handleRemoveItem}
                        onIncrement={handleAddItem}
                    />
                    <CartItem
                        title='Seafood Paella'
                        quantity={1}
                        price={19.99}
                        onDecrement={handleRemoveItem}
                        onIncrement={handleAddItem}
                    />
                </ul>
                <p className='my-8 flex justify-end text-lg font-bold text-[#46443c]'>
                    Total: $149.95
                </p>
                <div className='flex justify-end gap-4'>
                    <Button variant='text-dark' onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button className='text-[#1d1a16] hover:text-[#312c1d] active:text-[#312c1d]'>
                        Order Now
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
