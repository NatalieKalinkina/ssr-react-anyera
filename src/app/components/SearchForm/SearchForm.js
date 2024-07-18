'use client';

import { useState } from 'react';
import styles from './SearchForm.module.css';
import useDeviceSize from '../../hooks/useResize';

export default function SearchForm() {
  const [checkInType, setCheckInType] = useState('text');
  const [checkOutType, setCheckOutType] = useState('text');

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('search');
  }

  const windowWidth = useDeviceSize();

  {
    if (windowWidth > 767) {
      return (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Город или адрес
            <input className={styles.input} type="text" placeholder="Куда едем" />
          </label>
          <label className={styles.label}>
            Заезд
            <input
              className={styles.input}
              type={checkInType}
              placeholder="Когда"
              id={styles.checkIn}
              onFocus={() => setCheckInType('date')}
              onBlur={() => setCheckInType('text')}
            />
          </label>

          <label className={styles.label}>
            Отъезд
            <input
              className={styles.input}
              type={checkOutType}
              placeholder="Когда"
              id={styles.checkOut}
              onFocus={() => setCheckOutType('date')}
              onBlur={() => setCheckOutType('text')}
            />
          </label>

          <label className={styles.label}>
            Гости
            <input className={styles.input} type="text" placeholder="2 взрослых, без детей" />
          </label>

          <button type="submit" className={styles.button}></button>
        </form>
      );
    } else {
      return (
        <form className={styles.form_small} onSubmit={handleSubmit}>
          <label className={styles.label_small}>
            Город или адрес
            <input className={styles.input_small} type="text" placeholder="Куда едем" />
          </label>
          <label className={styles.label_small}>
            Заезд
            <input
              className={styles.input_small}
              type={checkInType}
              placeholder="Когда"
              id={styles.checkIn_small}
              onFocus={() => setCheckInType('date')}
              onBlur={() => setCheckInType('text')}
            />
          </label>

          <label className={styles.label_small}>
            Отъезд
            <input
              className={styles.input_small}
              type={checkOutType}
              placeholder="Когда"
              id={styles.checkOut_small}
              onFocus={() => setCheckOutType('date')}
              onBlur={() => setCheckOutType('text')}
            />
          </label>

          <label className={styles.label_small}>
            Гости
            <input className={styles.input_small} type="text" placeholder="2 взрослых, без детей" />
          </label>

          <button type="submit" className={styles.button_small}>
            <p className={styles.buttonText_small}>Поиск</p>
          </button>
        </form>
      );
    }
  }
}
