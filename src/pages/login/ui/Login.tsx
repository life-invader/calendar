import { LoginForm } from '@entities/forms';
import { Navigate } from 'react-router';
import { AppRoutePath } from '@shared/lib';
import { useAuth } from '@shared/model/auth/hooks';
import '../style.pcss';

export const Login = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={AppRoutePath.home} replace={true} />;
  }

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
};
