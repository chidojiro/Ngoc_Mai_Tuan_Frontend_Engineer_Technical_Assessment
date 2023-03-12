import clsx from 'clsx';
import { Link, matchPath } from 'react-router-dom';

export type NavigationItemProps = {
  href: string;
  label: string;
  matches?: string[];
};

export const NavigationItem = ({ href, label, matches }: NavigationItemProps) => {
  const isActive = [...(matches ?? []), href].some(patchMatch => matchPath(location.pathname, patchMatch));

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
};
