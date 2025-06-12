import { Button } from 'antd';
import { useStore } from '@store/index';
import '../style.pcss';

export const Header = () => {
  const isAuth = useStore((state) => state.isAuth);
  const logout = useStore((state) => state.logout);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <p className="header__title">React calendar</p>
          {isAuth && <Button onClick={logout}>Выйти</Button>}
        </div>
      </div>
    </header>
  );
};
