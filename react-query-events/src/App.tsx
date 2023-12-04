import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/util/http';
import EditEvent from '@/components/events/EditEvent.jsx';
import EventsPage from '@/pages/Events.js';
import EventsNewPage from '@/pages/EventsNew.js';
import EventDetailsPage from '@/pages/EventDetails.js';
import { editEventLoader } from '@/util/loaders';
import { editEventAction } from '@/util/actions';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/events' />,
    },
    {
        path: '/events',
        element: <EventsPage />,

        children: [
            {
                path: '/events/new',
                element: <EventsNewPage />,
            },
        ],
    },
    {
        path: '/events/:id',
        element: <EventDetailsPage />,
        children: [
            {
                path: '/events/:id/edit',
                element: <EditEvent />,
                loader: editEventLoader,
                action: editEventAction,
            },
        ],
    },
]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}

export default App;
