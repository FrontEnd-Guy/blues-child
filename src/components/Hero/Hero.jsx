import React from 'react';
import styles from './Hero.module.css';

import video from '../../assets/placeholder-video.mp4';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <video className={styles.video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <h1 className={styles.title}>
        Blues Child
        <br />
        Rocking the Spirit of the South
      </h1>
      <p>
        <ul>
          <li></li>
        </ul>
      </p>
      <button
        className={styles.button}
        onClick={() => document.getElementById('events').scrollIntoView()}>
        See Gig Dates
      </button>
    </section>
  );
};

export default Hero;
