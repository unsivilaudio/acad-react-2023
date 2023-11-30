import type { AxiosResponse } from 'axios';
import { redirect, type LoaderFunctionArgs } from 'react-router-dom';

import axios from '@/util/api';
import { Event } from '@/types/event';
import { eventSchema, newsletterSchema } from '@/util/validators';

export async function postEditEvent({ request, params }: LoaderFunctionArgs) {
    const id = params.eventId;
    const formData = await request.formData();
    const event = eventSchema.parse(Object.fromEntries(formData));

    const response: AxiosResponse<{ message: string; event: Event }> =
        await axios.patch(`/events/${id}`, event);

    return response.data;
}

export async function postCreateEvent({ request }: LoaderFunctionArgs) {
    const formData = await request.formData();
    const event = eventSchema.parse(Object.fromEntries(formData));
    const newEvent: Omit<Event, 'id'> = {
        ...event,
    };

    const response: AxiosResponse<Event> = await axios.post(
        '/events',
        newEvent,
    );

    return response.data;
}

export async function deleteEvent({ params }: LoaderFunctionArgs) {
    const id = params.eventId;
    await axios.delete(`/events/${id}`);

    return redirect('/events');
}

export async function newsletterSignup({ request }: LoaderFunctionArgs) {
    const formData = await request.formData();
    const userInfo = newsletterSchema.parse(Object.fromEntries(formData));
    return { message: `Successfully signed up email: ${userInfo.email}` };
}
