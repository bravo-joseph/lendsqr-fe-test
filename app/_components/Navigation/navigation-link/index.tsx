'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "./index.module.scss"


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
      className={styles.container}  
    >
      {r.icon && r.icon}
      <p className={styles.p}>{children}</p>
    </Link>
  );
};

export default NavButton;
