import React, { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ photos, videos }) => {
  const [activeTab, setActiveTab] = useState('photos');

  return (
    <section id="gallery" className={styles.galleryContainer}>
      <div className={styles.header}>
        <h2>Onstage Moments</h2>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => setActiveTab('photos')}
          className={`${styles.button} ${activeTab === 'photos' ? styles.active : ''}`}>
          Photo
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`${styles.button} ${activeTab === 'videos' ? styles.active : ''}`}>
          Video
        </button>
      </div>

      {activeTab === 'photos' && (
        <ul className={styles.photos}>
          {photos.map((photo, index) => (
            <li key={index} className={styles.photo}>
              <img src={photo.url} alt={photo.description} />
            </li>
          ))}
        </ul>
      )}

      {activeTab === 'videos' && (
        <ul className={styles.videos}>
          {videos.map((video, index) => (
            <li key={index} className={styles.video}>
              <video controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Gallery;
