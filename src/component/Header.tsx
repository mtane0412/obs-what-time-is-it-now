import React from 'react';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>現在時刻</h1>
    </header>
  );
}
