import React, { useState, useRef, useEffect } from 'react';
import styles from './Gallery.module.css';
import { ReactComponent as PhotoIcon } from '../../assets/photo.svg';
import { ReactComponent as VideoIcon } from '../../assets/video.svg';
import client from '../../client';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

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
          {photos.map((photo) => (
            <li key={photo._id} className={styles.photo}>
              <img src={photo.url} alt={photo.description || 'Gallery photo'} />
            </li>
          ))}
        </ul>
      )}

      {activeTab === 'videos' && (
        <ul className={styles.videos}>
          {videos.map((video, index) => (
            <li key={video._id} className={styles.video}>
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
