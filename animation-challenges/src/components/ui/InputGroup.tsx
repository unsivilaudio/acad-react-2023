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
    id: string;
    type?: 'text' | 'number' | 'date' | 'url' | 'email' | 'password';
    label?: string;
} & ComponentPropsWithoutRef<'input'>;

type TextGroupProps<T extends ElementType> = {
    as?: T;
    id: string;
    type: 'textarea';
    label?: string;
} & ComponentPropsWithoutRef<'textarea'>;

function isTextAreaRef<T extends ElementType>(
    props: TextGroupProps<T> | InputGroupProps<T>,
    _ref: LegacyRef<HTMLInputElement | HTMLTextAreaElement>,
): _ref is LegacyRef<HTMLTextAreaElement> {
    return props.type === 'textarea';
}
function isInputRef<T extends ElementType>(
    props: TextGroupProps<T> | InputGroupProps<T>,
    _ref: LegacyRef<HTMLInputElement | HTMLTextAreaElement>,
): _ref is LegacyRef<HTMLInputElement> {
    return props.type !== 'textarea';
}
function isTextAreaInput<T extends ElementType>(
    props: TextGroupProps<T> | InputGroupProps<T>,
): props is TextGroupProps<T> {
    return props.type === 'textarea';
}

function InputGroup<T extends ElementType>(
    props: InputGroupProps<T> | TextGroupProps<T>,
    ref: LegacyRef<HTMLInputElement | HTMLTextAreaElement>,
) {
    const { as, id, label, className } = props;
    const Wrapper = as || 'p';
    const classes = twMerge(
        clsx(
            'text-[#414956] border border-[#d9e2f1] font-inherit block w-full p-2 rounded text-sm font-title focus:ring focus:ring-offset-2 focus:ring-offset-transparent focus:ring-blue-500/75 duration-300 outline-none',
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
                style={{ resize: 'none' }}
                {...inputProps}
                className={classes}
            ></textarea>
        );
    } else if (isInputRef(props, ref) && !isTextAreaInput(props)) {
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
                    className='font-title mb-1 block text-sm font-bold uppercase text-[#414956]'
                >
                    {label}
                </label>
            )}
            {content}
        </Wrapper>
    );
}

export default forwardRef(InputGroup);
