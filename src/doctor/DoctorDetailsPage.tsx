import { BookingCalendar } from '@/booking/BookingCalendar/BookingCalendar';
import { WithSpinner } from '@/core/components';
import { MainLayout } from '@/layout/MainLayout';
import { useParams } from 'react-router-dom';
import { useDoctor } from './useDoctor';

export type DoctorDetailsPageProps = {
  //
};

const DoctorDetailsPage = ({}: DoctorDetailsPageProps) => {
  const { doctorId } = useParams() as Record<string, string>;
  const { doctor, isLoadingDoctor } = useDoctor(doctorId);
  const { name, description, address, id } = doctor;

  return (
    <div>
      <WithSpinner loading={isLoadingDoctor}>
        <MainLayout.Header left={name}></MainLayout.Header>
        <div>
          <div className='mt-1.5 space-y-1'>
            <p>
              <span className='font-medium text-gray-800'>Id: </span>
              {id}
            </p>
            <p>
              <span className='font-medium text-gray-800'>Description: </span>
              {description || 'N/A'}
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
      </WithSpinner>
    </div>
  );
};

export default DoctorDetailsPage;
