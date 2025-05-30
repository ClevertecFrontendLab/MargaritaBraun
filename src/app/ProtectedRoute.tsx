import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router';

type ProtectedRouteProps = {
    redirectPath?: string;
    children?: ReactNode;
};

export const ProtectedRoute = ({ redirectPath = '/login', children }: ProtectedRouteProps) => {
    const testToken = localStorage.getItem('accessToken');

    if (!testToken) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};
