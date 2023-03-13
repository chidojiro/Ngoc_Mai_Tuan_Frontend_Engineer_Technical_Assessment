import { WithSpinner } from '@/core/components';
import { MainLayout } from '@/layout/MainLayout';
import { DoctorCard } from './DoctorCard';
import { useDoctors } from './useDoctors';

export type DoctorListPageProps = {
  //
};

const DoctorListPage = ({}: DoctorListPageProps) => {
  const { doctors, isLoadingDoctors } = useDoctors();

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
