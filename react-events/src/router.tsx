import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/layout/RootLayout';
import EventsLayout from '@/layout/EventsLayout';

import HomePage from '@/pages/Home';
import PageError from '@/pages/PageError';
import EventDetailPage from '@/pages/EventDetail';
import NewEventPage from '@/pages/NewEvent';
import EventsPage from '@/pages/Events';
import EditEventPage from '@/pages/EditEvent';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <PageError />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'events',
                element: <EventsLayout />,
                children: [
                    { index: true, element: <EventsPage /> },
                    {
                        path: ':eventId',
                        children: [
                            { index: true, element: <EventDetailPage /> },
                            { path: 'edit', element: <EditEventPage /> },
                        ],
                    },
                ],
            },
            { path: 'events/new', element: <NewEventPage /> },
        ],
    },
]);

export default router;
