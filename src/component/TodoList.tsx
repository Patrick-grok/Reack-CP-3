import 'react'
import TodoItem from "./Todoitem.tsx"

interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface TaskBoardProps {
    tasks: Task[]
}

function TodoList ({ tasks }: TaskBoardProps) {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>Задач нет</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <TodoItem key={task.id} task={task} />
                    ))}
                </ul>
            )}
        </div>
    )
}
export default TodoList