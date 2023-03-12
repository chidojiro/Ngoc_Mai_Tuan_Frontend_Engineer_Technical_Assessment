import { ClassName } from '@/core/types';
import { Doctor } from '@/doctor/types';
import clsx from 'clsx';
import { CalendarBody } from './CalendarBody';
import { CalendarHeader } from './CalendarHeader';
import { CalendarNavigator } from './CalendarNavigator';
import { CalendarProvider } from './CalendarProvider';

export type BookingCalendarProps = ClassName & {
  doctor: Doctor;
};

export const BookingCalendar = ({ doctor, className }: BookingCalendarProps) => {
  return (
    <div className={clsx('w-[1000px]', className)}>
      <CalendarProvider doctor={doctor}>
        <div className='ml-[72px]'>
          <CalendarNavigator />
          <div className='flex gap-4 my-4'>
            <div className='flex gap-2'>
              <div className='w-5 h-5 border border-gray-300 rounded-sm'></div>
              <p>Available</p>
            </div>
            <div className='flex gap-2'>
              <div className='w-5 h-5 border border-gray-300 bg-gray-100 rounded-sm'></div>
              <p>Unavailable</p>
            </div>
          </div>
          <CalendarHeader />
          <CalendarBody />
        </div>
      </CalendarProvider>
    </div>
  );
};
