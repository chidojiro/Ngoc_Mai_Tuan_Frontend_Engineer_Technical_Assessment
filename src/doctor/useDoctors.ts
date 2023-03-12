import { EMPTY_ARRAY } from '@/core/constants';
import { renameQueryReturnProperties } from '@/core/utils';
import { useQuery } from 'react-query';
import { DoctorApis } from './apis';
import { Doctor } from './types';

export const useDoctors = () => {
  return renameQueryReturnProperties<Doctor[], 'Doctors'>(
    'Doctors',
    useQuery(['doctors'], () => DoctorApis.getList()),
    { emptyFallback: EMPTY_ARRAY }
  );
};
