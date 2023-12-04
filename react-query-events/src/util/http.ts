import { QueryClient } from '@tanstack/react-query';
import AppError from '@/util/app-error';
import type { Event, EventSelectableImage } from '@/types/event';

const API_URL = 'http://dev.me:8080';

export const queryClient = new QueryClient();

type FetchEventsArgs = {
    signal: AbortSignal;
    searchTerm?: string;
    max?: number;
};

export async function fetchEvents({
    signal,
    searchTerm,
    max,
}: FetchEventsArgs) {
    let url = '/events';
    if (searchTerm && max) {
        url += `?search=${searchTerm}&max=${max}`;
    } else if (searchTerm) {
        url += `?search=${searchTerm}`;
    } else if (max) {
        url += `?max=${max}`;
    }

    const response = await fetch(API_URL + url, { signal });

    if (!response.ok) {
        const error = new AppError(
            'An error occurred while fetching the events',
        );
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { events } = await response.json();

    return events as Event[];
}

type FetchEventByIdArgs = {
    signal: AbortSignal;
    id: string;
};

export async function fetchEventById({ signal, id }: FetchEventByIdArgs) {
    const response = await fetch(`${API_URL}/events/${id}`, { signal });

    if (!response.ok) {
        const error = new AppError(
            'An error occurred while fetching the event.',
        );
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { event } = await response.json();

    return event as Event;
}

export type CreateEventArgs = {
    event: Omit<Event, 'id'>;
};

export async function createNewEvent(eventData: CreateEventArgs) {
    const url = API_URL + '/events';
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = new AppError(
            'An error occurred while creating the event.',
        );
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { event } = await response.json();

    return event as Event;
}

type FetchSelectableImagesArgs = {
    signal: AbortSignal;
};

export async function fetchSelectableImages({
    signal,
}: FetchSelectableImagesArgs) {
    const url = '/events/images';
    const response = await fetch(API_URL + url, { signal });

    if (!response.ok) {
        const error = new AppError(
            'An error occurred while fetching the images.',
        );
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { images } = await response.json();

    return images as EventSelectableImage[];
}

export async function deleteEvent({ id }: { id: string }) {
    const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        const error = new AppError(
            'An error occurred while deleting the event.',
        );
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    return response.json() as Promise<Event>;
}

type UpdateEventArgs = {
    id: string;
    event: Omit<Event, 'id'>;
};

export async function updateEvent({ id, event }: UpdateEventArgs) {
    const response = await fetch(`${API_URL}/events/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ event }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = new AppError(
            'An error occurred while updating the event.',
        );
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    return response.json() as Promise<Event>;
}
