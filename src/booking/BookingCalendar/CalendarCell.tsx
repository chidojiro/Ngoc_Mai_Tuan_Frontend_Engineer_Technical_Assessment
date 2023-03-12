import { Button } from '@/core/components';
import { useDisclosure } from '@/core/hooks';
import { Children, ClassName } from '@/core/types';
import clsx from 'clsx';
import { Dayjs } from 'dayjs';
import { memo } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { BookingApis } from '../apis';
import { convertTimeToFloatHours } from '../utils';
import { BookingModal } from './BookingModal';

export type CalendarCellProps = ClassName &
  Children & {
    disabled?: boolean;
    timeSlot?: Dayjs;
    doctorId?: string;
  };

export const CalendarCell = memo(({ className, disabled, timeSlot, doctorId, ...restProps }: CalendarCellProps) => {
  const modalDisclosure = useDisclosure();
  const navigate = useNavigate();

  const handleConfirm = async (name: string) => {
    const booking = await BookingApis.create({
      date: timeSlot!.format('YYYY-MM-DD'),
      start: convertTimeToFloatHours(timeSlot!.format('HH:mm')),
      name,
      doctorId: doctorId!,
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
      {!!timeSlot && (
        <BookingModal
          timeSlot={timeSlot}
          open={modalDisclosure.isOpen}
          onClose={modalDisclosure.close}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
});
CalendarCell.displayName = 'CalendarCell';
