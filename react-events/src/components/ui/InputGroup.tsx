import {
    type ComponentPropsWithoutRef,
    type ElementType,
    forwardRef,
    LegacyRef,
} from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type InputGroupProps<T extends ElementType> = {
    as?: T;
    type?: 'text' | 'number' | 'date' | 'url';
    label?: string;
} & ComponentPropsWithoutRef<'input'>;

type TextGroupProps<T extends ElementType> = {
    as?: T;
    type: 'textarea';
    label?: string;
} & ComponentPropsWithoutRef<'textarea'>;

function isTextAreaRef<T extends ElementType>(
    props: TextGroupProps<T> | InputGroupProps<T>,
    _ref: LegacyRef<HTMLInputElement | HTMLTextAreaElement>,
): _ref is LegacyRef<HTMLTextAreaElement> {
    return props.type === 'textarea';
}
function isTextAreaInput<T extends ElementType>(
    props: TextGroupProps<T> | InputGroupProps<T>,
): props is TextGroupProps<T> {
    return props.type === 'textarea';
}

function InputGroup<T extends ElementType>(
    props: InputGroupProps<T> | TextGroupProps<T>,
    ref: LegacyRef<HTMLInputElement> | LegacyRef<HTMLTextAreaElement>,
) {
    const { as, id, label, className } = props;
    const Wrapper = as || 'p';
    const classes = twMerge(
        clsx(
            'font-inherit block w-full py-2 px-4 rounded-lg focus:ring focus:ring-offset-2 focus:ring-offset-transparent focus:ring-blue-500/75 duration-300 outline-none',
            {
                [className as string]: !!className,
            },
        ),
    );

    let content: JSX.Element;
    if (isTextAreaRef(props, ref) && isTextAreaInput(props)) {
        const { id, ...inputProps } = props;

        content = (
            <textarea
                id={id}
                name={id}
                ref={ref}
                {...inputProps}
                className={classes}
            ></textarea>
        );
    } else if (!isTextAreaRef(props, ref) && !isTextAreaInput(props)) {
        const { type, id, ...inputProps } = props;

        content = (
            <input
                id={id}
                name={id}
                ref={ref}
                type={type || 'text'}
                {...inputProps}
                className={classes}
            />
        );
    } else {
        content = <></>;
    }

    return (
        <Wrapper className=''>
            {label && (
                <label
                    htmlFor={id}
                    className='mb-1 block text-base font-bold uppercase'
                >
                    {label}
                </label>
            )}
            {content}
        </Wrapper>
    );
}

export default forwardRef(InputGroup);
