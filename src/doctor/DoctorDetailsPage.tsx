import { MainLayout } from '@/layout/MainLayout';

export type DoctorDetailsPageProps = {
  //
};

const DoctorDetailsPage = ({}: DoctorDetailsPageProps) => {
  return (
    <MainLayout>
      <MainLayout.Header left='Doctors'></MainLayout.Header>
    </MainLayout>
  );
};

export default DoctorDetailsPage;
