import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/layout/RootLayout';
import HomePage from '@/pages/Home';
import ProductsPage from '@/pages/Products';
import PageError from '@/pages/PageError';
import ProductDetail from '@/pages/ProductDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <PageError />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'products',
                children: [
                    { index: true, element: <ProductsPage /> },
                    { path: ':productId', element: <ProductDetail /> },
                ],
            },
        ],
    },
]);

export default router;
