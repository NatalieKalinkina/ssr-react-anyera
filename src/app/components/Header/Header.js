'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/ui/images/logo.png';
import styles from './header.module.css';
import LoginForm from '../LoginForm/LoginForm';

export default function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleForm() {
    setIsFormOpen(!isFormOpen);
  }

  return (
    <header className={styles.header}>
      <Link href="/" scroll={false}>
        <Image src={Logo} className={styles.logo} alt="driverave logo" />
      </Link>
      <button type="button" className={styles.button} onClick={toggleForm}>
        <div className={styles.menu}></div>
        <div className={styles.user}></div>
      </button>

      {isFormOpen && (
        <>
          <div className={styles.layout}></div>
          <LoginForm toggleForm={toggleForm} />
        </>
      )}
    </header>
  );
}
