import { useState } from 'react';
import { Form } from 'react-router-dom';

import classes from './AuthForm.module.css';
import Button from '@/components/ui/Button';
import InputGroup from '@/components/ui/InputGroup';

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);

    function switchAuthHandler() {
        setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
    }

    return (
        <>
            <Form method='post' className='mx-auto my-8 max-w-[40rem]'>
                <h1 className='mb-6 text-2xl font-bold'>
                    {isLogin ? 'Log in' : 'Create a new user'}
                </h1>
                <div className='my-8'>
                    <InputGroup
                        label='Email'
                        id='email'
                        type='email'
                        required
                    />
                    <InputGroup
                        label='Password'
                        id='password'
                        type='password'
                        required
                    />
                </div>
                <div className='flex items-center justify-end gap-4'>
                    <Button onClick={switchAuthHandler} type='button'>
                        {isLogin ? 'Create new user' : 'Login'}
                    </Button>
                    <Button>Save</Button>
                </div>
            </Form>
        </>
    );
}

export default AuthForm;
