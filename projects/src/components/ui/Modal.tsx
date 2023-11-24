import {
    forwardRef,
    useRef,
    useEffect,
    useImperativeHandle,
    type ComponentPropsWithRef,
    type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

type ModalProps = ComponentPropsWithRef<'dialog'> & {
    children: ReactNode;
    onClose?(): void;
    open: boolean;
};

type ModalRefProps = {
    show(): void;
};

const Modal = forwardRef<ModalRefProps, ModalProps>(
    ({ children, onClose, open, ...props }, ref) => {
        const dialog = useRef<HTMLDialogElement>(null);

        useImperativeHandle(ref, () => {
            return {
                show() {
                    dialog.current!.showModal();
                },
            };
        });

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
        return createPortal(
            <dialog
                className='animate-slide-ft fixed z-50 mx-auto mt-[10%] w-[30rem] rounded-lg p-8 pb-12 drop-shadow-lg'
                ref={dialog}
                onClose={onClose}
                {...props}
            >
                {children}
            </dialog>,
            document.getElementById('modal') as HTMLElement,
        );
    },
);

export default Modal;
