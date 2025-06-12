import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { PrivateRoute } from '@shared/lib/privateRoute/PrivateRoute';
import { Main } from '@pages/main/ui/Main';
import { Login } from '@pages/login/ui/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} />
          {/* Остальные приватные роуты */}
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
};
