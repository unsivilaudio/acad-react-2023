import Card from '../ui/Card';

type ProductItemProps = {
    title: string;
    price: number;
    description: string;
};

export default function ProductItem({
    title,
    price,
    description,
}: ProductItemProps) {
    return (
        <li>
            <Card>
                <header className='flex justify-between align-baseline'>
                    <h3 className='my-2 text-lg font-bold'>{title}</h3>
                    <div className='rounded-[30px] bg-[#3a3a3a] px-6 py-1 text-2xl text-[#eee]'>
                        ${price.toFixed(2)}
                    </div>
                </header>
                <p className='my-4 text-[#3a3a3a]'>{description}</p>
                <div className='flex justify-end'>
                    <button className='rounded border border-[#1a8ed1] bg-transparent px-6 py-2 text-[#1a8ed1] duration-200 hover:border-[#1ac5d1] hover:bg-[#1ac5d1] hover:text-white'>
                        Add to Cart
                    </button>
                </div>
            </Card>
        </li>
    );
}
