import { BOOKING_ROUTES } from '@/booking/routes';
import { DOCTOR_ROUTES } from '@/doctor/routes';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainLayoutOutlet } from './MainLayoutOutlet';
import { RouteConfig } from './types';

const renderRoutes = (routes: Record<string, RouteConfig>) => {
  return Object.values(routes).map(({ element, path }) => {
    return <Route key={path} path={path} element={element} />;
  });
};

const mainLayoutRoutes = { ...DOCTOR_ROUTES, ...BOOKING_ROUTES };

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayoutOutlet />}>{renderRoutes(mainLayoutRoutes)}</Route>
        <Route path='*' element={<Navigate to={DOCTOR_ROUTES.DOCTOR_LIST.path} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
