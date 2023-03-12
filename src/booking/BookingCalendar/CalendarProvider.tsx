import { Children } from '@/core/types';
import { createContext, trimTime } from '@/core/utils';
import { OpeningHour } from '@/doctor/types';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { convertFloatHoursToTime, mergeTimeIntoDay, splitTimeRangeIntoTimeSlots } from '../utils';

export type CalendarProviderValue = {
  today: Dayjs;
  viewingWeek: Dayjs;
  availableOpeningSlotsByDay: Dayjs[][];
  openingHours: OpeningHour[];
  viewPreviousWeek: () => void;
  viewNextWeek: () => void;
  viewThisWeek: () => void;
};

const [Provider, useCalendarContext] = createContext<CalendarProviderValue>();

export type CalendarProviderProps = Children & {
  openingHours: OpeningHour[];
};

export const CalendarProvider = ({ children, openingHours }: CalendarProviderProps) => {
  const today = React.useMemo(() => trimTime(dayjs()), []);
  const [viewingWeek, setViewingWeek] = React.useState(React.useMemo(() => today.day(0), [today]));

  const viewPreviousWeek = React.useCallback(() => {
    setViewingWeek(viewingWeek.date(viewingWeek.date() - 7));
  }, [viewingWeek]);

  const viewNextWeek = React.useCallback(() => {
    setViewingWeek(viewingWeek.date(viewingWeek.date() + 7));
  }, [viewingWeek]);

  const viewThisWeek = React.useCallback(() => {
    setViewingWeek(today.day(0));
  }, [today]);

  const availableOpeningSlotsByDay = React.useMemo(() => {
    return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => {
      const openingHour = openingHours.find(openingHour => openingHour.day === day);

      if (!openingHour || openingHour.isClosed) return [];

      return splitTimeRangeIntoTimeSlots(
        mergeTimeIntoDay(dayjs(viewingWeek.day(index)), convertFloatHoursToTime(+openingHour.start)),
        mergeTimeIntoDay(dayjs(viewingWeek.day(index)), convertFloatHoursToTime(+openingHour.end))
      );
    });
  }, [openingHours, viewingWeek]);

  const value = React.useMemo<CalendarProviderValue>(
    () => ({
      today,
      viewingWeek,
      availableOpeningSlotsByDay,
      viewNextWeek,
      viewPreviousWeek,
      viewThisWeek,
      openingHours,
    }),
    [today, viewingWeek, availableOpeningSlotsByDay, viewNextWeek, viewPreviousWeek, viewThisWeek, openingHours]
  );

  return <Provider value={value}>{children}</Provider>;
};

export { useCalendarContext };
