import { RouteConfig } from '@/router/types';
import { lazy } from 'react';

const BookingDetailsPage = lazy(() => import('./BookingDetailsPage'));

export const BOOKING_ROUTES: Record<'BOOKING_DETAILS', RouteConfig> = {
  BOOKING_DETAILS: { path: '/booking/:bookingId', element: <BookingDetailsPage /> },
};
