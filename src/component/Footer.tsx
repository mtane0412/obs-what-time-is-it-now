import React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <a href="https://github.com/KawarabeEcma/obs-what-time-is-it-now">Source on GitHub</a>
      </p>
    </footer>
  );
}
