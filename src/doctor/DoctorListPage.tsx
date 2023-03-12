import { MainLayout } from '@/layout/MainLayout';
import { DoctorCard } from './DoctorCard';
import { useDoctors } from './useDoctors';

export type DoctorListPageProps = {
  //
};

const DoctorListPage = ({}: DoctorListPageProps) => {
  const { doctors } = useDoctors();

  return (
    <div>
      <MainLayout.Header left='Doctors'></MainLayout.Header>

      <div className='space-y-2'>
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorListPage;
