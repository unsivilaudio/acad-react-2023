import Card from '@/components/ui/Card';
import CartItem from '@/components/cart/CartItem';
import useCart from '@/store/hooks/use-cart';

export default function Cart() {
    const { items } = useCart();
    return (
        <Card className='max-w-[30rem] bg-[#313131] text-[#eee]'>
            <h2 className='my-2 text-xl'>Your Shopping Cart</h2>
            <ul>
                {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </ul>
        </Card>
    );
}
