import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

type Props = { isAuth: boolean; children: ReactNode };

// если пользователь не вошёл отправляем на /login
const PrivateRoute = ({ isAuth, children }: Props) => {
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location.pathname + location.search }} replace />;
    }
    return <>{children}</>;
};

export default PrivateRoute;