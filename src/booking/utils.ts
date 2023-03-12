export const convertFloatHoursToTime = (floatHours: number) => {
  const hours = Math.floor(floatHours);

  const minutes = Math.round((floatHours - hours) * 60);

  return `${hours}:${minutes.toString().padStart(2, '0')}`;
};

export const convertTimeToFloatHours = (time: string) => {
  const [hours, minutes] = time.split(':');

  return parseInt(hours) + parseInt(minutes) / 60;
};
