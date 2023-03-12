import { Booking } from './types';

export const emptyBookingFallback: Booking = {
  date: '',
  doctorId: '',
  id: '',
  name: '',
  start: 0,
  status: 'confirmed',
};
