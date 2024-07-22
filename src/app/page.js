import Link from 'next/link';
import Head from 'next/head';
import styles from './page.module.css';
import { ceraPro } from './ui/fonts';
import SearchForm from './components/SearchForm/SearchForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DRIVERAVE: аренда жилья и автомобилей от владельцев</title>
        <meta
          name="description"
          content="Аренда жилья и автомобилей от владельцев вместе с DRIVERAVE"
        ></meta>
        <meta name="robots" content="index, nofollow"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0 "></meta>
        <meta charset="UTF-8"></meta>
      </Head>
      <main className={styles.main}>
        <div className={styles.image}>
          <div className={styles.text}>
            <p className={ceraPro.className}>Ut enim ad minim veniam</p>
            <Link href="/example_page" scroll={true}>
              <h1 className={ceraPro.className}>Duis aute irure dolor in reprehenderit</h1>
            </Link>
            <h2 className={ceraPro.className}>Duis aute irure dolor in reprehenderit</h2>
          </div>
          <SearchForm />
        </div>
      </main>
    </div>
  );
}
