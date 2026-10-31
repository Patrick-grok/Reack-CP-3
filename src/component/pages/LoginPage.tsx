import { useLocation, useNavigate } from "react-router-dom";

type Props = { onLogin: () => void };

const LoginPage = ({ onLogin }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Страница, на которую пользователь хотел попасть до редиректа
    const from = (location.state as { from?: string } | null)?.from ?? "/";

    const handleLogin = () => {
        onLogin();
        navigate(from, { replace: true });
    };

    return (
        <div>
            <h1>Вход</h1>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default LoginPage;