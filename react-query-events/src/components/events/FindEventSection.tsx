import { useRef, type SyntheticEvent } from 'react';

export default function FindEventSection() {
    const searchElement = useRef<HTMLInputElement>(null);

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <section className='pb-24' id='all-events-section'>
            <header>
                <h2 className='mx-auto my-8 font-title text-3xl font-bold text-[#b6cad5]'>
                    Find your next event!
                </h2>
                <form onSubmit={handleSubmit} id='search-form'>
                    <input
                        className='rounded-l bg-[#fff] px-4 py-2'
                        type='search'
                        placeholder='Search events'
                        ref={searchElement}
                    />
                    <button className='rounded-r bg-[#b6cad5] px-4 py-2 font-bold text-[#1d161a]'>
                        Search
                    </button>
                </form>
            </header>
            <p className='my-2'>
                Please enter a search term and to find events.
            </p>
        </section>
    );
}
