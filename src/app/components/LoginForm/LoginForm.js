'use client';
import styles from './loginForm.module.css';
import { circe } from '../../ui/fonts';

export default function LoginForm({ toggleForm }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('form');
  }
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.close}
        aria-label="закрыть окно"
        onClick={toggleForm}
      ></button>
      <h2 className={circe.className}>Вход</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" className={styles.input} placeholder="Введите e-mail или телефон" />
        <input type="password" className={styles.input} placeholder=" Введите пароль" />
        <div className={styles.check}>
          <label className={styles.label}>
            <input
              className={styles.checkbox}
              type="checkbox"
              //   checked={checkedCheckbox}
              //   onChange={changeCheckbox}
            />
            Запомнить меня
          </label>
          <p className={styles.link}>Забыли пароль?</p>
        </div>
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
      <div className={styles.bottomLine}>
        <p>Нет аккаунта?</p>
        <a className={styles.sign_up} href="#">
          Регистрация
        </a>
      </div>
    </div>
  );
}
