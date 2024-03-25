import Card from '@/components/ui/Card';

interface FavoriteItemProps {
    id: string;
    title: string;
    description: string;
}

export default function FavoriteItem({
    title,
    description,
}: FavoriteItemProps) {
    return (
        <Card className='mb-4'>
            <div>
                <h2 className='my-2'>{title}</h2>
                <p className='my-2'>{description}</p>
            </div>
        </Card>
    );
}
