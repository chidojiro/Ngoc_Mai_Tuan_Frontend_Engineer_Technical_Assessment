import { MainLayout } from '@/layout/MainLayout';
import { Outlet } from 'react-router-dom';

export type MainLayoutOutletProps = {
  //
};

export const MainLayoutOutlet = ({}: MainLayoutOutletProps) => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
