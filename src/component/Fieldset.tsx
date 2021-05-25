import React from 'react';
import styles from './Fieldset.module.scss';

type Props = {
  legend: string,
  children: React.ReactNode,
};

export function Fieldset(props: Props) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{props.legend}</legend>

      {props.children}
    </fieldset>
  );
}
