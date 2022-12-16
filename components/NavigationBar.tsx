import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';
import React, { useState, useEffect } from 'react';

export default function NavigationBar() {

    return(
        <nav className={styles.navbar} id="navbar" >

            <Link href="/" className={`${styles.name} ${styles.navLink}`}>Vegan Anteater</Link>
            
            <div className={styles.pageButtons}>
                <Link href="/" className={`${styles.navItem} ${styles.navLink}`}>Home</Link>
            </div>

        </nav>
    )
}