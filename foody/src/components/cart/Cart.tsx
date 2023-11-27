import { type CartItem as ICartItem, useCartCtx } from '@/context/cart-context';
import CartItem from '@/components/cart/CartItem';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

export default function Cart() {
    const {
        progress,
        cart,
        addToCart,
        removeFromCart,
        closeCart,
        openCheckout,
    } = useCartCtx();

    function handleAddItem(item: ICartItem) {
        addToCart(item);
    }

    function handleRemoveItem(id: string) {
        removeFromCart(id);
    }

    return (
        <Modal open={progress === 'cart'} onClose={closeCart}>
            <div>
                <h1 className='my-4 font-title text-2xl font-bold'>
                    Your Cart
                </h1>
                <ul className='my-2 space-y-1'>
                    {cart.items.map((item) => (
                        <CartItem
                            key={item.id}
                            title={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            onDecrement={handleRemoveItem.bind(null, item.id)}
                            onIncrement={handleAddItem.bind(null, item)}
                        />
                    ))}
                </ul>
                <p className='my-8 flex justify-end text-lg font-bold text-[#46443c]'>
                    Total: ${cart.totalAmount.toFixed(2)}
                </p>
                <div className='flex justify-end gap-4'>
                    <Button variant='text-dark' onClick={closeCart}>
                        Close
                    </Button>
                    {cart.totalAmount > 0 && (
                        <Button
                            className='text-[#1d1a16] hover:text-[#312c1d] active:text-[#312c1d]'
                            onClick={openCheckout}
                        >
                            Order Now
                        </Button>
                    )}
                </div>
            </div>
        </Modal>
    );
}
