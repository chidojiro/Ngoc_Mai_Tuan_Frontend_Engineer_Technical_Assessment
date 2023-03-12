import { RestApis } from '@/rest/apis';

export const DoctorApis = {
  get: (id: string) => RestApis.get(`doctor/${id}`),
  getList: () => RestApis.get('doctor'),
};
