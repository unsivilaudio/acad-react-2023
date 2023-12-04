import { motion } from 'framer-motion';

type BadgeProps = {
    caption: number;
};

export default function Badge({ caption }: BadgeProps) {
    return (
        <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3 }}
            className='ml-2 rounded bg-[#0f61ef] px-2 py-1 text-xs text-white'
        >
            {caption}
        </motion.span>
    );
}
