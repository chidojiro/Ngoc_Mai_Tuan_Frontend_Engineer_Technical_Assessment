import { WithSpinner } from '@/core/components';
import { useDoctor } from '@/doctor/useDoctor';
import { MainLayout } from '@/layout/MainLayout';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import { useBooking } from './useBooking';
import { convertFloatHoursToTime } from './utils';

export type BookingDetailsPageProps = {
  //
};

const BookingDetailsPage = ({}: BookingDetailsPageProps) => {
  const { bookingId } = useParams() as Record<string, string>;

  const {
    booking: { date, doctorId, name: patientName, start, status },
    isLoadingBooking,
  } = useBooking(bookingId);

  const {
    doctor: { address, description, name: doctorName },
    isLoadingDoctor,
  } = useDoctor(doctorId);

  return (
    <div>
      <MainLayout.Header left='Booking Details'></MainLayout.Header>
      <WithSpinner loading={isLoadingBooking || isLoadingDoctor}>
        <div className='flex gap-2 mt-2'>
          <div className='flex-1'>
            <p className='font-bold'>Doctor: {doctorName}</p>
            <p>
              <span className='font-bold'>Doctor Id:</span> {doctorId}
            </p>
            <div className='mt-1.5 space-y-1'>
              <p className='mt-1'>
                <span className='font-medium text-gray-800'>Description: </span>
                {description ? description : 'N/A'}
              </p>
              <p>
                <span className='font-medium text-gray-800'>Address: </span>
                {[address.line_1, address.line_2, address.district].filter(Boolean).join(', ')}
              </p>
              <p>
                <span className='font-medium'>Patient name: </span>
                {patientName}
              </p>
              <p>
                <span className='font-medium'>Time: </span>
                {dayjs(date).format('DD MMM YYYY')}, {convertFloatHoursToTime(start)} -{' '}
                {convertFloatHoursToTime(start + 1)}
              </p>
              <p>
                <span className='font-medium'>Status: </span>
                {status}
              </p>
            </div>
          </div>
        </div>
      </WithSpinner>
    </div>
  );
};

export default BookingDetailsPage;
