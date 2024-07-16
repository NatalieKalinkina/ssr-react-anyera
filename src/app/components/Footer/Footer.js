import Image from 'next/image';
import Logo from '@/app/ui/images/logo.png';
import styles from './footer.module.css';
import { contacts } from '../../utils/contacts';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <Image src={Logo} className={styles.logo} alt="driverave logo" />
        <p className={styles.text}>Аренда жилья и автомобилей от владельцев</p>
      </div>
      <div className={styles.info}>
        <div className={styles.contacts}>
          {contacts.map(item => {
            return (
              <a href={item.href} className={styles.link} target="_blank" key={item.alt}>
                <Image
                  src={item.src}
                  className={styles.icon}
                  alt={item.alt}
                  width={36}
                  height={36}
                />
              </a>
            );
          })}
        </div>
        <a className={styles.link} href="#">
          <p className={styles.text}>Политика конфеденциальности</p>
        </a>
      </div>
    </footer>
  );
}
