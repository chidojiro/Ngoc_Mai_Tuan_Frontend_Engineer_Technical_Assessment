import { RestApis } from '@/rest/apis';
import { Booking, CreateBookingPayload } from './types';

export const BookingApis = {
  get: (id: string) => RestApis.get<Booking>(`booking/${id}`),
  create: (payload: CreateBookingPayload) => RestApis.post<Booking>('booking', payload),
};
