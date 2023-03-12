import clsx from 'clsx';
import { ClassName } from '../types';

export type AvatarProps = ClassName & {
  src?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export const Avatar = ({ src, className, name = '', size = 'md' }: AvatarProps) => {
  const renderAvatar = () => {
    return src ? (
      <img src={src} alt='' className='object-cover w-full h-full' />
    ) : (
      <div
        className={clsx('bg-purple-5 text-white font-semibold w-full h-full flex items-center justify-center', {
          'text-3xs': size === 'sm',
        })}>
        {name.charAt(0)}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        'rounded-full overflow-hidden bg-brand-600',
        className,
        { 'w-6 h-6': size === 'xs' },
        { 'w-8 h-8': size === 'sm' },
        { 'w-10 h-10': size === 'md' },
        { 'w-12 h-12': size === 'lg' },
        { 'w-14 h-14': size === 'xl' },
        { 'w-16 h-16': size === '2xl' }
      )}>
      {renderAvatar()}
    </div>
  );
};
