import { useStore } from '@store/index';
import { LogoutBtn } from '@features/logoutBtn';
import { selectIsAuth } from '@store/selectors';
import '../style.pcss';

export const Header = () => {
  const isAuthenticated = useStore(selectIsAuth);

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
