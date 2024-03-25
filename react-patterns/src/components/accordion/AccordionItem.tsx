import { type ReactNode, createContext, useContext } from 'react';

const AccordionItemContext = createContext<string | null>(null);

interface AccordionItemProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export function useAccordionItemContext() {
    const ctx = useContext<string | null>(AccordionItemContext);

    if (!ctx) {
        throw new Error(
            'You must use this context in the scope of a <AccordionItem> component!',
        );
    }

    return ctx;
}

export default function AccordionItem({
    id,
    className,
    children,
}: AccordionItemProps) {
    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>{children}</li>
        </AccordionItemContext.Provider>
    );
}
