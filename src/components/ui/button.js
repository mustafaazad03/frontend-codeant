import React from 'react'
import styles from './button.module.css'

const Button = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button;