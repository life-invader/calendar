import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { PrivateRoute } from '@shared/lib/privateRoute/PrivateRoute';
import { Main } from '@pages/main/Main';
import { Login } from '@pages/login/Login';
import { PageLayout } from '@shared/ui/pageLayout';
import './style/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Main />} />
            {/* Остальные приватные роуты */}
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  </StrictMode>,
);
