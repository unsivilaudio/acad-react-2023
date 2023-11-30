import type { AxiosResponse } from 'axios';
import { redirect, type LoaderFunctionArgs } from 'react-router-dom';
import { Event } from '@/types/event';
import axios from '@/util/api';
import { eventSchema } from '@/util/validators';

export async function fetchEvents() {
    const response: AxiosResponse<{ events: Event[] }> =
        await axios.get('/events');
    return response.data;
}

export async function fetchEventById({ params }: LoaderFunctionArgs) {
    const id = params.eventId;
    const response: AxiosResponse<{ event: Event }> = await axios.get(
        `/events/${id}`,
    );
    return response.data;
}
