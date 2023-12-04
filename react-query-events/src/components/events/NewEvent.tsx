import { Link, useNavigate } from 'react-router-dom';

import Modal from '@/components/ui/Modal';
import EventForm from '@/components/events/EventForm';
import { Event } from '@/types/event';

export default function NewEvent() {
    const navigate = useNavigate();

    function handleSubmit(eventData: Omit<Event, 'id'>) {
        // @TODO
    }

    return (
        <Modal onClose={() => navigate('../')}>
            <EventForm onSubmit={handleSubmit}>
                <>
                    <Link
                        to='../'
                        className='rounded bg-transparent font-bold text-[#3f0c26] duration-300 hover:text-[#7c184c]'
                    >
                        Cancel
                    </Link>
                    <button
                        type='submit'
                        className='rounded bg-[#e30d7c] px-6 py-2 font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.26)] duration-300 hover:bg-[#e30d5b] hover:shadow-[0_2px_8px_rgba(0,0,0,0.26)]'
                    >
                        Create
                    </button>
                </>
            </EventForm>
        </Modal>
    );
}
