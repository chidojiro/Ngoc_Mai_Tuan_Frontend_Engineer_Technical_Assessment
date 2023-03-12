import { BOOKING_ROUTES } from '@/booking/routes';
import { DOCTOR_ROUTES } from '@/doctor/routes';
import clsx from 'clsx';
import { NavigationItem } from './NavigationItem';

export type LeftSidebarProps = {
  //
};

export const LeftSidebar = ({}: LeftSidebarProps) => {
  return (
    <div
      className={clsx(
        'sticky top-0 border-r border-gray-200 h-screen py-8 px-[18px] flex flex-col flex-shrink-0 transition-all w-[280px]'
      )}>
      <div className={clsx('flex items-center justify-center')}>
        <img src='/vite.svg' />
      </div>

      <div className='mt-8'>
        <NavigationItem
          label='Doctors'
          href={DOCTOR_ROUTES.DOCTOR_LIST.path}
          matches={[
            DOCTOR_ROUTES.DOCTOR_LIST.path,
            DOCTOR_ROUTES.DOCTOR_DETAILS.path,
            BOOKING_ROUTES.BOOKING_DETAILS.path,
          ]}
        />
      </div>
    </div>
  );
};
