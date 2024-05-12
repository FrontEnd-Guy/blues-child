import React from 'react';
import styles from './Hero.module.css';
import video from '../../assets/placeholder-video.mp4';

const Hero = () => {
  const handleScrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title" role="banner">
      <video className={styles.video} autoPlay muted loop aria-hidden="true">
        <source src={video} type="video/mp4" />
      </video>
      <h1 id="hero-title" className={styles.title}>
        Blues Child Rocks <br />
        the Spirit of the South
      </h1>
      <button className={styles.button} aria-label="See gig dates" onClick={handleScrollToEvents}>
        See Gig Dates
      </button>
    </section>
  );
};

export default Hero;
