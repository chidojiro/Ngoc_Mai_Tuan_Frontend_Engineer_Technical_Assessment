import { renameQueryReturnProperties } from '@/core/utils';
import { useQuery } from 'react-query';
import { DoctorApis } from './apis';
import { emptyDoctorFallback } from './constants';
import { Doctor } from './types';

export const useDoctor = (id: string) => {
  return renameQueryReturnProperties<Doctor, 'Doctor'>(
    'Doctor',
    useQuery(id && ['doctor', id], () => DoctorApis.get(id)),
    { emptyFallback: emptyDoctorFallback }
  );
};
