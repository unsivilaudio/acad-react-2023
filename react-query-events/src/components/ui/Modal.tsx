import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        // Using useEffect to sync the Modal component with the DOM Dialog API
        // This code will open the native <dialog> via it's built-in API whenever the <Modal> component is rendered
        if (!dialog.current) return;
        const modal = dialog.current;
        modal.showModal();

        return () => {
            modal.close(); // needed to avoid error being thrown
        };
    }, []);

    return createPortal(
        <dialog
            className='animate-slide-down-fi z-100 fixed left-[calc(50%-15rem)] top-[10vh] flex max-h-[80vh] w-[30rem] flex-col justify-between rounded-md border-none bg-[#e2e5eb] p-8 shadow-[0_2px_8px_rgba(0,0,0,0.26)] backdrop:fixed backdrop:left-0 backdrop:top-0 backdrop:h-screen backdrop:w-screen backdrop:bg-[rgba(0,0,0,0.5)]'
            ref={dialog}
            // onClose={onClose}
        >
            {children}
        </dialog>,
        document.getElementById('modal') as HTMLElement,
    );
}
