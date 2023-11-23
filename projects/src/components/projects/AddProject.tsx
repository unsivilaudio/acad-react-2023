import { type SyntheticEvent, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import Input from '@/components/ui/Input';
import { useProjectsContext } from '@/context/projects-context';
import Button from '@/components/ui/Button';

type AddProjectProps = {
    open: boolean;
    onClose(): void;
};

export default function AddProject({ open, onClose }: AddProjectProps) {
    const dialog = useRef<HTMLDialogElement>(null);
    const projectCtx = useProjectsContext();

    useEffect(() => {
        const current = dialog.current;
        if (open) {
            current!.showModal();
        }

        return () => {
            if (current) {
                current!.close();
            }
        };
    }, [open]);

    function handleSubmitForm(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const enteredTitle = formData.get('title') as string;
        const enteredDescription = formData.get('description') as string;
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '') {
            return;
        }
        projectCtx.addProject({
            title: enteredTitle,
            description: enteredDescription,
        });
    }

    return createPortal(
        <dialog
            ref={dialog}
            onClose={onClose}
            className='animate-slide-ft fixed z-50 mx-auto mt-[10%] w-[30rem] rounded-lg p-8 pb-12 drop-shadow-lg'
        >
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
                        onClick={onClose}
                        className='text-[#2d2d2d] hover:text-[#ef002c]'
                    >
                        Cancel
                    </Button>
                    <Button>Save</Button>
                </div>
            </form>
        </dialog>,
        document.getElementById('modal') as HTMLElement,
    );
}
