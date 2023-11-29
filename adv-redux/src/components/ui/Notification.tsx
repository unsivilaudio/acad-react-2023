import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useEffect, useRef } from 'react';
import useUI from '@/store/hooks/use-ui';

type NotificationProps = {
    title: string;
    message: string;
    className?: string;
    status?: 'error' | 'success' | 'pending';
};

const Notification = ({
    title,
    message,
    className,
    status,
}: NotificationProps) => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const { clearNotification, notificaton } = useUI();

    useEffect(() => {
        timer.current = setTimeout(clearNotification, 3000);

        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [clearNotification, notificaton]);

    const classes = twMerge(
        clsx(
            'w-full h-12 bg-[#1a8ed1] flex justify-between py-2 px-[10%] items-center text-white',
            {
                'bg-[#690000]': status === 'error',
            },
            {
                'bg-[#1ad1b9]': status === 'success',
            },
            {
                [className as string]: !!className,
            },
        ),
    );

    return (
        <section className={classes}>
            <h2 className='text-base'>{title}</h2>
            <p className='text-base'>{message}</p>
        </section>
    );
};

export default Notification;
