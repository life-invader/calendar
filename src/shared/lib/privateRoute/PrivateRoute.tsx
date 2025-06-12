import { Navigate, Outlet } from 'react-router';
import { useStore } from '@store/index';
import { selectIsAuth } from '@store/selectors';

export const PrivateRoute = () => {
  const isAuthenticated = useStore(selectIsAuth);
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
};
