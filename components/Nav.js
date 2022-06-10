import Link from 'next/link'
import React from 'react'
import styles from '../styles/Nav.module.css'


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>E-Commerce</div>
            <div>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/cart'>Cart</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav