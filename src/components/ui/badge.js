import React from 'react'
import styles from './badge.module.css'

const Badge = ({ children, variant = 'default' }) => {
  return <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>
}

export default Badge;