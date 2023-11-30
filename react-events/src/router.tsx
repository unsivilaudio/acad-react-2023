import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/layout/RootLayout';
import EventsLayout from '@/layout/EventsLayout';

import HomePage from '@/pages/Home';
import PageError from '@/pages/PageError';
import EventDetailPage from '@/pages/EventDetail';
import NewEventPage from '@/pages/NewEvent';
import EventsPage from '@/pages/Events';
import EditEventPage from '@/pages/EditEvent';
import { fetchEventById, fetchEvents } from '@/util/loaders';
import {
    deleteEvent,
    newsletterSignup,
    postCreateEvent,
    postEditEvent,
} from '@/util/actions';
import NewsletterPage from '@/pages/Newsletter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <PageError />,
        children: [
            { index: true, element: <HomePage /> },
            {
                id: 'events',
                path: 'events',
                element: <EventsLayout />,
                loader: fetchEvents,
                children: [
                    { index: true, element: <EventsPage /> },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: fetchEventById,
                        children: [
                            { index: true, element: <EventDetailPage /> },
                            {
                                path: 'edit',
                                element: <EditEventPage />,
                                action: postEditEvent,
                            },
                            { path: 'delete', action: deleteEvent },
                        ],
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />,
                        action: postCreateEvent,
                    },
                ],
            },
            {
                path: '/newsletter',
                element: <NewsletterPage />,
                action: newsletterSignup,
            },
        ],
    },
]);

export default router;
