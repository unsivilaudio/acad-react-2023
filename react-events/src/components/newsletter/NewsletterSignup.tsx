import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

export default function NewsletterSignup() {
    const fetcher = useFetcher();
    const { data, state } = fetcher;

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            alert(data.message);
        }
    }, [data, state]);

    return (
        <fetcher.Form method='post' action='/newsletter'>
            <input
                className='rounded-l-md border-none px-4 py-[5px] outline-none'
                type='email'
                name='email'
                placeholder='Sign up for newsletter...'
                aria-label='Sign up for newsletter'
                required
            />
            <button className='rounded-r-md bg-[#656360] px-4 py-[5px] font-bold text-[#c4c2bf] duration-200 hover:bg-[#ab7404] hover:text-[#f5d492]'>
                Sign up
            </button>
        </fetcher.Form>
    );
}
