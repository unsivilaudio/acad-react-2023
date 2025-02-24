import { use, useActionState } from 'react';

import { OpinionsContext } from '@/store/opinions-context';
import Submit from '@/components/Submit';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function shareOpinionAction(_prevState: {}, fd: FormData) {
    const title = fd.get('title') as string;
    const body = fd.get('body') as string;
    const userName = fd.get('userName') as string;

    let errors = [];

    if (title.trim().length < 5) {
      errors.push('Title must be at least five characters.');
    }

    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push('Opinion must be between 10 and 300 characters long.');
    }

    if (!userName.trim()) {
      errors.push('Please provide your name.');
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          title,
          body,
          userName,
        },
      };
    }

    await addOpinion({ title, body, userName });
    return { errors: null };
  }

  const [formState, formAction] = useActionState(shareOpinionAction, {
    errors: null,
  });

  return (
    <div id='new-opinion'>
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className='control-row'>
          <p className='control'>
            <label htmlFor='userName'>Your Name</label>
            <input
              type='text'
              id='userName'
              name='userName'
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className='control'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              name='title'
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className='control'>
          <label htmlFor='body'>Your Opinion</label>
          <textarea
            id='body'
            name='body'
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className='errors'>
            {formState.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
