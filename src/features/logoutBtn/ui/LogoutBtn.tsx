import { Button } from 'antd';
import { useAuth } from '@shared/model/auth/hooks';
import type { ILogoutBtnProps } from '../cfg/types';

export const LogoutBtn = ({ label }: ILogoutBtnProps) => {
  const { logout } = useAuth();

  return <Button onClick={logout}>{label}</Button>;
};
