import React, { useState, useRef, useEffect } from 'react';
import styles from './Gallery.module.css';
import { ReactComponent as PhotoIcon } from '../../assets/photo.svg';
import { ReactComponent as VideoIcon } from '../../assets/video.svg';

const Gallery = ({ photos, videos }) => {
  const [activeTab, setActiveTab] = useState('photos');
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });
  };

  return (
    <section id="gallery" className={styles.galleryContainer} aria-labelledby="gallery-header">
      <div className={styles.header}>
        <h2 id="gallery-header">Onstage Moments</h2>
      </div>
      <div className={styles.buttons}>
        <button
          aria-selected={activeTab === 'photos'}
          onClick={() => setActiveTab('photos')}
          className={`${styles.button} ${activeTab === 'photos' ? styles.active : ''}`}>
          <PhotoIcon />
          Photos
        </button>
        <button
          aria-selected={activeTab === 'videos'}
          onClick={() => setActiveTab('videos')}
          className={`${styles.button} ${activeTab === 'videos' ? styles.active : ''}`}>
          <VideoIcon />
          Videos
        </button>
      </div>

      {activeTab === 'photos' && (
        <ul className={styles.photos}>
          {photos.map((photo, index) => (
            <li key={index} className={styles.photo}>
              <img src={photo.url} alt={photo.description || 'Gallery photo'} />
            </li>
          ))}
        </ul>
      )}

      {activeTab === 'videos' && (
        <ul className={styles.videos}>
          {videos.map((video, index) => (
            <li key={index} className={styles.video}>
              <video
                controls
                poster={video.thumbnail}
                ref={(el) => (videoRefs.current[index] = el)}
                onPlay={() => handlePlay(index)}>
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
