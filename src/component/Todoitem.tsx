import 'react'

interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface TaskItemProps {
    task: Task;
}

function TodoItem ({ task }: TaskItemProps) {
    return (
        <li
            style={{
                textDecoration: task.isCompleted ? 'line-through' : 'none'
            }}
        >
            {task.title}
        </li>
    )
}
export default TodoItem