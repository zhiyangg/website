import React from 'react';
import Image from 'next/image';
import styles from '../styles/about.module.css'; 

export default function About() {
    return (
        <main>
            <div className={styles.card}>
                <div className={styles.body}>
                    <p>Hi, I'm Zhi Yang Chen, a third year Computer Engineering student at the University of Toronto. </p>
                    <p>Being immersed in the world of computer engineering, I am passionate about creating innovative software solutions </p>
                    <p>Outside academia, my world revolves around my dog and sport cars, especially the engineering marvels from Porsche </p>
                </div>  
            </div>
        </main>
    );
}