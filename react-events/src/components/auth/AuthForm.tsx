import { useEffect } from 'react';
import {
    Form,
    useActionData,
    useNavigation,
    useNavigate,
    useSearchParams,
} from 'react-router-dom';

import { authenticateUser } from '@/util/actions';
import Button from '@/components/ui/Button';
import InputGroup from '@/components/ui/InputGroup';

type AuthActionData = Awaited<ReturnType<typeof authenticateUser>>;

function AuthForm() {
    const data = useActionData() as AuthActionData;
    const navigate = useNavigate();
    const navigation = useNavigation();

    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode') ?? 'login';
    const isLogin = mode === 'login';
    const isSubmitting = navigation.state === 'submitting';

    useEffect(() => {
        if (data?.token && !data.errors) {
            localStorage.setItem('token', JSON.stringify(data.token));
            navigate('/');
        }
    }, [data, navigate]);

    return (
        <Form method='post' className='mx-auto my-8 max-w-[40rem]'>
            <h1 className='mb-6 text-4xl font-semibold capitalize'>
                {isLogin ? 'Log in' : 'Create a new user'}
            </h1>
            {(data?.errors || data?.message) && (
                <ul className='rounded-lg bg-red-300 p-4 pb-6 font-semibold text-red-700'>
                    {Array.isArray(data.errors) ? (
                        data.errors.map((err) => <li key={err}>{err}</li>)
                    ) : typeof data.errors === 'object' ? (
                        Object.values(data.errors).map((err) => (
                            <li key={err as string}>{err as string}</li>
                        ))
                    ) : (
                        <li>
                            {data.message ||
                                'Something went wrong...try again later.'}
                        </li>
                    )}
                </ul>
            )}
            <div className='my-8 space-y-6'>
                <InputGroup label='Email' id='email' type='email' required />
                <InputGroup
                    label='Password'
                    id='password'
                    type='password'
                    required
                />
                {!isLogin && (
                    <InputGroup
                        label='Confirm Password'
                        id='passwordConfirm'
                        type='password'
                        required
                    />
                )}
            </div>
            <div className='flex items-center justify-end gap-4'>
                <Button
                    className='text-[#8a8784]'
                    href={`?mode=${isLogin ? 'signup' : 'login'}`}
                    variant='text'
                >
                    {isLogin
                        ? 'Not a member yet? Switch to signup'
                        : 'Already joined? Switch to log in'}
                </Button>
                <Button disabled={isSubmitting}>
                    {isSubmitting
                        ? 'Submitting...'
                        : isLogin
                          ? 'Save'
                          : 'Sign Up'}
                </Button>
            </div>
        </Form>
    );
}

export default AuthForm;
