import { useState } from 'react';

import { log } from '../../log.js';

function HistoryItem({ count }) {
    log('<HistoryItem /> rendered', 3);

    const [selected, setSelected] = useState(false);
    let classes = 'w-8 ml-2 text-[#8eb6b3] py-1';

    if (selected) {
        classes += ' bg-[#335453] text-[#d9f7f6] rounded';
    }

    function handleClick() {
        setSelected((prevSelected) => !prevSelected);
    }

    return (
        <li
            onClick={handleClick}
            className={`${classes} first:text-xl first:font-bold first:text-[#87f0e9]`}
        >
            {count}
        </li>
    );
}

export default function CounterHistory({ history }) {
    log('<CounterHistory /> rendered', 2);

    return (
        <ol className='mx-auto flex flex-col items-center justify-center gap-1 text-center'>
            {history.map((count) => (
                <HistoryItem key={count.id} count={count.value} />
            ))}
        </ol>
    );
}
