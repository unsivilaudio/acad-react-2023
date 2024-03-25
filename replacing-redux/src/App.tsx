import RootLayout from '@/layout/RootLayout';
import Favorites from '@/pages/Favorites';
import Products from '@/pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Products /> },
            { path: 'favorites', element: <Favorites /> },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={routes} />;
}
