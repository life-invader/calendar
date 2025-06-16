import { useAuthSlice } from '@shared/model/auth/authSlice';
import { selectIsAuthenticated } from '@shared/model/auth/selectors';
import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
  const isAuthenticated = useAuthSlice(selectIsAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
};
