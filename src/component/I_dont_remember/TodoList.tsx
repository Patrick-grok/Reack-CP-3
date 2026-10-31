import { useState, useMemo } from 'react'   // NEW: useMemo
import TodoItem from "./Todoitem.tsx"
import TodoButton from "./TaskButton.tsx"
import SearchBar from "./SearchBar.tsx"


export interface Task {
    id: number;
    title: string;
    isCompleted?: boolean;
}

interface TodoListProps {
    initialTasks?: Task[];
}

function TodoList ({ initialTasks = [] }: TodoListProps) {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [unrelated, setUnrelated] = useState(0);   // несвязанное состояние для демонстрации
    const [search, setSearch] = useState('');


    // пересчёт только при изменении tasks
    const completedCount = useMemo(() => {
        console.log('Пересчёт выполненных задач...');
        return tasks.filter((t) => t.isCompleted).length;
    }, [tasks]);


    const addTask = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
    };


    const toggleTask = (id: number) => {
        setTasks(tasks.map((t) =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
        ));
    };


    const visibleTasks = tasks.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <>
            <div>
                {tasks.length === 0 ? (
                    <p>Задач нет</p>
                ) : (
                    <ul>
                        <SearchBar value={search} onChange={setSearch} />
                        {visibleTasks.map((task) => (
                            <TodoItem key={task.id} task={task} onToggle={toggleTask} />
                        ))}
                    </ul>
                )}
            </div>
            <TodoButton onAddTask={addTask} />

            <p>Выполнено: {completedCount} из {tasks.length}</p>
            <button onClick={() => setUnrelated(unrelated + 1)}>
                Несвязанный счётчик: {unrelated}
            </button>


        </>
    )
}
export default TodoList