import { memo } from 'react';

function ExampleButton({ children, onSelect, isSelected }) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}

export default memo(ExampleButton);
