import { ClassName } from '@/core/types';
import clsx from 'clsx';

import { useCalendarContext } from './CalendarProvider';

const dayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export type CalendarHeaderProps = ClassName & {
  //
};

export const CalendarHeader = ({ className }: CalendarHeaderProps) => {
  const { viewingWeek, today } = useCalendarContext();

  return (
    <div className={clsx('flex', className)}>
      {dayLabels.map((label, index) => (
        <div
          key={label}
          className='border border-gray-300 border-r-0 last-of-type:border-r flex flex-col items-center justify-center flex-1 h-16 text-center relative py-1'>
          <p className='font-bold mb-1'>{label}</p>
          <p
            className={clsx(
              'font-bold text-gray-500 w-7 h-7 rounded-full flex items-center justify-center',
              today.valueOf() === viewingWeek.day(index).valueOf() && 'bg-brand-600 text-white'
            )}>
            {viewingWeek.day(index).date()}
          </p>
        </div>
      ))}
    </div>
  );
};
