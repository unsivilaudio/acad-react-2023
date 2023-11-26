type CartItemProps = {
    title: string;
    quantity: number;
    price: number;
    onDecrement(): void;
    onIncrement(): void;
};

export default function CartItem({
    title,
    quantity,
    price,
    onDecrement,
    onIncrement,
}: CartItemProps) {
    return (
        <li className='flex w-full items-center justify-between'>
            <p className='text-lg'>
                {title} - {quantity} x ${price}
            </p>
            <div className='flex items-center gap-4'>
                <button
                    onClick={onDecrement}
                    className='flex h-6 w-6 items-center justify-center rounded-full border-none bg-[#312c1d] pb-[1px] text-base text-[#ffc404] duration-200 hover:bg-[#1d1a16] hover:text-[#ffab04]'
                >
                    -
                </button>
                <p className='text-lg'>{quantity}</p>
                <button
                    onClick={onIncrement}
                    className='flex h-6 w-6 items-center justify-center rounded-full border-none bg-[#312c1d] text-base text-[#ffc404] duration-200 hover:bg-[#1d1a16] hover:text-[#ffab04]'
                >
                    +
                </button>
            </div>
        </li>
    );
}
