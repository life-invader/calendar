import { useStore } from '@store/index';
import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';

export const useAuth = () => {
  const { checkAuth, isInitialAuthCheckingComplete } = useStore(
    useShallow((state) => ({
      checkAuth: state.checkAuth,
      isInitialAuthCheckingComplete: state.isInitialAuthCheckingComplete,
    })),
  );

  useEffect(() => {
    checkAuth();
  }, []);

  return { isInitialAuthCheckingComplete };
};
