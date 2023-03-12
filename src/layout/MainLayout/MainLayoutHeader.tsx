import { ReactNode } from 'react';

export type MainLayoutHeaderProps = {
  left: ReactNode;
  right?: ReactNode;
};

export const MainLayoutHeader = ({ left, right }: MainLayoutHeaderProps) => {
  return (
    <div className='flex items-center justify-between gap-5 mb-[34px]'>
      <h1 className='text-h5 font-semiBold'>{left}</h1>
      <div>{right}</div>
    </div>
  );
};
