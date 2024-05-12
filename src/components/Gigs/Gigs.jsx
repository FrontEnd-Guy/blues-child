import React from 'react';
import GigItem from '../GigItem/GigItem';
import styles from './Gigs.module.css';
import { useModal } from '../../context/ModalContext';

// The static array of gigs
const gigs = [
  { date: '2024-05-05', venue: 'The Jazz Cafe', city: 'Tupelo, MS' },
  { date: '2024-05-12', venue: 'Blues Bar', city: 'Memphis, TN' },
  { date: '2024-05-20', venue: 'Downtown Club', city: 'Destin, FL' },
  // ... more gigs
];

const Gigs = () => {
  const { showModal } = useModal();

  return (
    <section id="events" className={styles.gigs} aria-labelledby="upcoming-gigs">
      <h2 id="upcoming-gigs">Upcoming Gigs</h2>
      {gigs.length ? (
        <ul className={styles.container}>
          {gigs.map((gig) => (
            <GigItem
              key={`${gig.venue}-${gig.date}`}
              date={new Date(gig.date)}
              eventName={gig.venue}
              location={gig.city}
            />
          ))}
        </ul>
      ) : (
        <p>No upcoming gigs scheduled.</p>
      )}
      <button className={styles.bookBtn} onClick={showModal} aria-label="Book a session">
        Book the Band
      </button>
    </section>
  );
};

export default Gigs;
