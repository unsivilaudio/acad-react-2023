import { useActionState } from 'react';

import {
  hasMinLength,
  isEmail,
  isEqualToOtherValue,
  isNotEmpty,
} from '@/util/validation';

export default function Signup() {
  function signupAction(_prevState: {}, fd: FormData) {
    const email = fd.get('email') as string;
    const password = fd.get('password') as string;
    const confirmPassword = fd.get('confirm-password') as string;
    const firstName = fd.get('first-name') as string;
    const lastName = fd.get('last-name') as string;
    const role = fd.get('role') as string;
    const terms = fd.get('terms') as string;
    const acquisitionChannel = fd.getAll('acquisition') as string[];

    let errors: string[] = [];

    if (!isEmail(email)) {
      errors.push('Invalid email address.');
    }

    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      errors.push('You must provide a password of at least six characters.');
    }

    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push('Passwords do not match.');
    }

    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
      errors.push('Please provide both your first and last name.');
    }

    if (!isNotEmpty(role)) {
      errors.push('Please select a role.');
    }

    if (!terms) {
      errors.push('You must agree to the terms and conditions.');
    }

    if (acquisitionChannel.length === 0) {
      errors.push('Please select at least one acquisition channel.');
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
          role,
          terms,
          acquisitionChannel,
        },
      };
    }

    return { errors: null };
  }

  const [formState, formAction, isPending] = useActionState(signupAction, {
    errors: null,
  });

  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className='control'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          name='email'
          defaultValue={formState.enteredValues?.email}
        />
      </div>

      <div className='control-row'>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            defaultValue={formState.enteredValues?.password}
          />
        </div>

        <div className='control'>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            id='confirm-password'
            type='password'
            name='confirm-password'
            defaultValue={formState.enteredValues?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className='control-row'>
        <div className='control'>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            id='first-name'
            name='first-name'
            defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className='control'>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            name='last-name'
            defaultValue={formState.enteredValues?.lastName}
          />
        </div>
      </div>

      <div className='control'>
        <label htmlFor='role'>What best describes your role?</label>
        <select
          id='role'
          name='role'
          defaultValue={formState.enteredValues?.role}
        >
          <option value='student'>Student</option>
          <option value='teacher'>Teacher</option>
          <option value='employee'>Employee</option>
          <option value='founder'>Founder</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className='control'>
          <input
            type='checkbox'
            id='google'
            name='acquisition'
            value='google'
            defaultChecked={formState.enteredValues?.acquisitionChannel?.includes(
              'google'
            )}
          />
          <label htmlFor='google'>Google</label>
        </div>

        <div className='control'>
          <input
            type='checkbox'
            id='friend'
            name='acquisition'
            value='friend'
            defaultChecked={formState.enteredValues?.acquisitionChannel?.includes(
              'friend'
            )}
          />
          <label htmlFor='friend'>Referred by friend</label>
        </div>

        <div className='control'>
          <input
            type='checkbox'
            id='other'
            name='acquisition'
            value='other'
            defaultChecked={formState.enteredValues?.acquisitionChannel?.includes(
              'other'
            )}
          />
          <label htmlFor='other'>Other</label>
        </div>
      </fieldset>

      <div className='control'>
        <label htmlFor='terms-and-conditions'>
          <input
            type='checkbox'
            id='terms-and-conditions'
            name='terms'
            defaultChecked={!!formState.enteredValues?.terms}
          />
          I agree to the terms and conditions
        </label>
      </div>

      {formState.errors && (
        <ul className='errors'>
          {formState.errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      <p className='form-actions'>
        <button type='reset' className='button button-flat'>
          Reset
        </button>
        <button className='button'>Sign up</button>
      </p>
    </form>
  );
}
