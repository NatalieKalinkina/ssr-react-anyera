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
          <label htmlFor="address" className={styles.label_small}>
            Город или адрес
          </label>
          <input className={styles.input_small} type="text" id="address" placeholder="Куда едем" />

          <div className={styles.dateContainer_small}>
            <label className={styles.dateLabel_small}>
              <p className={styles.dateLabelText_small}>Заезд</p>
              <input
                className={styles.checkInInput_small}
                type={checkInType}
                placeholder="Когда"
                id="checkIn"
                onFocus={() => setCheckInType('date')}
                onBlur={() => setCheckInType('text')}
              />
            </label>

            <label className={styles.dateLabel_small}>
              <p className={styles.dateLabelText_small}>Отъезд</p>
              <input
                className={styles.checkOutInput_small}
                type={checkOutType}
                placeholder="Когда"
                id="checkOut"
                onFocus={() => setCheckOutType('date')}
                onBlur={() => setCheckOutType('text')}
              />
            </label>
          </div>

          <label htmlFor="guests" className={styles.label_small}>
            Гости
          </label>
          <input
            className={styles.input_small}
            type="text"
            id="guests"
            placeholder="2 взрослых без детей"
          />

          <button type="submit" className={styles.button_small}>
            <div className={styles.icon_small}></div>
            <p className={styles.buttonText_small}>Поиск</p>
          </button>
        </form>
      );
    }
  }
}
