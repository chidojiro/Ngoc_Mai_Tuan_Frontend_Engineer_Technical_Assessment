import clsx from 'clsx';
import { ClassName } from '../types';

export type SpinnerProps = ClassName & {
  //
};

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={clsx('flex justify-center items-center w-8 h-8 max-w-full max-h-full', className)}>
      <div className='animate-spin rounded-full border-b-2 border-gray-700 w-full h-full' />
    </div>
  );
};
