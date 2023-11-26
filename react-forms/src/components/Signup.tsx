import { type SyntheticEvent } from 'react';

import Button from '@/components/ui/Button';
import InputGroup from '@/components/ui/InputGroup';

export default function Signup() {
    function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const acquisitionChannel = formData.getAll('aquisition');
        const data = Object.fromEntries(formData);
        console.log({ ...data, acquisitionChannel });
        event.currentTarget.reset();
    }

    return (
        <form
            className='mx-auto my-12 w-[90%] max-w-[40rem] rounded-lg bg-gradient-to-b from-[#253c3c] to-[#1d4949] p-8 shadow-[0_0_16px_4px_rgba(0,0,0,0.5)]'
            onSubmit={handleSubmit}
        >
            <h2 className='mb-4 text-3xl font-semibold'>Welcome on board!</h2>
            <p className='mb-3'>
                We just need a little bit of data from you to get you started 🚀
            </p>

            <InputGroup name='email'>
                <InputGroup.Label>Email</InputGroup.Label>
                <InputGroup.Input type='email' />
            </InputGroup>

            <div className='control-row mb-4 flex flex-wrap gap-4'>
                <InputGroup name='password'>
                    <InputGroup.Label>Password</InputGroup.Label>
                    <InputGroup.Input type='password' />
                </InputGroup>
                <InputGroup name='confirm-password'>
                    <InputGroup.Label>Confirm Password</InputGroup.Label>
                    <InputGroup.Input type='password' />
                </InputGroup>
            </div>
            <hr className='my-2 border-[#869999]' />
            <div className='control-row mb-4 flex flex-wrap gap-4'>
                <InputGroup name='first-name'>
                    <InputGroup.Label htmlFor='first-name'>
                        First Name
                    </InputGroup.Label>
                    <InputGroup.Input type='text' />
                </InputGroup>

                <InputGroup name='last-name'>
                    <InputGroup.Label htmlFor='last-name'>
                        Last Name
                    </InputGroup.Label>
                    <InputGroup.Input type='text' />
                </InputGroup>
            </div>

            <InputGroup name='role'>
                <InputGroup.Label>
                    What best describes your role?
                </InputGroup.Label>
                <InputGroup.Select>
                    <InputGroup.Option value='student'>
                        Student
                    </InputGroup.Option>
                    <InputGroup.Option value='teacher'>
                        Teacher
                    </InputGroup.Option>
                    <InputGroup.Option value='employee'>
                        Employee
                    </InputGroup.Option>
                    <InputGroup.Option value='founder'>
                        Founder
                    </InputGroup.Option>
                    <InputGroup.Option value='other'>Other</InputGroup.Option>
                </InputGroup.Select>
            </InputGroup>

            <fieldset className='my-4 w-full border border-[#869999] px-5 py-3'>
                <legend>How did you find us?</legend>
                <InputGroup.CheckBoxGroup name='aquisition'>
                    <InputGroup.CheckBox value='google'>
                        Google
                    </InputGroup.CheckBox>
                    <InputGroup.CheckBox value='friend'>
                        Referred by friend
                    </InputGroup.CheckBox>
                    <InputGroup.CheckBox value='other'>
                        Other
                    </InputGroup.CheckBox>
                </InputGroup.CheckBoxGroup>
            </fieldset>

            <div className='control-row mb-4'>
                <InputGroup.CheckBoxGroup name='terms-and-conditions'>
                    <InputGroup.CheckBox value='terms'>
                        I agree to the terms and conditions
                    </InputGroup.CheckBox>
                </InputGroup.CheckBoxGroup>
            </div>

            <p className='form-actions flex justify-end gap-4'>
                <Button type='reset' variant='flat'>
                    Reset
                </Button>
                <Button type='submit'>Sign up</Button>
            </p>
        </form>
    );
}
