import { StrictMode } from 'react';
import { PageLayout } from '@shared/ui/pageLayout';
import { Router } from './router';
import { useAuth } from '@shared/lib/hooks/useAuth';

export const App = () => {
  const { isInitialAuthCheckingComplete } = useAuth();

  return (
    <StrictMode>
      <PageLayout>{isInitialAuthCheckingComplete && <Router />}</PageLayout>
    </StrictMode>
  );
};
