import clsx from 'clsx';
import { memo } from 'react';
import { Link, useMatch } from 'react-router-dom';

export type NavigationItemProps = {
  href: string;
  label: string;
  matches?: string[];
};

export const NavigationItem = memo(({ href, label, matches }: NavigationItemProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isActive = matches?.reduce((acc, cur) => !!useMatch(cur) || acc, false);

  return (
    <Link
      to={href}
      className={clsx(
        'flex items-center text-md font-semiBold h-10 hover:bg-gray-50 px-3 rounded-md',
        'transition-all duration-100',
        isActive && 'bg-gray-50'
      )}>
      <span className={clsx('overflow-hidden transition-all origin-left')}>{label}</span>
    </Link>
  );
});

NavigationItem.displayName = 'NavigationItem';
