import { emptyBookingFallback } from './constants';
import { useQuery } from 'react-query';
import { renameQueryReturnProperties } from '@/core/utils';
import { BookingApis } from './apis';
import { Booking } from './types';

export const useBooking = (id: string) =>
  renameQueryReturnProperties<Booking, 'Booking'>(
    'Booking',
    useQuery(['booking', id], () => BookingApis.get(id)),
    { emptyFallback: emptyBookingFallback }
  );
