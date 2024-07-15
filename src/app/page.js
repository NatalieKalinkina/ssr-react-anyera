import Image from 'next/image';
import styles from './page.module.css';
import mainImage from '@/app/ui/images/main.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={mainImage} className={styles.image}></Image>
    </main>
  );
}
