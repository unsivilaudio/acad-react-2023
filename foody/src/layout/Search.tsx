import { useState, useEffect, useRef, type SyntheticEvent } from 'react';
import { useMealsContext } from '@/context/meals-context';

export default function Search() {
    const debouncer = useRef<NodeJS.Timeout | null>(null);
    const [term, setTerm] = useState('');
    const { onChangeSearch } = useMealsContext();

    useEffect(() => {
        debouncer.current = setTimeout(() => {
            onChangeSearch(term);
        }, 1000);

        return () => {
            if (debouncer.current) {
                clearTimeout(debouncer.current);
            }
        };
    }, [term, onChangeSearch]);

    function handleChangeTerm(event: SyntheticEvent<HTMLInputElement>) {
        setTerm(event.currentTarget.value);
    }

    return (
        <p className='relative ml-7 flex w-[30rem] justify-start px-4'>
            <input
                type='text'
                value={term}
                onChange={handleChangeTerm}
                className={`w-[${
                    term !== '' ? '30rem' : '20rem'
                }] rounded-full px-3 py-2 pl-10 text-[#39393a] outline-none duration-300 focus:w-[30rem] focus:ring focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent`}
                placeholder='...find the perfect meal'
            />
            <span className='absolute left-7 flex h-full items-center justify-center text-[#39393a]'>
                <svg
                    width='20px'
                    height='20px'
                    viewBox='0 0 1024 1024'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z'
                        fill='currentColor'
                    />
                </svg>
            </span>
            <p
                className='absolute right-7 z-10 flex h-full cursor-pointer  items-center justify-center text-[12px] font-bold text-[#39393a]'
                onClick={setTerm.bind(null, '')}
            >
                {term !== '' && (
                    <span className='flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#353535] p-[2px] text-[#ecedef]'>
                        X
                    </span>
                )}
            </p>
        </p>
    );
}
