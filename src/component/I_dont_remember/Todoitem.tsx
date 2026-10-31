import type { Task } from './TodoList.tsx'

interface TodoItemProps {
    task: Task;
    onToggle: (id: number) => void;
}

const TodoItem = ({ task, onToggle }: TodoItemProps) => {
    return (
        <li
            onClick={() => onToggle(task.id)}
            style={{
                cursor: 'pointer',
                textDecoration: task.isCompleted ? 'line-through' : 'none',
            }}
        >
            {task.title}
        </li>
    )
}

export default TodoItem