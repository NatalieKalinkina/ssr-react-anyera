import styles from '../page.module.css';
import { ceraPro } from '../ui/fonts';

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.image}>
        <div className={styles.text}>
          <p className={ceraPro.className}>It's neccessary for testing animation</p>
          <h1 className={ceraPro.className}>This is an example page</h1>
          <h2 className={ceraPro.className}>
            Сlick on the title or logo to return to the home page
          </h2>
        </div>
      </div>
    </main>
  );
}
