import { useStore } from '@store/index';
import { LogoutBtn } from '@features/logoutBtn';
import '../style.pcss';

export const Header = () => {
  const isAuth = useStore((state) => state.isAuth);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <p className="header__title">React calendar</p>
          {isAuth && <LogoutBtn label="Выйти" />}
        </div>
      </div>
    </header>
  );
};
