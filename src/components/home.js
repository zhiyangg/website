import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css'; 

export default function Home() {
  return (
    <main className={styles.main}>
        <Head>
            <title>Home - Zhi Yang Chen's Portfolio</title>
            <meta name="description" content="Welcome to my portfolio website!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.name}>
                    <h2>Zhi Yang Chen</h2>
                </div>
                <div className={styles.body}>
                    <p>Software Engineer</p>
                    <p>Computer Engineering Student at the University of Toronto</p>
                </div>
            </div>
        </div>

        <div className={styles.image}>
            <Image
                src="/img/profile.png" 
                alt="Profile Image"
                layout="responsive"
                width={1} 
                height={1} 
            />
        </div>
    </main>
  );
}
