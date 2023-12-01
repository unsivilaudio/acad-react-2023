import { redirect, type LoaderFunctionArgs, json } from 'react-router-dom';
import type { AxiosResponse } from 'axios';

import axios from '@/util/api';
import { Event } from '@/types/event';

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

export async function getAuthTokenResponse() {
    const tokenPromise = new Promise((res, rej) => {
        let token = localStorage.getItem('token');
        if (token) {
            token = JSON.parse(token);
            res(token);
        } else {
            rej(null);
        }
    });

    return tokenPromise
        .then((token) => {
            return json(token, { status: 200 });
        })
        .catch(() => {
            return json(null, { status: 400 });
        });
}

export function tokenLoader() {
    return getAuthTokenResponse();
}

export async function checkAuthLoader() {
    const response = await getAuthTokenResponse();

    if (response.status === 400) {
        return redirect('/auth');
    }

    return null;
}
