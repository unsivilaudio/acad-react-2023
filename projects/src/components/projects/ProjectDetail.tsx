import Button from '@/components/ui/Button';

type ProjectDetailProps = {
    title: string;
    description: string;
    date: Date;
    onDeleteProject(): void;
};

export default function ProjectDetail({
    title,
    description,
    date,
    onDeleteProject,
}: ProjectDetailProps) {
    const formattedDate = date.toDateString();

    return (
        <div className='space-y-8 py-12'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold capitalize'>{title}</h1>
                    <p className='italic text-[#4e4c4c]'>{formattedDate}</p>
                </div>
                <div>
                    <Button
                        variant='text'
                        className='border-none text-base hover:border-none hover:text-red-500'
                        onClick={onDeleteProject}
                    >
                        Delete
                    </Button>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
}
