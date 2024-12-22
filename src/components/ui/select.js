import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './select.module.css';

const Select = ({ value, onChange, options }) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className={styles.selectIcon} />
    </div>
  );
};

export default Select;