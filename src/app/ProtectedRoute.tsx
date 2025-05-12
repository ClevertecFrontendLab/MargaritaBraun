import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router';

import { AuthUser } from './model/AuthenticationTypes';

type ProtectedRouteProps = {
    user: AuthUser | null;
    redirectPath?: string;
    children?: ReactNode;
};

export const ProtectedRoute = ({ user, redirectPath = '/', children }: ProtectedRouteProps) => {
    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
    // return children;
};
