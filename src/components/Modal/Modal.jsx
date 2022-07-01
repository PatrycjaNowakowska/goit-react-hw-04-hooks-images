import React, { Component } from 'react';
import styles from '../Styles.module.css';


class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.checkEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.checkEvent);
  }

  checkEvent = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      this.props.toogleModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.checkEvent}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;