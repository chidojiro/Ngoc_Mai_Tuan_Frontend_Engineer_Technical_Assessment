import React from 'react';
import { Children } from '../types';
import { Spinner } from './Spinner';

export type WithSpinnerProps = Children & {
  loading?: boolean;
};

export const WithSpinner = ({ children, loading }: WithSpinnerProps) => {
  if (loading)
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    );

  return <>{children}</>;
};
