import React from 'react';
import styles from './About.module.css';

import band from '../../assets/hero.jpg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About The Band</h2>
        <p>
          Blues Child, a Mississippi-based band formed in 2003, blends Rock, Blues, Americana, and
          Country. With captivating vocals, electrifying guitar, and a tight rhythm section, they
          deliver dynamic performances that resonate from intimate clubs to festival stages, leaving
          a lasting impression.
        </p>
        <p>Band members are:</p>
        <ul>
          <li>Jock Adams - Lead Vocals and Lead Guitar</li>
          <li>Olivia Christensen - Lead Vocals</li>
          <li>Fred Calmes - Bass Guitar and Vocals</li>
          <li>Joe London - Drums</li>
          <li>Marty Miller - Guitar</li>
        </ul>
        <p>
          Join them on their journey as they honor the roots of American music and celebrate the
          spirit of South.
        </p>
      </div>
      <div>
        <img className={styles.image} src={band} alt="members of the band" />
      </div>
    </section>
  );
};

export default About;
