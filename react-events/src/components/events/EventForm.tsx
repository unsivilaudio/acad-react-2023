import Button from '@/components/ui/Button';
import InputGroup from '@/components/ui/InputGroup';
import { useNavigate } from 'react-router-dom';

type EventFormProps = {
    method: 'new' | 'edit';
    event?: string;
};

function EventForm(props: EventFormProps) {
    const navigate = useNavigate();
    function cancelHandler() {
        navigate('..');
    }

    return (
        <form className='mx-auto my-8 max-w-[40rem]'>
            <div className='space-y-4'>
                <InputGroup label='Title' id='title' />
                <InputGroup label='Image' id='image' type='url' required />
                <InputGroup label='Date' id='date' type='date' required />
                <InputGroup
                    label='Description'
                    id='description'
                    type='textarea'
                    rows={5}
                    className='resize-none'
                    required
                />
            </div>
            <div className='mt-4 justify-end gap-4 first-line:flex'>
                <Button type='button' onClick={cancelHandler}>
                    Cancel
                </Button>
                <Button>Save</Button>
            </div>
        </form>
    );
}

export default EventForm;
