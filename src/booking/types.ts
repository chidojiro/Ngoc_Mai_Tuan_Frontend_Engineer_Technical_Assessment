export type CreateBookingPayload = { name: string; doctorId: string; start: number; date: string };

export type Booking = {
  date: string;
  doctorId: string;
  id: string;
  name: string;
  start: number;
  status: 'confirmed' | 'cancel';
};
