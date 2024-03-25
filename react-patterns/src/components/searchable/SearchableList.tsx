import { useState, type SyntheticEvent, type ReactNode, useRef } from 'react';

interface SearchableListProps<T, K> {
    items: K;
    children(item: T): ReactNode;
}

export default function SearchableList<T, K extends T[]>({
    items,
    children,
}: SearchableListProps<T, K>) {
    const lastChange = useRef<NodeJS.Timeout | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const searchResult = items.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()),
    );

    function handleChange(event: SyntheticEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(value);
        }, 500);
    }

    return (
        <div className='my-8'>
            <input
                onChange={handleChange}
                className='w-full rounded-md border border-[#5d6273] bg-[#1e2130] p-3'
                type='search'
                placeholder='Search'
            />
            <ul>{searchResult.map((item) => children(item))}</ul>
        </div>
    );
}
