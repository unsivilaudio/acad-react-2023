import EventsList from '@/components/events/EventsList';

export default function EventsPage() {
    return (
        <>
            <EventsList
                events={[
                    {
                        id: 'e1',
                        title: 'Super Awesome',
                        description: 'A great event no one should miss!',
                        date: '12/22/2023',
                        image: 'https://www.clarknexsen.com/wp-content/uploads/2021/09/ymca-01-1200.jpg',
                    },
                ]}
            />
        </>
    );
}
