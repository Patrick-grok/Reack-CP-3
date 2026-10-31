// import 'react'
// import './App.css'
// import TodoList from "./component/TodoList.tsx"
// // import UseEffect from "./component/UseEffect.tsx";
// import Effect from "./component/UseEffect.tsx";
// // import TaskList from "./component/Select.tsx"
// import AutoFocusCounter from './component/autofocus';
// import UserProfile from "./hooks/UserProfile.tsx";
//
// const App = () => {
//     const tasks = [
//         {id:1, title:"Новое", isCompleted: true},
//         {id:2, title:"новая пометка", isCompleted: true},
//         {id:3, title:"React", isCompleted: true},
//         {id:4, title:"WEBChtorm", isCompleted: false},
//     ];
//
//     return (
//         <div>
//             <TodoList initialTasks={tasks} />
//             <Effect />
//             <AutoFocusCounter />
//             <UserProfile/>
//
//         </div>    );
// };
//
// export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import HomePage from "./component/pages/HomePage";
import TasksPage from "./component/pages/Taskspage";
import AboutPage from "./component/pages/Aboutpage";
import ProductsPage from "./component/pages/ProductsPage";
import ProductPage from "./component/pages/ProductPage";
import LoginPage from "./component/pages/LoginPage";
import ProfilePage from "./component/pages/ProfilePage";
import NotFoundPage from "./component/pages/NotFoundPage";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#811" : "#000",
});

const App = () => {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <BrowserRouter>
            <nav style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                <NavLink to="/" end style={linkStyle}>Главная</NavLink>
                <NavLink to="/tasks" style={linkStyle}>Задачи</NavLink>
                <NavLink to="/products" style={linkStyle}>Каталог</NavLink>
                <NavLink to="/profile" style={linkStyle}>Профиль</NavLink>
                <NavLink to="/about" style={linkStyle}>О нас</NavLink>
                {isAuth
                    ? <button onClick={() => setIsAuth(false)}>Выйти</button>
                    : <NavLink to="/login" style={linkStyle}>Войти</NavLink>}
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/login" element={<LoginPage onLogin={() => setIsAuth(true)} />} />
                <Route
                    path="/profile"
                    element={<PrivateRoute isAuth={isAuth}><ProfilePage /></PrivateRoute>}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;