import { convertFloatHoursToTime } from '@/booking/utils';
import { Avatar } from '@/core/components';
import { getRouteWithParams } from '@/router/utils';
import { Link } from 'react-router-dom';
import { DOCTOR_ROUTES } from './routes';
import { Doctor } from './types';

export type DoctorCardProps = {
  doctor: Doctor;
};

const LABELS_BY_DAY = {
  MON: 'Monday',
  TUE: 'Tuesday',
  WED: 'Wednesday',
  THU: 'Thursday',
  FRI: 'Friday',
  SAT: 'Saturday',
  SUN: 'Sunday',
};

export const DoctorCard = ({ doctor: { id, address, description, name, opening_hours } }: DoctorCardProps) => {
  return (
    <Link
      to={getRouteWithParams(DOCTOR_ROUTES.DOCTOR_DETAILS.path, { doctorId: id })}
      className='flex gap-2 rounded-md border border-gray-300 hover:border-brand-600 focus:border-brand-600 outline-none p-4 transition-all max-w-[980px] text-gray-700'>
      <Avatar name={name} />
      <div className='flex-1'>
        <p className='font-bold'>{name}</p>
        <div className='mt-1.5 space-y-1'>
          <p className='mt-1'>
            <span className='font-medium text-gray-800'>Description: </span>
            {description ? description : 'N/A'}
          </p>
          <div className='flex gap-1'>
            <p>
              <span className='font-medium text-gray-800'>Address: </span>
              {[address.line_1, address.line_2, address.district].filter(Boolean).join(', ')}
            </p>
          </div>
        </div>
      </div>
      <div>
        {opening_hours
          .filter(({ isClosed }) => !isClosed)
          .map(({ day, start, end, isClosed }, index) => (
            <div key={index} className='flex items-center gap-2'>
              <p className='w-[80px] font-medium'>{LABELS_BY_DAY[day]}</p>
              <p>{isClosed ? '--' : `${convertFloatHoursToTime(+start)} - ${convertFloatHoursToTime(+end)}`}</p>
            </div>
          ))}
      </div>
    </Link>
  );
};
