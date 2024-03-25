import { twMerge } from 'tailwind-merge';
import { useAccordionContext } from '@/components/accordion/Accordion';
import { useAccordionItemContext } from '@/components/accordion/AccordionItem';

interface AccordionTitleProps {
    children: string;
    className?: string;
}

export default function AccordionTitle({
    className,
    children,
}: AccordionTitleProps) {
    const { toggleItem } = useAccordionContext();
    const id = useAccordionItemContext();

    return (
        <h3
            className={twMerge(
                'cursor-pointer border-b-2 border-[#515a75] bg-[#363e57] p-4 text-lg text-[#c1d9fa]',
                className,
            )}
            onClick={() => toggleItem(id)}
        >
            {children}
        </h3>
    );
}
