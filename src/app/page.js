import Image from 'next/image';
import styles from './page.module.css';
import mainImage from '@/app/ui/images/main.png';
import { ceraPro } from './ui/fonts';
import SearchForm from './components/SearchForm/SearchForm';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image}>
        <div className={styles.text}>
          <p className={ceraPro.className}>Ut enim ad minim veniam</p>
          <h1 className={ceraPro.className}>Duis aute irure dolor in reprehenderit</h1>
          <h2 className={ceraPro.className}>Duis aute irure dolor in reprehenderit</h2>
        </div>
        <SearchForm />
      </div>
    </main>
  );
}
