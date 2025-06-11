import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
};
