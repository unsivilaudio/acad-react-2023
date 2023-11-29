import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import useAuth from '@/store/hooks/use-auth';
import { SyntheticEvent } from 'react';

export default function Auth() {
    const { login } = useAuth();

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        login();
        event.currentTarget.reset();
    }

    return (
        <Container as='main' className='max-w-[30rem]'>
            <section>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label
                            htmlFor='email'
                            className='mb-2 block uppercase text-[#616161]'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            className='mx-auto block w-[20rem] rounded border border-[#ccc] p-1'
                        />
                    </div>
                    <div className='mb-2'>
                        <label
                            htmlFor='password'
                            className='mb-2 block uppercase text-[#616161]'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            className='mx-auto block w-[20rem] rounded border border-[#ccc] p-1'
                        />
                    </div>
                    <Button>Login</Button>
                </form>
            </section>
        </Container>
    );
}
