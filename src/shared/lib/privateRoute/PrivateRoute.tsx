import { Navigate, Outlet } from 'react-router';
import { useStore } from '@store/index';

export const PrivateRoute = () => {
  const isAuth = useStore((state) => state.isAuth);

  return isAuth ? <Outlet /> : <Navigate to={'/login'} replace={true} />;
};
