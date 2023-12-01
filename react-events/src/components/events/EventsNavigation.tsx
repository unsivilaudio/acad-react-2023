import clsx from 'clsx';
import { NavLink, useRouteLoaderData } from 'react-router-dom';

const EVENT_ROUTES = [
    { path: '/events', label: 'All Events', requiresAuth: false },
    { path: '/events/new', label: 'New Event', requiresAuth: true },
];

function EventsNavigation() {
    const token = useRouteLoaderData('root') as string | undefined;

    const navListItems = EVENT_ROUTES.filter(
        (route) => (route.requiresAuth && token) || !route.requiresAuth,
    ).map((evtRoute) => (
        <li key={evtRoute.path}>
            <NavLink
                className={({ isActive }) =>
                    clsx(
                        'rounded bg-[#8a8784] px-6 py-2 font-semibold text-[#1f1d1b] duration-200 hover:bg-[#f9c762]',
                        {
                            'bg-[#f9c762]': isActive,
                        },
                    )
                }
                to={evtRoute.path}
                end
            >
                {evtRoute.label}
            </NavLink>
        </li>
    ));

    return (
        <header className='flex justify-center p-8'>
            <nav>
                <ul className='flex gap-4'>{navListItems}</ul>
            </nav>
        </header>
    );
}

export default EventsNavigation;
