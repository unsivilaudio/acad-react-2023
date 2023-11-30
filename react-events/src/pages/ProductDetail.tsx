import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
    const params = useParams();

    return (
        <div className='text-center'>
            <h2 className='text-2xl font-semibold'>The Product Detail Page</h2>
            <p className='mt-3 text-lg font-bold uppercase'>
                {params.productId}
            </p>
            <Link to='..'>Go Back.</Link>
        </div>
    );
}
