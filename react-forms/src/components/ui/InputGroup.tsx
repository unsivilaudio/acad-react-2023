import {
    type ComponentPropsWithoutRef,
    type ReactNode,
    type ReactElement,
    type FunctionComponentElement,
    type ReactComponentElement,
    cloneElement,
    forwardRef,
} from 'react';

type LabelProps = ComponentPropsWithoutRef<'label'> & {
    children: ReactNode;
};

function Label({ children, id }: LabelProps) {
    return (
        <label
            className='mb-1 block text-sm font-bold uppercase text-[#9bafaf]'
            htmlFor={id}
        >
            {children}
        </label>
    );
}

type InputProps = ComponentPropsWithoutRef<'input'> & {
    type: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, id, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className='block w-full max-w-[15rem] rounded border border-[#758a8a] bg-[#869999] p-2 text-base text-[#142020]'
                type={type}
                id={id}
                name={id}
                {...props}
            />
        );
    },
);

type SelectProps = ComponentPropsWithoutRef<'select'> & {
    children: ReactElement<typeof Option>[];
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ id, children, ...props }, ref) => {
        return (
            <select
                className='block w-full max-w-[15rem] rounded border border-[#758a8a] bg-[#869999] p-2 text-base text-[#142020]'
                ref={ref}
                name={id}
                {...props}
            >
                {children}
            </select>
        );
    },
);

type OptionProps = ComponentPropsWithoutRef<'option'> & {
    children: ReactNode;
    value: string | number;
};

function Option({ children, value }: OptionProps) {
    return <option value={value}>{children}</option>;
}

type CheckBoxProps = ComponentPropsWithoutRef<'input'> & {
    value: string | number;
    children: ReactNode;
};

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
    ({ id, value, children, ...props }, ref) => {
        return (
            <div className='flex items-center'>
                <input
                    className='mr-2 inline w-auto bg-transparent text-[#d9e2f1]'
                    ref={ref}
                    id={`${id}-${value}`}
                    name={id}
                    value={value}
                    type='checkbox'
                    {...props}
                />
                <label
                    htmlFor={id}
                    className='m-0 block text-sm font-bold uppercase text-[#9bafaf]'
                >
                    {children}
                </label>
            </div>
        );
    },
);

type InputGroupWithoutLabel = ReactComponentElement<typeof Input, InputProps>;

type InputGroupWithLabel = [
    FunctionComponentElement<LabelProps>,
    FunctionComponentElement<InputProps>,
];

function isGroupWithLabel(
    children: InputGroupWithLabel | InputGroupWithoutLabel,
): children is InputGroupWithLabel {
    return Array.isArray(children) && children.length === 2;
}

export default function InputGroup({
    children,
    invalid,
    error,
    name,
    ...props
}: {
    name: string;
    invalid?: boolean;
    error?: ReactNode;
    children: InputGroupWithLabel | InputGroupWithoutLabel;
}) {
    if (Array.isArray(children)) {
        if (isGroupWithLabel(children)) {
            const cloned: ReactNode[] = [];
            const [label, input] = children;
            const labelCmp = cloneElement(label, {
                ...label.props,
                key: `input-group-${name}__label`,
                id: name,
            });
            const inputCmp = cloneElement(input, {
                ...input.props,
                key: `input-group-${name}__input`,
                id: name,
            });
            cloned.push(labelCmp, inputCmp);
            return (
                <div {...props}>
                    {cloned}
                    {invalid && error ? (
                        <p className='h-8 py-2 text-sm text-[#ffca99]'>
                            {error}
                        </p>
                    ) : null}
                </div>
            );
        }
    }

    return (
        <div {...props}>
            {cloneElement(children, { id: name })}
            {invalid && error ? (
                <p className='h-8 py-2 text-sm text-[#ffca99]'>{error}</p>
            ) : null}
        </div>
    );
}

type CheckBoxGroupSingle = FunctionComponentElement<CheckBoxProps>;
type CheckBoxGroupArray = FunctionComponentElement<CheckBoxProps>[];

type CheckBoxGroupProps = ComponentPropsWithoutRef<'div'> & {
    name: string;
    invalid?: boolean;
    error?: ReactNode;
    children: CheckBoxGroupSingle | CheckBoxGroupArray;
};

function isCheckboxGroup(
    children: CheckBoxGroupSingle | CheckBoxGroupArray,
): children is CheckBoxGroupArray {
    return Array.isArray(children);
}

function CheckBoxGroup({
    name,
    invalid,
    error,
    children,
    ...props
}: CheckBoxGroupProps) {
    if (isCheckboxGroup(children)) {
        const cloned: ReactNode[] = [];
        children.forEach((child, index) => {
            cloned.push(
                cloneElement(child, {
                    ...child.props,
                    key: `input-group-${name}__checkbox-${index}`,
                    id: name,
                }),
            );
        });
        return (
            <div className='flex flex-col gap-2' {...props}>
                {cloned}
                {invalid && error ? (
                    <p className='h-8 py-2 text-sm text-[#ffca99]'>{error}</p>
                ) : null}
            </div>
        );
    }

    return (
        <div {...props}>
            {cloneElement(children, { id: name })}
            {invalid && error ? (
                <p className='h-8 py-2 text-sm text-[#ffca99]'>{error}</p>
            ) : null}
        </div>
    );
}

InputGroup.Select = Select;
InputGroup.Option = Option;
InputGroup.Input = Input;
InputGroup.Label = Label;
InputGroup.CheckBoxGroup = CheckBoxGroup;
InputGroup.CheckBox = CheckBox;
