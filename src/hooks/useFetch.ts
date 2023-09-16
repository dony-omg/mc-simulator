import { useState, useEffect } from "react";
import { App } from 'antd';
/**
 * @name useFetch hook
 * @param url  - url to fetch data from
 * @returns data, loading
 */
export const useFetch = (url: string, option?: any) => {
    const { message } = App.useApp();

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(url, { ...option });
                const data = await response.json();
                if (data.verdict === "success") {
                    setData(data);
                    message.success('Fetch data successfully');
                }
                setLoading(false);
            } catch (error) {
                console.error(error);
                message.error('Fetch data failed');
                setError(`${error} Could not Fetch Data `);
                setLoading(false);
            }

        };
        fetchData();
    }, [url]);

    return { data, loading, error };
}