import { LoginForm } from '@entities/forms';
import { Navigate } from 'react-router';
import { useStore } from '@store/index';
import { selectIsAuth } from '@store/selectors';
import '../style.pcss';

export const Login = () => {
  const isAuthenticated = useStore(selectIsAuth);

  if (isAuthenticated) {
    return <Navigate to={'/'} replace={true} />;
  }

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
};
