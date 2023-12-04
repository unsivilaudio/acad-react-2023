import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';

import EditEvent from '@/components/events/EditEvent.jsx';
import EventsPage from '@/pages/Events.js';
import EventsNewPage from '@/pages/EventsNew.js';
import EventDetailsPage from '@/pages/EventDetails.js';

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
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
