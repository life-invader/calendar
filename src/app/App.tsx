import { StrictMode } from 'react';
import { PageLayout } from '@shared/ui/pageLayout';
import { Router } from './router';

export const App = () => {
  return (
    <StrictMode>
      <PageLayout>
        <Router />
      </PageLayout>
    </StrictMode>
  );
};
