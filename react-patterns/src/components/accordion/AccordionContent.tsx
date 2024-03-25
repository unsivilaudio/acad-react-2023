import { twMerge } from 'tailwind-merge';
import type { ReactNode } from 'react';

import { useAccordionContext } from '@/components/accordion/Accordion';
import { useAccordionItemContext } from '@/components/accordion/AccordionItem';

interface AccordionContentProps {
    children: ReactNode;
    className?: string;
}

export default function AccordionContent({
    className,
    children,
}: AccordionContentProps) {
    const { openItemId } = useAccordionContext();
    const id = useAccordionItemContext();

    const isOpen = openItemId === id;

    return (
        <div
            className={twMerge(
                'h-0 overflow-hidden bg-[#2c344a] px-4 transition-all duration-300',
                className,
                isOpen && 'h-auto py-4',
            )}
        >
            {children}
        </div>
    );
}
