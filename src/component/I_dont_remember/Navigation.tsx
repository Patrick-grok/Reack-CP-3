import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink style={{  margin: '10px' }} to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Главная
            </NavLink>
            <NavLink style={{  margin: '10px' }} to="/tasks" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Задачи
            </NavLink>
            <NavLink style={{  margin: '10px' }} to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                О нас
            </NavLink>
        </nav>
    );
};

export default Navigation;