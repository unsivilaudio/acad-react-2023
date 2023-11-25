import { log } from '../../log.js';

export default function CounterOutput({ value }) {
    log('<CounterOutput /> rendered', 2);
    let classes = 'block text-5xl text-center font-bold';
    classes += value >= 0 ? ' text-[#9dc5c4]' : ' text-[#f3a6a6] ';
    return <span className={classes}>{value}</span>;
}
