import React, { useState, useEffect } from 'react';
import styles from './Time.module.scss';

export function Time() {
  const [text, setText] = useState('00:00:00');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      setText(date.toLocaleTimeString('JP-ja', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }))
    }, 1000);
  });
  return (
    <div className={styles.wrap} id="target">
      <div className={styles.inner} id="target__inner">
        <p id="time" aria-live="polite" className={styles.time}>{text}</p>
      </div>
    </div>
  );
};
