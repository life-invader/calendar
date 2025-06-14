import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { PrivateRoute } from '@shared/lib/privateRoute/PrivateRoute';
import { Main } from '@pages/main/ui/Main';
import { Login } from '@pages/login/ui/Login';
import { AppRoutePath } from '@shared/lib';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={AppRoutePath.home} element={<Main />} />
          {/* Остальные приватные роуты */}
        </Route>

        <Route path={AppRoutePath.login} element={<Login />} />
        <Route path={AppRoutePath.any} element={<Navigate to={AppRoutePath.home} />} />
      </Routes>
    </BrowserRouter>
  );
};
