import { Children } from '@/core/types';
import { createContext, trimTime } from '@/core/utils';
import { Doctor } from '@/doctor/types';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { convertFloatHoursToTime, mergeTimeIntoDay, splitTimeRangeIntoTimeSlots } from '../utils';

export type CalendarProviderValue = {
  today: Dayjs;
  viewingWeek: Dayjs;
  availableOpeningSlotsByDay: Dayjs[][];
  doctor: Doctor;
  viewPreviousWeek: () => void;
  viewNextWeek: () => void;
  viewThisWeek: () => void;
};

const [Provider, useCalendarContext] = createContext<CalendarProviderValue>();

export type CalendarProviderProps = Children & {
  doctor: Doctor;
};

export const CalendarProvider = ({ children, doctor }: CalendarProviderProps) => {
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
      const openingHour = doctor.opening_hours.find(openingHour => openingHour.day === day);

      if (!openingHour || openingHour.isClosed) return [];

      return splitTimeRangeIntoTimeSlots(
        mergeTimeIntoDay(dayjs(viewingWeek.day(index)), convertFloatHoursToTime(+openingHour.start)),
        mergeTimeIntoDay(dayjs(viewingWeek.day(index)), convertFloatHoursToTime(+openingHour.end))
      );
    });
  }, [doctor.opening_hours, viewingWeek]);

  const value = React.useMemo<CalendarProviderValue>(
    () => ({
      today,
      viewingWeek,
      availableOpeningSlotsByDay,
      viewNextWeek,
      viewPreviousWeek,
      viewThisWeek,
      doctor,
    }),
    [today, viewingWeek, availableOpeningSlotsByDay, viewNextWeek, viewPreviousWeek, viewThisWeek, doctor]
  );

  return <Provider value={value}>{children}</Provider>;
};

export { useCalendarContext };
