import { RouteConfig } from '@/router/types';
import DoctorDetailsPage from './DoctorDetailsPage';
import DoctorListPage from './DoctorListPage';

export const DOCTOR_ROUTES: Record<'DOCTOR_LIST' | 'DOCTOR_DETAILS', RouteConfig> = {
  DOCTOR_LIST: { path: '/doctors', element: <DoctorListPage /> },
  DOCTOR_DETAILS: { path: '/doctors/:doctorId', element: <DoctorDetailsPage /> },
};
