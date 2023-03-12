import { Button } from '@/core/components';
import { useDisclosure } from '@/core/hooks';
import { Children, ClassName } from '@/core/types';
import clsx from 'clsx';
import React from 'react';

export type CalendarCellProps = ClassName &
  Children & {
    disabled?: boolean;
  };

export const CalendarCell = React.memo(({ className, disabled, ...restProps }: CalendarCellProps) => {
  const modalDisclosure = useDisclosure();

  return (
    <Button
      variant='plain'
      className={clsx('h-full flex-1', { 'bg-gray-100': disabled }, className)}
      disabled={disabled}
      {...restProps}
      onClick={modalDisclosure.toggle}></Button>
  );
});
CalendarCell.displayName = 'CalendarCell';
