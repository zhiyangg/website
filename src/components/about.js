import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/about.module.css'; 

export default function About() {
  return (
    <main className={styles.main}>
        <Head>
            <title>About - Zhi Yang Chen's Portfolio</title>
            <meta name="description" content="Welcome to my portfolio website!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.name}>
                    <h2>Zhi Yang Chen</h2>
                </div>
                <div className={styles.body}>
                    <p>Junior Software Engineer</p>
                    <p>Computer Engineering Student at the University of Toronto</p>
                </div>
            </div>
        </div>
    </main>
  );
}
