import React, {DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import styles from './Checkbox.module.scss';

type Props = Partial<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;

export function Checkbox(attr: Props = {}) {
  const {onChange, ...props} = attr;
  const [state, setState] = useState(true);
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkbox = e.target as HTMLInputElement;

    setState(checkbox.checked);
    onChange && onChange(e);
  };

  return (
    <span className={styles.wrap} data-checked={state}>
      <input
        type="checkbox"
        onChange={_onChange}
        className={styles.input}
        {...props}
      />
      <span className={styles.state}></span>
    </span>
  );
}
