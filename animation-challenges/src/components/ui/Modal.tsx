import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

type ModalProps = {
    title: string;
    children: ReactNode;
    onClose: () => void;
};

export default function Modal({ title, children, onClose }: ModalProps) {
    // const hiddenAnimationState = { opacity: 0, y: 30 };
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
    };

    return createPortal(
        <>
            <motion.div
                className='fixed left-0 top-0 z-[9] h-screen w-full bg-[rgba(0,0,0,0.75)]'
                exit={{ opacity: 0 }}
                onClick={onClose}
            />
            <motion.dialog
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='exit'
                open
                className='top-[10%] z-10 max-w-[90%] rounded-md p-6'
            >
                <h2 className='text-3xl font-semibold'>{title}</h2>
                {children}
            </motion.dialog>
        </>,
        document.getElementById('modal') as HTMLElement,
    );
}
