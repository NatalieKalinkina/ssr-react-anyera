import Image from 'next/image';
import styles from './page.module.css';
import mainImage from '@/app/ui/images/main.png';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image}></div>
      {/* <Image src={mainImage} className={styles.image} alt="main picture"></Image> */}
    </main>
  );
}
