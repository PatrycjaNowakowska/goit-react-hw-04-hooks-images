import React from "react";
import styles from '../Styles.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, openModal }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        onClick={openModal}
        loading="lazy"
      />
    </li>
  );
}

export default ImageGalleryItem;