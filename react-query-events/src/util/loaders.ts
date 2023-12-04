import type { LoaderFunctionArgs } from 'react-router-dom';
import { fetchEventById, queryClient } from '@/util/http';

export function editEventLoader({ params }: LoaderFunctionArgs) {
    const eventId = params.id as string;
    return queryClient.fetchQuery({
        queryKey: ['events', eventId],
        queryFn: ({ signal }) => fetchEventById({ signal, id: eventId }),
    });
}
