import React from 'react';
import styles from './About.module.css';
import band from '../../assets/hero.jpg';

const About = () => {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-the-band">
      <div className={styles.textContainer}>
        <h2 id="about-the-band" className={styles.title}>
          About the Band
        </h2>
        <p>
          Blues Child, a Mississippi-based band formed in 2003, blends Rock, Blues, Americana, and
          Country. With captivating vocals, electrifying guitar, and a tight rhythm section, they
          deliver dynamic performances that resonate from intimate clubs to festival stages, leaving
          a lasting impression.
        </p>
        <p>Band members are:</p>
        <ul aria-label="Band members">
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
      <div className={styles.imageContainer}>
        <img className={styles.image} src={band} alt="Band members performing on stage" />
      </div>
    </section>
  );
};

export default About;
