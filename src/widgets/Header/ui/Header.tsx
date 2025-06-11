import { Button } from 'antd';
import '../style.pcss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <p className="header__title">React calendar</p>
          <Button>Выйти</Button>
        </div>
      </div>
    </header>
  );
};
