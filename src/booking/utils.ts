import { Dayjs } from 'dayjs';

export const convertFloatHoursToTime = (floatHours: number) => {
  const hours = Math.floor(floatHours);

  const minutes = Math.round((floatHours - hours) * 60);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export const convertTimeToFloatHours = (time: string) => {
  const [hours, minutes] = time.split(':');

  return parseInt(hours) + parseInt(minutes) / 60;
};

export const mergeTimeIntoDay = (day: Dayjs, time: string) => {
  const [hour, minute] = time.split(':').map(Number);

  return day.hour(hour).minute(minute);
};

export const splitTimeRangeIntoTimeSlots = (start: Dayjs, end: Dayjs) => {
  let _start = start;

  const result = [] as Dayjs[];

  while (_start.isBefore(end)) {
    result.push(_start);

    _start = _start.add(1, 'hour');
  }

  return result;
};
