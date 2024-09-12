/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
// import { twMerge } from 'tailwind-merge';

interface Props {
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  pathPrefix?: string;
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
  onClick?: () => void;
}

const NavButton: React.FC<Props> = (props) => {
  const { children, onClick, ...r } = props;
  const pathname = usePathname();

  const path = r.href === '/' ? '' : r.href;
  const href = r.pathPrefix ? `${r.pathPrefix}${path}` : path;
  const isActive = pathname === href;
  return (
    <Link
      href={href ?? ""}
      onClick={onClick}     
    >
      {r.icon && r.icon}
      <span className="pt-1">{children}</span>
    </Link>
  );
};

export default NavButton;
