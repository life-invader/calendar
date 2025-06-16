import { useEffect } from 'react';
import { useAuthSlice } from './authSlice';
import { selectCheckAuthAction, selectIsInitialAuthCheckingComplete } from './selectors';

export const useAuth = () => {
  const isInitialAuthCheckingComplete = useAuthSlice(selectIsInitialAuthCheckingComplete);
  const checkAuth = useAuthSlice(selectCheckAuthAction);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return { isInitialAuthCheckingComplete, checkAuth };
};
