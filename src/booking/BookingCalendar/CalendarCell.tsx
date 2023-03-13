import { Button } from '@/core/components';
import { useDisclosure } from '@/core/hooks';
import { Children, ClassName } from '@/core/types';
import { Doctor } from '@/doctor/types';
import clsx from 'clsx';
import { Dayjs } from 'dayjs';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingApis } from '../apis';
import { convertTimeToFloatHours } from '../utils';
import { BookingModal } from './BookingModal';

export type CalendarCellProps = ClassName &
  Children & {
    disabled?: boolean;
    timeSlot?: Dayjs;
    doctor?: Doctor;
  };

export const CalendarCell = memo(({ className, disabled, timeSlot, doctor, ...restProps }: CalendarCellProps) => {
  const modalDisclosure = useDisclosure();
  const navigate = useNavigate();

  const handleConfirm = async (name: string) => {
    const booking = await BookingApis.create({
      date: timeSlot!.format('YYYY-MM-DD'),
      start: convertTimeToFloatHours(timeSlot!.format('HH:mm')),
      name,
      doctorId: doctor!.id,
    });

    return navigate(`/booking/${booking.id}`);
  };

  return (
    <>
      <Button
        variant='plain'
        className={clsx('h-full flex-1', { 'bg-gray-100': disabled }, className)}
        disabled={disabled}
        {...restProps}
        onClick={modalDisclosure.toggle}></Button>
      {!!timeSlot && doctor && (
        <BookingModal
          timeSlot={timeSlot}
          open={modalDisclosure.isOpen}
          onClose={modalDisclosure.close}
          onConfirm={handleConfirm}
          doctor={doctor}
        />
      )}
    </>
  );
});
CalendarCell.displayName = 'CalendarCell';
