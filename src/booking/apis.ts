import { RestApis } from '@/rest/apis';
import { CreateBookingPayload } from './types';

export const BookingApis = {
  create: (payload: CreateBookingPayload) => RestApis.post('booking', payload),
};
