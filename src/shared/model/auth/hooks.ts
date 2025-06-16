import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import { useAuthSlice } from './authSlice';

export const useAuth = () => {
  const state = useAuthSlice(useShallow((state) => state));
  const { checkAuth } = state;

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return state;
};
