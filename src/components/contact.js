import React from 'react';
import styles from '../styles/contact.module.css'; 

export default function contact() {
    return (
        <main>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>Design and Built by Zhi Yang Chen</h2>
                </div>
                <div className={styles.info}>
                    <a href='https://github.com/zhiyangg' target='blank'>Github</a>
                    <a href='https://www.linkedin.com/in/zhiyangc/' target='blank'>LinkedIn</a>
                    <a href='/img/resume.pdf' target="_blank">Resume</a>
                    <a href='https://github.com/zhiyangg' target='blank'>Email</a>
                </div>
            </div>
        </main>
    );
}