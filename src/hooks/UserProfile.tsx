import 'react'
import useFetch from './useFetch.tsx'

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

export default UserProfile