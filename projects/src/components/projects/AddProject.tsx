import { type SyntheticEvent, useRef } from 'react';

import Input from '@/components/ui/Input';
import { useProjectsContext } from '@/context/projects-context';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';

export default function AddProject() {
    const modal = useRef<HTMLDialogElement>(null);
    const {
        addProject,
        showAddProject: open,
        toggleShowAddProject,
    } = useProjectsContext();

    function handleSubmitForm(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const enteredTitle = formData.get('title') as string;
        const enteredDescription = formData.get('description') as string;
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '') {
            return;
        }
        addProject({
            title: enteredTitle,
            description: enteredDescription,
        });
        event.currentTarget.reset();
        handleCloseModal();
    }

    function handleCloseModal() {
        toggleShowAddProject(false);
    }

    return (
        <Modal ref={modal} onClose={handleCloseModal} open={open}>
            <h2 className='font-title text-3xl font-semibold'>
                Add A New Project
            </h2>
            <form onSubmit={handleSubmitForm}>
                <div className='flex flex-col gap-2'>
                    <Input
                        id='title'
                        label='Title'
                        placeholder='Project Title'
                        required
                    />
                    <Input
                        as='textarea'
                        id='description'
                        label='Description'
                        rows={5}
                        className='resize-none'
                        placeholder='...a short description of the project'
                        required
                    />
                </div>
                <div className='mt-4 flex items-center justify-end gap-4'>
                    <Button
                        variant='text'
                        type='button'
                        onClick={handleCloseModal}
                        className='text-[#2d2d2d] hover:text-[#ef002c]'
                    >
                        Cancel
                    </Button>
                    <Button>Save</Button>
                </div>
            </form>
        </Modal>
    );
}
