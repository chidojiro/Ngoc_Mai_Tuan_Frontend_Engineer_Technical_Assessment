import { Children } from '@/core/types';
import { LeftSidebar } from './LeftSidebar';
import { MainLayoutHeader } from './MainLayoutHeader';

export type MainLayoutProps = Children & {
  //
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='flex'>
      <LeftSidebar />
      <div className='p-8 flex-1'>{children}</div>
    </div>
  );
};

MainLayout.Header = MainLayoutHeader;
