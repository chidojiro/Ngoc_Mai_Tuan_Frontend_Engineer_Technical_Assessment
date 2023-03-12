import { MainLayout } from '@/layout/MainLayout';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export type MainLayoutOutletProps = {
  //
};

export const MainLayoutOutlet = ({}: MainLayoutOutletProps) => {
  return (
    <MainLayout>
      <Suspense fallback=''>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};
