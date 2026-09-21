import 'react';
import TodoList from "./component/TodoList.tsx";


const App = () => {
    const tasks =[
        {id:1, title:"Новое", isCompleted: true},
        {id:2, title:"новая пометка", isCompleted: false},
        {id:3, title:"React", isCompleted: true},
        {id:4, title:"WEBChtorm", isCompleted: false},
    ];
    return (
        <div>
            <TodoList tasks={tasks}/>
        </div>
    );
};

export default App;