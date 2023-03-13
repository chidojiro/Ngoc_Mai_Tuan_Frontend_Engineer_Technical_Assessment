import { Button, Input, Modal, ModalProps } from '@/core/components';
import { useDisclosure } from '@/core/hooks';
import { Doctor } from '@/doctor/types';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

export type BookingModalProps = ModalProps & {
  onConfirm: (name: string) => void;
  timeSlot: Dayjs;
  doctor: Doctor;
};

export const BookingModal = ({ onConfirm, onClose, timeSlot, open, doctor, ...restProps }: BookingModalProps) => {
  const [name, setName] = useState('');

  const errorDisclosure = useDisclosure();

  const { mutate: mutateConfirm, isLoading } = useMutation((name: string) => {
    return onConfirm(name) as any;
  });

  const handleConfirm = () => {
    if (!name) {
      errorDisclosure.open();
      return;
    }

    errorDisclosure.close();

    const res = mutateConfirm(name);

    onClose?.();

    return res;
  };

  useEffect(() => {
    if (!open) {
      setName('');
    }
  }, [open]);

  return (
    <Modal {...restProps} open={open} onClose={onClose}>
      <Modal.Title>Personal Details</Modal.Title>
      <p>
        You are scheduling an appointment for:{' '}
        <strong>
          {timeSlot.format('MMM D, YYYY, h:mm A')} - {timeSlot.add(1, 'hour').format('h:mm A')}
        </strong>{' '}
        With doctor: <strong>{doctor.name}</strong>.
      </p>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        error={errorDisclosure.isOpen}
        className='mt-4'
        label='Full name'
        placeholder='Enter your full name'
        maxLength={255}
      />
      <div className='flex items-center justify-end gap-2 mt-4'>
        <Button size='sm' variant='outline' colorScheme='gray' onClick={onClose}>
          Cancel
        </Button>
        <Button size='sm' onClick={handleConfirm} disabled={isLoading}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};
