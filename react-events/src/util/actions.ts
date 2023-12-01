import { AxiosError, type AxiosResponse } from 'axios';
import { redirect, type LoaderFunctionArgs, json } from 'react-router-dom';

import axios from '@/util/api';
import { Event } from '@/types/event';
import {
    authLoginSchema,
    authSignupSchema,
    eventSchema,
    newsletterSchema,
} from '@/util/validators';
import { ZodError } from 'zod';

export async function postEditEvent({ request, params }: LoaderFunctionArgs) {
    const id = params.eventId;
    const formData = await request.formData();
    const event = eventSchema.parse(Object.fromEntries(formData));

    try {
        const response: AxiosResponse<{ message: string; event: Event }> =
            await axios.patch(`/events/${id}`, event);

        return response.data;
    } catch (err) {
        const message = 'Something went wrong updating event.';
        if (err instanceof AxiosError) {
            throw json(
                { message: err.response?.data?.message || message },
                { status: err.status || 500 },
            );
        }
        throw json({ message, status: 500 });
    }
}

export async function postCreateEvent({ request }: LoaderFunctionArgs) {
    const formData = await request.formData();
    const event = eventSchema.parse(Object.fromEntries(formData));
    const newEvent: Omit<Event, 'id'> = {
        ...event,
    };

    try {
        const response: AxiosResponse<Event> = await axios.post(
            '/events',
            newEvent,
        );

        return response.data;
    } catch (err) {
        const message = 'Something went wrong creating event.';
        if (err instanceof AxiosError) {
            throw json(
                { message: err.response?.data?.message || message },
                { status: err.status || 500 },
            );
        }
        throw json({ message, status: 500 });
    }
}

export async function deleteEvent({ params }: LoaderFunctionArgs) {
    const id = params.eventId;
    try {
        await axios.delete(`/events/${id}`);
    } catch (err) {
        const message = 'Something went wrong deleting event.';
        if (err instanceof AxiosError) {
            throw json(
                { message: err.response?.data?.message || message },
                { status: err.status || 500 },
            );
        }
        throw json({ message, status: 500 });
    }

    return redirect('/events');
}

export async function newsletterSignup({ request }: LoaderFunctionArgs) {
    const formData = await request.formData();
    const userInfo = newsletterSchema.parse(Object.fromEntries(formData));
    return { message: `Successfully signed up email: ${userInfo.email}` };
}

type AuthenticateUserResponse = {
    message?: string;
    token?: string;
    errors?: string[];
};

export async function authenticateUser({
    request,
}: LoaderFunctionArgs): Promise<AuthenticateUserResponse> {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') ?? 'login';
    const formData = await request.formData();

    try {
        if (mode === 'login') {
            const authData = authLoginSchema.parse(
                Object.fromEntries(formData),
            );
            return await axios
                .post('/login', authData)
                .then((res) => res.data)
                .catch((err) => err.response.data);
        } else if (mode === 'signup') {
            const authData = authSignupSchema.parse(
                Object.fromEntries(formData),
            );
            return await axios
                .post('/signup', authData)
                .then((res) => res.data)
                .catch((err) => err.response.data);
        } else {
            throw json({ message: 'Unsupported mode.' }, { status: 422 });
        }
    } catch (err) {
        if (err instanceof ZodError) {
            return { errors: err.issues.map(({ message }) => message) };
        }
        throw json({ message: 'Something went wrong' }, { status: 500 });
    }
}

export function logoutUser() {
    localStorage.removeItem('token');
    return null;
}
