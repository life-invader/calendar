import { Header } from '@widgets/header';
import '../style.pcss';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'pageLayout'}>
      <Header />
      <main className="pageLayout__main container">{children}</main>
    </div>
  );
};
