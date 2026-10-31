import 'react'

interface Props {
    name: string;
    age: number;
    isOnline?: boolean;
    onMessageClick: () => void;
}

function UserCard({ name, isOnline, onMessageClick }: Props) {
    return (
        <>
            <button onClick={onMessageClick} disabled={isOnline}>
                {name}
            </button>
        </>
    )
}

export default UserCard