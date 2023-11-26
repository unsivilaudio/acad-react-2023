import { type SyntheticEvent, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import InputGroup from '@/components/ui/InputGroup';

export default function Login() {
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    function handleSumbit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('Submitted!');
        const enteredEmail = email.current?.value;
        const enteredPassword = password.current?.value;
        if (enteredEmail?.trim() === '' || enteredPassword?.trim() === '') {
            return;
        }
        console.log('made it here!');
        if (!enteredEmail?.includes('@')) {
            setEmailIsInvalid(true);
            return;
        }
        console.log(enteredEmail, enteredPassword);
    }

    return (
        <form
            onSubmit={handleSumbit}
            className='mx-auto my-12 w-[90%] max-w-[40rem] rounded-lg bg-gradient-to-b from-[#253c3c] to-[#1d4949] p-8 shadow-[0_0_16px_4px_rgba(0,0,0,0.5)]'
        >
            <h2 className='mb-4 text-3xl font-semibold'>Login</h2>
            <div className='control-row mb-4 flex flex-wrap gap-4'>
                <InputGroup
                    name='email'
                    invalid={emailIsInvalid}
                    error='Please enter a valid email.'
                >
                    <InputGroup.Label>Email</InputGroup.Label>
                    <InputGroup.Input
                        ref={email}
                        type='text'
                        autoComplete='new-password'
                    />
                </InputGroup>
                <InputGroup name='password'>
                    <InputGroup.Label>Password</InputGroup.Label>
                    <InputGroup.Input ref={password} type='password' />
                </InputGroup>
            </div>
            <p className='form-actions flex justify-end gap-4'>
                <Button variant='flat'>Reset</Button>
                <Button type='submit'>Login</Button>
            </p>
        </form>
    );
}
