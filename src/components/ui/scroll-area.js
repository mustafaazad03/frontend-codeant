import React from 'react'
import styles from './scroll-area.module.css'

const ScrollArea = ({ children, className }) => {
  return <div className={`${styles.scrollArea} ${className}`}>{children}</div>
}

export default ScrollArea;