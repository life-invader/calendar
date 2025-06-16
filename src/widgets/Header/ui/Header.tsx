import { LogoutBtn } from '@features/logoutBtn';
import { useAuthSlice } from '@shared/model/auth/authSlice';
import { selectIsAuthenticated } from '@shared/model/auth/selectors';
import '../style.pcss';

export const Header = () => {
  const isAuthenticated = useAuthSlice(selectIsAuthenticated);

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
