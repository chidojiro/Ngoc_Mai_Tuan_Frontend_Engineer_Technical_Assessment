import { DOCTOR_ROUTES } from '@/doctor/routes';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const allRoutes = {
  ...DOCTOR_ROUTES,
};

const renderRoutes = () => {
  return Object.values(allRoutes).map(({ element, path }) => {
    return <Route key={path} path={path} element={element} />;
  });
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes()}
        <Route path='*' element={<Navigate to={DOCTOR_ROUTES.DOCTOR_LIST.path} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
