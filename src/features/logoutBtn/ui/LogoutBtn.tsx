import { useStore } from '@store/index';
import { Button } from 'antd';
import { logoutAction } from '@store/actions';
import type { ILogoutBtnProps } from '../cfg/types';

export const LogoutBtn = ({ label }: ILogoutBtnProps) => {
  const logout = useStore(logoutAction);

  return <Button onClick={logout}>{label}</Button>;
};
