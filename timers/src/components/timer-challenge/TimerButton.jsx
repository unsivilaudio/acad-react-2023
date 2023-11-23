export default function TimerButton({ children, isActive, ...props }) {
    const btnClass = `mt-4 rounded border-none bg-[#12352f] px-4 py-2 text-lg text-[#edfcfa] hover:bg-[#051715] duration-300 ${
        isActive ? 'animate-flash' : ''
    }`;

    return (
        <button className={btnClass} {...props}>
            {children}
        </button>
    );
}
