import { useBooking } from '@/booking/useBooking';
import { WithSpinner } from '@/core/components';
import { MainLayout } from '@/layout/MainLayout';
import { DoctorCard } from './DoctorCard';
import { useDoctors } from './useDoctors';

export type DoctorListPageProps = {
  //
};

const DoctorListPage = ({}: DoctorListPageProps) => {
  const { doctors, isLoadingDoctors } = useDoctors();

  useBooking('9a61cd37-74ab-447f-9380-a9ddcfb2be2b');

  return (
    <div>
      <MainLayout.Header left='Doctors'></MainLayout.Header>

      <WithSpinner loading={isLoadingDoctors}>
        <div className='space-y-2'>
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </WithSpinner>
    </div>
  );
};

export default DoctorListPage;
