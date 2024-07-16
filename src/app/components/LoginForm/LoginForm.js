'use client';
import styles from './loginForm.module.css';

export default function LoginForm({ toggleForm }) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.close}
        aria-label="закрыть окно"
        onClick={toggleForm}
      ></button>
      <h2 className={styles.title}>Вход</h2>
      <form className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Введите e-mail или телефон"
          value="data"
        />
        <input
          type="password"
          className={styles.input}
          placeholder=" Введите пароль"
          value="password"
        />
        <div className={styles.check}>
          <label className={styles.label}>
            Запомнить меня
            <input
              className={styles.checkbox}
              type="checkbox"
              //   checked={checkedCheckbox}
              //   onChange={changeCheckbox}
            />
          </label>
          <p className={styles.text}></p>
        </div>
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
      <div className={styles.bottomLine}>
        <p className={styles.text}>Нет аккаунта?</p>
        <a className={styles.link} href="#">
          Регистрация
        </a>
      </div>
    </div>
  );
}
