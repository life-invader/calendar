import { LoginForm } from '@entities/forms';
import { Navigate } from 'react-router';
import { AppRoutePath } from '@shared/lib';
import { useAuthSlice } from '@shared/model/auth/authSlice';
import { selectIsAuthenticated } from '@shared/model/auth/selectors';
import '../style.pcss';

export const Login = () => {
  const isAuthenticated = useAuthSlice(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={AppRoutePath.home} replace={true} />;
  }

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
};
