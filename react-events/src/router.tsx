import { createBrowserRouter, Navigate } from 'react-router-dom';

import RootLayout from '@/layout/RootLayout';
import EventsLayout from '@/layout/EventsLayout';

import HomePage from '@/pages/Home';
import PageError from '@/pages/PageError';
import EventDetailPage from '@/pages/EventDetail';
import NewEventPage from '@/pages/NewEvent';
import EventsPage from '@/pages/Events';
import EditEventPage from '@/pages/EditEvent';
import NewsletterPage from '@/pages/Newsletter';
import Authentication from '@/pages/Authentication';

import {
    checkAuthLoader,
    fetchEventById,
    fetchEvents,
    tokenLoader,
} from '@/util/loaders';
import {
    authenticateUser,
    deleteEvent,
    logoutUser,
    newsletterSignup,
    postCreateEvent,
    postEditEvent,
} from '@/util/actions';

const router = createBrowserRouter([
    {
        id: 'root',
        path: '/',
        element: <RootLayout />,
        errorElement: <PageError />,
        loader: tokenLoader,
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
                                loader: checkAuthLoader,
                            },
                            {
                                path: 'delete',
                                action: deleteEvent,
                                element: <Navigate to='/events' />,
                                loader: checkAuthLoader,
                            },
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
            {
                path: 'auth',
                element: <Authentication />,
                action: authenticateUser,
            },
            {
                path: 'logout',
                element: <Navigate to='/' />,
                loader: logoutUser,
            },
        ],
    },
]);

export default router;
