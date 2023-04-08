import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

const Button = (props: any) => {
  return (
    <button className={clsx(styles.button, props.className)}>
      {props.children}
    </button>
  )
}

export default Button
