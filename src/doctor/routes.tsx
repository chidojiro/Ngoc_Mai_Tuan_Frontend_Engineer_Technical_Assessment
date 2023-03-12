import { RouteConfig } from '@/router/types';
import { lazy } from 'react';

const DoctorListPage = lazy(() => import('./DoctorListPage'));
const DoctorDetailsPage = lazy(() => import('./DoctorDetailsPage'));

export const DOCTOR_ROUTES: Record<'DOCTOR_LIST' | 'DOCTOR_DETAILS', RouteConfig> = {
  DOCTOR_LIST: { path: '/doctors', element: <DoctorListPage /> },
  DOCTOR_DETAILS: { path: '/doctors/:doctorId', element: <DoctorDetailsPage /> },
};
