import { useState } from 'react';

export const usePost = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);


    const postData = async (body: any) => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    return { data, error, loading, postData }
}