type BadgeProps = {
    caption: number;
};

export default function Badge({ caption }: BadgeProps) {
    return (
        <span className='ml-2 rounded bg-[#0f61ef] px-2 py-1 text-xs text-white'>
            {caption}
        </span>
    );
}
