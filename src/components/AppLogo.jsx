import React, { Component } from 'react'
import styles from './AppLogo.module.scss';

export default class AppLogo extends Component {
  render() {
    return (
      <div className={styles.logoContainer}>
        <h5 className={styles.title}>Podcast Player</h5>
      </div>
    )
  }
}
