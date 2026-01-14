import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Gallery.module.css';
import { ReactComponent as PhotoIcon } from '../../assets/photo.svg';
import { ReactComponent as VideoIcon } from '../../assets/video.svg';
import client from '../../client';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxType, setLightboxType] = useState(null); // 'photo' or 'video'
  const lightboxVideoRef = useRef(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const query =
          '*[_type == "photo"] | order(order asc) { _id, description, "url": image.asset->url }';
        const result = await client.fetch(query);
        setPhotos(result);
      } catch (error) {
        console.error('Failed to fetch photos:', error);
      }
    };

    const fetchVideos = async () => {
      try {
        const query =
          '*[_type == "video"] | order(order asc) { _id, description, "url": video.asset->url, "thumbnail": thumbnail.asset->url }';
        const result = await client.fetch(query);
        setVideos(result);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      }
    };

    fetchPhotos();
    fetchVideos();
  }, []);

  const openLightbox = (index, type) => {
    setLightboxIndex(index);
    setLightboxType(type);
  };

  const closeLightbox = () => {
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
    }
    setLightboxIndex(null);
    setLightboxType(null);
  };

  const currentItems = lightboxType === 'photo' ? photos : videos;

  const showPrev = useCallback(() => {
    if (lightboxVideoRef.current) lightboxVideoRef.current.pause();
    setLightboxIndex((prev) => {
      const length = lightboxType === 'photo' ? photos.length : videos.length;
      return prev > 0 ? prev - 1 : length - 1;
    });
  }, [lightboxType, photos.length, videos.length]);

  const showNext = useCallback(() => {
    if (lightboxVideoRef.current) lightboxVideoRef.current.pause();
    setLightboxIndex((prev) => {
      const length = lightboxType === 'photo' ? photos.length : videos.length;
      return prev < length - 1 ? prev + 1 : 0;
    });
  }, [lightboxType, photos.length, videos.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className={styles.galleryContainer} aria-labelledby="gallery-header">
      <div className={styles.header}>
        <h2 id="gallery-header">Onstage Moments</h2>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => setActiveTab('photos')}
          className={`${styles.button} ${activeTab === 'photos' ? styles.active : ''}`}
          data-active={activeTab === 'photos'}>
          <PhotoIcon />
          Photos
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`${styles.button} ${activeTab === 'videos' ? styles.active : ''}`}
          data-active={activeTab === 'videos'}>
          <VideoIcon />
          Videos
        </button>
      </div>

      {activeTab === 'photos' && (
        <ul className={styles.photos}>
          {photos.map((photo, index) => (
            <li
              key={photo._id}
              className={styles.photo}
              onClick={() => openLightbox(index, 'photo')}
            >
              <img src={photo.url} alt={photo.description || 'Gallery photo'} />
            </li>
          ))}
        </ul>
      )}

      {lightboxIndex !== null && currentItems[lightboxIndex] && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
            ×
          </button>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {lightboxType === 'photo' ? (
              <img
                src={currentItems[lightboxIndex].url}
                alt={currentItems[lightboxIndex].description || 'Gallery photo'}
                className={styles.lightboxImage}
              />
            ) : (
              <video
                key={lightboxIndex}
                ref={lightboxVideoRef}
                controls
                autoPlay
                className={styles.lightboxVideo}
                poster={currentItems[lightboxIndex].thumbnail}
              >
                <source src={currentItems[lightboxIndex].url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <button
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next"
          >
            ›
          </button>
          <div className={styles.lightboxCounter}>
            {lightboxIndex + 1} / {currentItems.length}
          </div>
        </div>
      )}

      {activeTab === 'videos' && (
        <ul className={styles.videos}>
          {videos.map((video, index) => (
            <li
              key={video._id}
              className={styles.video}
              onClick={() => openLightbox(index, 'video')}
            >
              <img
                src={video.thumbnail}
                alt={video.description || 'Video thumbnail'}
                className={styles.videoThumbnail}
              />
              <div className={styles.playButton}>
                <span>▶</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Gallery;
