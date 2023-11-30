import { Link } from 'react-router-dom';

const PRODUCTS = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' },
    { id: 'p4', title: 'Product 4' },
];

export default function ProductsPage() {
    return (
        <div>
            <h1 className='text-3xl font-bold'>The Products page</h1>
            <ul>
                {PRODUCTS.map((p) => (
                    <li className='text-blue-400 underline'>
                        <Link to={`/products/${p.id}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
