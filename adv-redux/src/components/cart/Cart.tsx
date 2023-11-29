import Card from '@/components/ui/Card';
import CartItem from '@/components/cart/CartItem';

export default function Cart() {
    return (
        <Card className='max-w-[30rem] bg-[#313131] text-[#eee]'>
            <h2 className='my-2 text-xl'>Your Shopping Cart</h2>
            <ul>
                <CartItem
                    item={{
                        title: 'Test Item',
                        quantity: 3,
                        total: 18,
                        price: 6,
                    }}
                />
            </ul>
        </Card>
    );
}
