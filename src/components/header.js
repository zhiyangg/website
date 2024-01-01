import React from 'react';
import styles from '../styles/header.module.css'; 

export default function header({title}) {
    return (
        <main>
            <h2 className={styles.h2}>{title}</h2>
        </main>
    );
}