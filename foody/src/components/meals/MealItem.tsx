import Button from '@/components/ui/Button';

export default function MealItem() {
    return (
        <li className='overflow-hidden rounded-2xl bg-[#1d1a16] text-center shadow-[0_1px_6px_rgba(0,0,0,0.3)]'>
            <article className='flex h-full flex-col items-center justify-between'>
                <img
                    className='h-80 w-full object-cover'
                    src='https://hips.hearstapps.com/hmg-prod/images/chicken-tamale-pie-index-64da954c33aab.jpg?crop=0.502xw:1.00xh;0.288xw,0&resize=640:*'
                    alt='meal details'
                />
                <h3 className='my-3 text-2xl font-bold'>Mac & Cheese</h3>
                <p className='inline-block rounded bg-[#312c1d] px-8 py-2 text-sm font-bold text-[#ffc404]'>
                    $12.95
                </p>
                <p className='m-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga quae earum, illum suscipit ad ab maiores labore harum
                </p>
                <div className='mb-6'>
                    <Button>Add To Cart</Button>
                </div>
            </article>
        </li>
    );
}
