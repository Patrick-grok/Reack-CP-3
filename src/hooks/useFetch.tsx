import 'react'
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
}

function useFetch<T>(url: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch(url)
            .then((response) => response.json())
            .then((result: T) => setData(result))
            .catch((err) => setError(String(err)))
            .finally(() => setIsLoading(false));
    }, [url]);

    return { data, isLoading, error };
}
interface User {
    id: number;
    name: string;
    email: string;
}

const UserProfile = () => {
    const { data, isLoading, error } = useFetch<User>(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (!data) return null;

    return (
        <div>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
        </div>
    );
}

export default useFetch;
