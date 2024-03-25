import type { PlaceItem } from '@/places';

interface PlaceProps {
    item: PlaceItem;
}

export default function Place({ item }: PlaceProps) {
    return (
        <article className='my-6 flex gap-4'>
            <img
                className='h-20 w-20 rounded-md object-cover'
                src={item.image}
                alt={item.title}
            />
            <div>
                <h2 className='text-lg text-[#faf489]'>{item.title}</h2>
                <p className='my-2 text-[#b3b5c6]'>{item.description}</p>
            </div>
        </article>
    );
}
