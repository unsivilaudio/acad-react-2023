type ErrorBlockProps = {
    title: string;
    message: string;
};

export default function ErrorBlock({ title, message }: ErrorBlockProps) {
    return (
        <div className='my-4 flex items-center gap-8 rounded bg-[#f0d9e5] p-4 text-left text-[#890b35]'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#890b35] text-3xl text-white'>
                !
            </div>
            <div className='error-block-text'>
                <h2 className='text-lg font-semibold'>{title}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
}
