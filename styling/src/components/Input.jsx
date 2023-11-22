export default function Input({ label, invalid, ...props }) {
    return (
        <p>
            {label && (
                <label
                    className={`mb-2 block text-sm font-bold uppercase text-[#6b7280] ${
                        invalid && 'invalid'
                    }`}
                >
                    {label}
                </label>
            )}
            <input
                className={`w-full rounded border border-transparent bg-[#d1d5db] px-4 py-3 text-[#374151] outline-none drop-shadow-md duration-300 ease-in focus:ring focus:ring-blue-400 focus:ring-offset-2 ${
                    invalid && 'invalid'
                }`}
                {...props}
            />
        </p>
    );
}
