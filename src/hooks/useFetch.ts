import { useState, useEffect } from "react";

/**
 * @name useFetch hook
 * @param url  - url to fetch data from
 * @returns data, loading
 */
export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return { data, loading };
}