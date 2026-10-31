import { useState } from 'react'

interface TodoButtonProps {
    onAddTask: (title: string) => void;
}

const TodoButton = ({ onAddTask }: TodoButtonProps) => {
    const [newTask, setNewTask] = useState<string>("");

    function createTask() {
        if (newTask.trim()) {
            onAddTask(newTask);
            setNewTask("");
        }
    }

    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && createTask()}
            />
            <button onClick={createTask}>Добавить</button>
        </div>
    )
}
export default TodoButton