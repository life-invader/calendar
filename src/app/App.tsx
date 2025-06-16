import { StrictMode } from 'react';
import { PageLayout } from '@shared/ui/pageLayout';
import { Router } from './router';
import { useAuth } from '@shared/model/auth/hooks';

export const App = () => {
  const { isInitialAuthCheckingComplete } = useAuth();

  return (
    <StrictMode>
      <PageLayout>{isInitialAuthCheckingComplete && <Router />}</PageLayout>
    </StrictMode>
  );
};
