import Button from '@/components/Button';
import Input from '@/components/Input';
import { useState } from 'react';

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div
            id='auth-inputs'
            className='mx-auto w-full max-w-[28rem] rounded-lg bg-gradient-to-r from-[#474232] to-[#28271c] p-8 shadow-md drop-shadow-lg'
        >
            <div className='mb-6 flex flex-col gap-2'>
                <Input
                    label='Email'
                    type='email'
                    invalid={emailNotValid}
                    onChange={(event) =>
                        handleInputChange('email', event.target.value)
                    }
                    required
                />
                <Input
                    label='Password'
                    type='password'
                    invalid={passwordNotValid}
                    onChange={(event) =>
                        handleInputChange('password', event.target.value)
                    }
                    required
                />
            </div>
            <div className='flex justify-end gap-4'>
                <Button variant='text'>Create a new account</Button>
                <Button onClick={handleLogin}>Sign In</Button>
            </div>
        </div>
    );
}
