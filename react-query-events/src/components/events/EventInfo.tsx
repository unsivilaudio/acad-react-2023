import { Link } from 'react-router-dom';

export default function EventInfo() {
    return (
        <article id='event-details'>
            <header className='mx-auto my-2 flex w-[40rem] items-center justify-between'>
                <h1 className='text-3xl font-bold'>EVENT TITLE</h1>
                <nav className='flex gap-4'>
                    <button className='rounded p-1 font-bold text-[#b6cad5]'>
                        Delete
                    </button>
                    <Link
                        to='edit'
                        className='rounded p-1 font-bold text-[#b6cad5]'
                    >
                        Edit
                    </Link>
                </nav>
            </header>
            <div
                id='event-details-content'
                className='mx-auto my-8 w-[40rem] overflow-hidden rounded-lg bg-[#343b3f]'
            >
                <img
                    src=''
                    alt='event-details-image'
                    className='h-[20rem] w-full object-cover'
                />
                <div id='event-details-info' className='p-12 pt-0'>
                    <div>
                        <p
                            id='event-details-location'
                            className='text-lg font-bold text-[#b6cad5]'
                        >
                            EVENT LOCATION
                        </p>
                        <time
                            className='text-2xl font-bold text-[#b6cad5]'
                            dateTime={`Todo-DateT$Todo-Time`}
                        >
                            DATE @ TIME
                        </time>
                    </div>
                    <p
                        id='event-details-description'
                        className='text-lg text-[#b6cad5]'
                        style={{ lineHeight: 2.5 }}
                    >
                        EVENT DESCRIPTION
                    </p>
                </div>
            </div>
        </article>
    );
}
