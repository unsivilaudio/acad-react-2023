import { type SyntheticEvent } from 'react';

import { hasMinLength, isEmail } from '@/util/validation';
import useInput from '@/hooks/use-input';
import InputGroup from '@/components/ui/InputGroup';
import Button from '@/components/ui/Button';

export default function Login() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError,
    } = useInput('', (value) => isEmail(value) && value.includes('@'));
    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput('', (value) => hasMinLength(value, 6));

    function handleSumbit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        if (emailHasError || passwordHasError) {
            return;
        }

        console.log('Submitted!');
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
                    invalid={emailHasError}
                    error='Please enter a valid email address.'
                >
                    <InputGroup.Label>Email</InputGroup.Label>
                    <InputGroup.Input
                        type='email'
                        autoComplete='new-password'
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        value={emailValue}
                        required
                    />
                </InputGroup>
                <InputGroup
                    name='password'
                    invalid={passwordHasError}
                    error='Please enter a password with at least 6 characters.'
                >
                    <InputGroup.Label>Password</InputGroup.Label>
                    <InputGroup.Input
                        type='password'
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                        value={passwordValue}
                        required
                    />
                </InputGroup>
            </div>
            <p className='form-actions flex justify-end gap-4'>
                <Button variant='flat'>Reset</Button>
                <Button type='submit'>Login</Button>
            </p>
        </form>
    );
}
