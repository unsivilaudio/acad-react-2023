import {
    type ComponentPropsWithoutRef,
    type ReactNode,
    useRef,
    useEffect,
} from 'react';
import { createPortal } from 'react-dom';

type ModalProps = ComponentPropsWithoutRef<'dialog'> & {
    open: boolean;
    toggleShow: (show?: boolean) => void;
    children: ReactNode;
};

export default function Modal({ children, open, toggleShow }: ModalProps) {
    const dialog = useRef<HTMLDialogElement>(null);

    function handleCloseModal() {
        if (toggleShow) {
            toggleShow(false);
        }
    }

    useEffect(() => {
        const modal = dialog.current;
        if (open && modal) {
            modal.showModal();
        }

        return () => {
            if (modal) {
                modal.close();
            }
        };
    }, [open]);

    return createPortal(
        <dialog
            ref={dialog}
            onClose={handleCloseModal}
            className='animate-slide-up mx-auto mt-[12%] w-[80%] max-w-[40rem] rounded-lg border-none bg-[#e4ddd4] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.6)] backdrop:bg-[rgba(0,0,0,0.55)]'
        >
            {children}
        </dialog>,
        document.getElementById('modal') as HTMLElement,
    );
}
