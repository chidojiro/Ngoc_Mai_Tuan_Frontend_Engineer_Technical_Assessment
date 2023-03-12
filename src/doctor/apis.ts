import { RestApis } from '@/rest/apis';

export const DoctorApis = {
  getList: () => RestApis.get('doctor'),
};
