import React, { useState, useEffect } from 'react';
import client from '../../client';
import { useModal } from '../../context/ModalContext';
import GigItem from '../GigItem/GigItem';
import moment from 'moment';

import styles from './Gigs.module.css';

const Gigs = () => {
  const { showModal } = useModal();
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const fetchGigs = async () => {
      const query = '*[_type == "gig"] | order(date asc)';
      try {
        const response = await client.fetch(query);
        console.log('Fetched gigs:', response);
        setGigs(response);
      } catch (error) {
        console.error('Failed to fetch gigs:', error);
      }
    };

    fetchGigs();
  }, []);

  return (
    <section id="events" className={styles.gigs} aria-labelledby="upcoming-gigs">
      <h2 id="upcoming-gigs">Upcoming Gigs</h2>
      {gigs.length ? (
        <ul className={styles.container}>
          {gigs.map((gig) => (
            <GigItem
              key={`${gig.venue}-${gig.date}`}
              date={moment(gig.date).format('YYYY-MM-DD')}
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
