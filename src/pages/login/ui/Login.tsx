import { LoginForm } from '@entities/forms';
import { Navigate } from 'react-router';
import { useStore } from '@store/index';
import '../style.pcss';

export const Login = () => {
  const isAuth = useStore((state) => state.isAuth);

  if (isAuth) {
    return <Navigate to={'/'} replace={true} />;
  }

  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
};
