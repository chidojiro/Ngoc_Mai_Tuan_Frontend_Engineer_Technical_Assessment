import { RouteConfig } from '@/router/types';
import BookingDetailsPage from './BookingDetailsPage';

export const BOOKING_ROUTES: Record<'BOOKING_DETAILS', RouteConfig> = {
  BOOKING_DETAILS: { path: '/booking/:bookingId', element: <BookingDetailsPage /> },
};
