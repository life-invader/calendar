import { useAuth } from '@shared/model/auth/hooks';
import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
};
