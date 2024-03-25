import { type ReactNode, createContext, useState, useContext } from 'react';

import AccordionItem from '@/components/accordion/AccordionItem';
import AccordionTitle from '@/components/accordion/AccordionTitle';
import AccordionContent from '@/components/accordion/AccordionContent';

type AccordionContextValue = {
    openItemId: string | null;
    toggleItem(id: string): void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

interface AccordionProps {
    children: ReactNode;
    className?: string;
}

export function useAccordionContext() {
    const ctx = useContext<AccordionContextValue | null>(AccordionContext);

    if (!ctx) {
        throw new Error(
            'You must use this context in scope of a <Accordion> component',
        );
    }

    return ctx;
}

export default function Accordion({ children, className }: AccordionProps) {
    const [openItemId, setOpenItemId] = useState<null | string>(null);

    function toggleItem(id: string) {
        setOpenItemId((prevId) => (prevId === id ? null : id));
    }

    const contextValue = {
        openItemId,
        toggleItem,
    };

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
