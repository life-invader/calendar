import { StrictMode } from 'react';
import { Router } from './router';
import { useAuth } from '@shared/model/auth/hooks';
import { PageLayout } from './components/pageLayout';

export const App = () => {
  const { isInitialAuthCheckingComplete } = useAuth();

  return (
    <StrictMode>
      <PageLayout>{isInitialAuthCheckingComplete && <Router />}</PageLayout>
    </StrictMode>
  );
};
