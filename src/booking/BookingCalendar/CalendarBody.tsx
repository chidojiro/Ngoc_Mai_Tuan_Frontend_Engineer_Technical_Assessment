import dayjs from 'dayjs';
import { range } from 'lodash-es';
import { convertFloatHoursToTime } from '../utils';
import { CalendarCell } from './CalendarCell';
import { useCalendarContext } from './CalendarProvider';

export type CalendarBodyProps = {
  //
};

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const CalendarBody = ({}: CalendarBodyProps) => {
  const {
    viewingWeek,
    availableOpeningSlotsByDay,
    doctor: { opening_hours: openingHours, id: doctorId },
  } = useCalendarContext();

  if (!openingHours.length) return null;

  const minStart = Math.min(...openingHours.map(({ start }) => +start));
  const maxEnd = Math.max(...openingHours.map(({ end }) => +end));

  const timeSlotCount = maxEnd - minStart;

  return (
    <>
      <div className='flex h-7 border-l border-b border-gray-300'>
        {range(7).map(dateOffset => {
          return <CalendarCell key={dateOffset} className='border-r border-gray-300' disabled />;
        })}
      </div>
      {range(timeSlotCount).map(timeOffset => {
        const timeMark = viewingWeek.hour(Math.floor(minStart) + timeOffset).minute((minStart % 1) * 60);

        return (
          <div key={timeOffset} className='flex h-7 relative border-l border-b border-gray-300'>
            <div className='absolute -left-2 top-0 -translate-x-full -translate-y-1/2 text-xs text-gray-500'>
              {timeMark.format('HH:mm')}
            </div>
            {range(7).map(dateOffset => {
              const timeSlot = timeMark.add(dateOffset, 'day');

              return (
                <CalendarCell
                  key={dateOffset}
                  className='border-r border-gray-300'
                  timeSlot={timeSlot}
                  disabled={
                    timeSlot.isBefore(dayjs()) ||
                    !!openingHours.find(({ day, isClosed }) => day === DAYS[dateOffset] && isClosed) ||
                    !availableOpeningSlotsByDay[dateOffset].find(
                      slot => slot.format('HH:mm') === convertFloatHoursToTime(minStart + timeOffset)
                    )
                  }
                  doctorId={doctorId}
                />
              );
            })}
            {timeOffset === timeSlotCount - 1 && (
              <div className='absolute -left-2 bottom-0 -translate-x-full translate-y-1/2 text-xs text-gray-500'>
                {timeMark.add(1, 'hour').format('HH:mm')}
              </div>
            )}
          </div>
        );
      })}
      <div className='flex h-7 border-l border-b border-gray-300'>
        {range(7).map(dateOffset => {
          return <CalendarCell key={dateOffset} className='border-r border-gray-300' disabled />;
        })}
      </div>
    </>
  );
};
