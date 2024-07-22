import Link from 'next/link';
import Head from 'next/head';
import styles from '../page.module.css';
import { ceraPro } from '../ui/fonts';

export default function Page() {
  return (
    <div>
      <Head>
        <title>DRIVERAVE: страница для примера</title>
        <meta name="description" content="Страница сайта для примера переходов по ссылкам"></meta>
        <meta name="robots" content="noindex, nofollow"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0 "></meta>
        <meta charset="UTF-8"></meta>
      </Head>
      <main className={styles.main}>
        <div className={styles.image}>
          <div className={styles.text}>
            <p className={ceraPro.className}>It's neccessary for testing animation</p>
            <Link href="/" scroll={true}>
              <h1 className={ceraPro.className}>This is an example page</h1>
            </Link>
            <h2 className={ceraPro.className}>
              Сlick on the title or logo to return to the home page
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
