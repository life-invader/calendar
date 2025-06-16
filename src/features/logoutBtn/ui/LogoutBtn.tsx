import { Button } from 'antd';
import { useAuthSlice } from '@shared/model/auth/authSlice';
import { selectLogoutAction } from '@shared/model/auth/selectors';
import type { ILogoutBtnProps } from '../cfg/types';

export const LogoutBtn = ({ label }: ILogoutBtnProps) => {
  const logout = useAuthSlice(selectLogoutAction);

  return <Button onClick={logout}>{label}</Button>;
};
