import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
  const isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
};
