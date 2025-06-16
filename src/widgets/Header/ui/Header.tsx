import { LogoutBtn } from '@features/logoutBtn';
import { useAuth } from '@shared/model/auth/hooks';
import '../style.pcss';

export const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <p className="header__title">React calendar</p>
          {isAuthenticated && <LogoutBtn label="Выйти" />}
        </div>
      </div>
    </header>
  );
};
