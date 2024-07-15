'use client';

import Image from 'next/image';
import Logo from '@/app/ui/images/logo.png';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Добавить размер лого для мобилки */}
      <Image src={Logo} className={styles.logo} alt="driverave logo" width={253} height={40} />
      <button type="button" className={styles.button} onClick={() => console.log('clicked')}>
        <div className={styles.menu}></div>
        <div className={styles.user}></div>
      </button>
    </header>
  );
}