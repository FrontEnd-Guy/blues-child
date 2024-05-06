import React from 'react';
import GigItem from '../GigItem/GigItem';
import styles from './Gigs.module.css';

// The static array of gigs
const gigs = [
  { date: '2024-05-05', venue: 'The Jazz Cafe', city: 'Tupelo, MS' },
  { date: '2024-05-12', venue: 'Blues Bar', city: 'Memphis, TN' },
  { date: '2024-05-20', venue: 'Downtown Club', city: 'Destin, FL' },
  // ... more gigs
];

const Gigs = () => {
  return (
    <section id="events" className={styles.gigs}>
      <h2>Upcoming Gigs</h2>
      {gigs.length ? (
        <ul className={styles.container}>
          {gigs.map((gig, index) => (
            <GigItem
              key={index}
              date={new Date(gig.date)}
              eventName={gig.venue}
              location={gig.city}
            />
          ))}
        </ul>
      ) : (
        <p>No upcoming gigs scheduled.</p>
      )}
    </section>
  );
};

export default Gigs;
