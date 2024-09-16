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
  leftSection?: React.ReactNode;
  onClick?: () => void;
}

const NavButton: React.FC<Props> = (props) => {
  const { children, onClick, ...r } = props;
  const pathname = usePathname();

  const path = r.href === '/' ? '' : r.href;
  const href = r.pathPrefix ? `${r.pathPrefix}${path}` : path;
  const isActive = pathname === href || pathname.startsWith(href ?? "a");

  console.log(href)
  return (
    <Link
      href={href ?? ""}
      onClick={onClick}   
      className={isActive ? styles.activeContainer : styles.container}  
      style={{
        marginBottom: (href === '/admin/dashboard' || href === "/admin/switch-organization") ? "30px" : ""
      }}
    >
      {r.icon && r.icon}
      <p className={styles.p}>{children}</p>
      {r.leftSection && r.leftSection}
    </Link>
  );
};

export default NavButton;
