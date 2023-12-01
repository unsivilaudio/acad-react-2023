import { Link, useRouteError } from 'react-router-dom';
import MainNavigation from '@/layout/MainNavigation';

interface ReactRouterError extends Error {
    status?: number;
    data?: {
        message?: string;
    };
}

export default function PageError() {
    const error = useRouteError() as ReactRouterError;

    let message = 'Looks like something went wrong...';
    if (error.status === 500 && error.data?.message) {
        message = error.data?.message;
    }

    return (
        <>
            <MainNavigation />
            <main className='mx-auto mt-8 w-9/12 max-w-[45rem] rounded-lg bg-red-200 p-12 pb-16 text-red-700 shadow-xl'>
                <h2 className='text-4xl font-bold uppercase tracking-wide'>
                    Uh oh!
                </h2>
                <p className='mt-1 text-lg italic'>{message}</p>
                <p className='mt-3'>
                    <Link
                        to='..'
                        className='font-semibold text-blue-400 duration-300 hover:text-blue-700'
                    >
                        Back to safety?
                    </Link>
                </p>
            </main>
        </>
    );
}
