import { type SyntheticEvent, useState } from 'react';

export default function useInput(
    defaultValue: string,
    validationFn: (val: string) => boolean,
) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    function handleInputChange(event: SyntheticEvent<HTMLInputElement>) {
        const { value } = event.currentTarget;
        setEnteredValue(value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid,
    };
}
