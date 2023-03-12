import { Doctor } from './types';

export const emptyDoctorFallback: Doctor = {
  id: '',
  name: '',
  description: '',
  opening_hours: [],
  address: {
    line_1: '',
    line_2: '',
    district: '',
  },
};
