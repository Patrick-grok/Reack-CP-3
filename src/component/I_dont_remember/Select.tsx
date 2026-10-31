import 'react'

interface Select<T> {
    items: T[];
    onSelect: (value: T) => React.ReactNode;
}

function List<T>({ items, onSelect }: Select<T>) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{onSelect(item)}</li>
            ))}
        </ul>
    );
}

// Использование с разными типами данных:
interface Task { id: number; title: string; }

function TaskList({ tasks }: { tasks: Task[] }) {
    return (
        <List<Task>
            items={tasks}
            onSelect={(task) => task.title}
        />
    );
}

export default  TaskList ;