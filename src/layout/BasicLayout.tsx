import { Children, ClassName } from '@/core/types';

export type BasicLayoutProps = Children &
  ClassName & {
    //
  };

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <div className='flex items-center justify-center py-[96px]'>
      <div>{children}</div>
    </div>
  );
};
