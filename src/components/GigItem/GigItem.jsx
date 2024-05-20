import React from 'react';
import { format, parseISO } from 'date-fns';
import styles from './GigItem.module.css';

const GigItem = ({ date, eventName, location }) => {
  // Преобразование строки даты в объект Date
  const parsedDate = parseISO(date);

  // Форматирование даты с помощью date-fns
  const formattedDay = format(parsedDate, 'eee');
  const formattedDate = format(parsedDate, 'dd');
  const formattedMonthYear = format(parsedDate, 'MMM yyyy');

  return (
    <div className={styles.gigItem}>
      <div className={styles.gigDate}>
        <span className={styles.day}>{formattedDay}</span>
        <span className={styles.date}>{formattedDate}</span>
        <span className={styles.month}>{formattedMonthYear}</span>
      </div>
      <div className={styles.gigDetails}>
        <h3 className={styles.gigTitle}>{eventName}</h3>
        <p className={styles.gigLocation}>{location}</p>
      </div>
    </div>
  );
};

export default GigItem;
