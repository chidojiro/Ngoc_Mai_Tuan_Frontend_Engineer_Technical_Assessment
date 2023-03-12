import { Button } from '@/core/components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCalendarContext } from './CalendarProvider';

export type CalendarNavigatorProps = {
  //
};

export const CalendarNavigator = ({}: CalendarNavigatorProps) => {
  const { viewingWeek, viewNextWeek, viewPreviousWeek, viewThisWeek } = useCalendarContext();

  const renderViewingWeekLabel = () => {
    const sunday = viewingWeek;
    const saturday = viewingWeek.day(6);

    if (sunday.month() === saturday.month()) {
      return sunday.format('MMM, YYYY');
    }

    if (sunday.year() !== saturday.year()) {
      return `${sunday.format('MMM, YYYY')} - ${saturday.format('MMM, YYYY')}`;
    }

    if (sunday.month() !== saturday.month()) {
      return `${sunday.format('MMM')} - ${saturday.day(6).format('MMM')}, ${sunday.format('YYYY')}`;
    }

    return sunday.format('MMM, YYYY');
  };

  return (
    <div className='flex items-center gap-5 mb-3'>
      <Button size='sm' onClick={viewThisWeek}>
        Today
      </Button>
      <div className='flex gap-4'>
        <Button size='sm' variant='outline' colorScheme='gray' onClick={viewPreviousWeek}>
          <FaChevronLeft />
        </Button>
        <Button size='sm' variant='outline' colorScheme='gray' onClick={viewNextWeek}>
          <FaChevronRight />
        </Button>
      </div>
      <div className='text-h6 font-medium'>{renderViewingWeekLabel()}</div>
    </div>
  );
};
