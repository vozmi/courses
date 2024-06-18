import Image from "next/image";
import Link from "next/link";
import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/next.svg" width={100} height={64} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};
