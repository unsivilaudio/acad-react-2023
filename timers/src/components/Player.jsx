export default function Player() {
    return (
        <section id='player' className='space-y-4 text-center'>
            <h2 className='text-2xl font-semibold text-[#54a399]'>
                Welcome unknown entity
            </h2>
            <p className='flex items-center justify-center'>
                <input
                    type='text'
                    className='rounded rounded-br-none rounded-tr-none border border-[#54a399] bg-[#192f2b] px-4 py-2 text-[#d1f0ec]'
                />
                <button className='rounded-br rounded-tr border border-[#54a399] bg-[#54a399] px-4 py-2 text-[#061e1a] duration-300 ease-in-out hover:border-[#3c8379] hover:bg-[#3c8379]'>
                    Set Name
                </button>
            </p>
        </section>
    );
}
