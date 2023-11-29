type CartItemProps = {
    item: {
        title: string;
        quantity: number;
        total: number;
        price: number;
    };
};

export default function CartItem(props: CartItemProps) {
    const { title, quantity, total, price } = props.item;

    return (
        <li className='my-4 bg-[#575757] p-4'>
            <header className='flex items-center justify-between'>
                <h3 className='mr-2'>{title}</h3>
                <div className='text-2xl font-bold'>
                    ${total.toFixed(2)}{' '}
                    <span className='text-base font-normal italic'>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className='flex items-center justify-between'>
                <div>
                    x <span className='text-2xl font-bold'>{quantity}</span>
                </div>
                <div className='my-2 flex justify-end gap-1'>
                    <button className='border border-[#eee] bg-transparent px-4 py-1 pb-[7px] text-[#eee] duration-200 hover:bg-[#4b4b4b] hover:text-white'>
                        -
                    </button>
                    <button className='border border-[#eee] bg-transparent px-4 py-1 text-[#eee] duration-200 hover:bg-[#4b4b4b] hover:text-white'>
                        +
                    </button>
                </div>
            </div>
        </li>
    );
}
