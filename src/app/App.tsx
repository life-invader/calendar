import { StrictMode } from 'react';
import { Router } from './router';
import { PageLayout } from './components/pageLayout';
import { useAuth } from '@shared/index';

export const App = () => {
  const { isInitialAuthCheckingComplete } = useAuth();

  return (
    <StrictMode>
      <PageLayout>{isInitialAuthCheckingComplete && <Router />}</PageLayout>
    </StrictMode>
  );
};
