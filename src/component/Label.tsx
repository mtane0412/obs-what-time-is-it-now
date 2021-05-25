import React from 'react';
import styles from './Label.module.scss';

type Props = {
  name: string,
  disabled?: boolean,
  children: React.ReactNode,
};

export function Label(props: Props) {
  return (
    <p className={styles.wrap} data-disabled={props.disabled}>
      <label className={styles.label}>
        <span className={styles.name}>{props.name}</span>
        <span className={styles.input}>
          {props.children}
        </span>
      </label>
    </p>
  );
}
