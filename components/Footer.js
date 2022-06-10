import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a>Home</a>
        <a>About</a>
        <a>Cart</a>
        <a>Contact</a>
    </footer>
  )
}

export default Footer