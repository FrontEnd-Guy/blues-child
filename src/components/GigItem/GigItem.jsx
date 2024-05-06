import React from 'react';
import { format } from 'date-fns';
import styles from './GigItem.module.css';

const GigItem = ({ date, eventName, location }) => {
  const formattedDay = format(date, 'eee');
  const formattedDate = format(date, 'dd');
  const formattedMonthYear = format(date, 'MMM yyyy');

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
