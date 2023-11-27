import { useState, useEffect, useCallback } from 'react';

async function sendHttpRequest(url: string, config?: RequestInit) {
    const response = await fetch(url, config);

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(
            resData.message || 'Something went wrong, failed to send request.',
        );
    }

    return resData;
}

export default function useHttp<T>(
    url: string,
    config?: RequestInit,
    initialData?: T,
) {
    const [data, setData] = useState<T | null>(initialData || null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const sendRequest = useCallback(
        async (data?: BodyInit) => {
            try {
                setIsLoading(true);
                const resData = await sendHttpRequest(url, {
                    ...config,
                    body: data,
                });
                setData(resData);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                    return;
                } else {
                    setError('Something went really wrong.');
                }
            }
            setIsLoading(false);
        },
        [config, url],
    );

    const clearData = useCallback(() => {
        setData(initialData || null);
        setError(undefined);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (!config || config.method === 'GET') {
            sendRequest();
        }
    }, [sendRequest, config]);

    return { data, isLoading, error, sendRequest, clearData };
}
