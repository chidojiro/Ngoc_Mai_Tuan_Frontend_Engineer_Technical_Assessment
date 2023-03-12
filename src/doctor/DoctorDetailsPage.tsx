import { BookingCalendar } from '@/booking/BookingCalendar/BookingCalendar';
import { MainLayout } from '@/layout/MainLayout';
import { useParams } from 'react-router-dom';
import { useDoctor } from './useDoctor';

export type DoctorDetailsPageProps = {
  //
};

const DoctorDetailsPage = ({}: DoctorDetailsPageProps) => {
  const { doctorId } = useParams() as Record<string, string>;
  const { doctor } = useDoctor(doctorId);
  const { name, description, address } = doctor;

  return (
    <div>
      <MainLayout.Header left={name}></MainLayout.Header>
      <div>
        <div className='mt-1.5 space-y-1'>
          <p className='mt-1'>
            <span className='font-medium text-gray-800'>Description: </span>
            {description ? description : 'N/A'}
          </p>
          <div className='flex gap-1'>
            <p>
              <span className='font-medium text-gray-800'>Address: </span>
              {[address.line_1, address.line_2, address.district].filter(Boolean).join(', ')}
            </p>
          </div>
        </div>
      </div>
      <BookingCalendar doctor={doctor} className='mt-10' />
    </div>
  );
};

export default DoctorDetailsPage;
