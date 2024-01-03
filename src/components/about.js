import React from 'react';
import Image from 'next/image';
import styles from '../styles/about.module.css'; 

export default function About() {
    return (
        <main>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>About Me</h2>
                </div>
            </div>
            <div className={styles.body}>
                <p ></p>
            </div>
        </main>
    );
}