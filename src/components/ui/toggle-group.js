import React from 'react'
import styles from './toggle-group.module.css'

export function ToggleGroup({ value, onChange, items }) {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <button
          key={item.value}
          className={`${styles.item} ${value === item.value ? styles.active : ''}`}
          onClick={() => onChange(item.value)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

