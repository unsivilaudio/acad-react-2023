import { Event } from '@/types/event';
import { queryClient, updateEvent } from '@/util/http';
import { ActionFunctionArgs, redirect } from 'react-router-dom';

export async function editEventAction({ request, params }: ActionFunctionArgs) {
    const eventId = params.id as string;
    const formData = await request.formData();
    const updatedEventData = Object.fromEntries(formData) as Omit<Event, 'id'>;
    await updateEvent({ id: eventId, event: updatedEventData });
    await queryClient.invalidateQueries({ queryKey: ['events', eventId] });
    return redirect('../');
}
