import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    title: string;
    children: ReactNode;
    onClose: () => void;
};

export default function Modal({ title, children, onClose }: ModalProps) {
    return createPortal(
        <>
            <div
                className='fixed left-0 top-0 z-[9] h-screen w-full bg-[rgba(0,0,0,0.75)]'
                onClick={onClose}
            />
            <dialog open className='top-[10%] z-10 max-w-[90%] rounded-md p-6'>
                <h2 className='text-3xl font-semibold'>{title}</h2>
                {children}
            </dialog>
        </>,
        document.getElementById('modal') as HTMLElement,
    );
}
