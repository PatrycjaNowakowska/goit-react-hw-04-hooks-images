import React from "react";
import styles from '../Styles.module.css';

function Button({ fetchMoreImages, label }) {
  return (
    <button type="button" className={styles.Button} onClick={fetchMoreImages}>
      {label}
    </button>
  );
}

export default Button;