import React from 'react';
import Image from 'next/image';
import styles from '../styles/project.module.css'; 

export default function project({position, software, description, imgPath, imgAlt, linkURL, linkText}) {
    return (
        <main className={styles.main}>
            <div className={styles.outerCard}>
                <div className={styles.innerCard}>
                    <div className={styles.body}>
                        <div className={styles.text}>
                            <div className={styles.posiiton}>
                                <h2>{position}</h2>
                            </div>
                            <div className={styles.container}>
                                <h3>{software}</h3>
                            </div>
                            <div className={styles.description}>
                                <p>{description}</p>
                                <br></br>
                                <a href={linkURL} target='blank'>{linkText}</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageCard}>
                        <div className={styles.image}>
                            <Image 
                                src={imgPath}
                                alt={imgAlt}
                                layout='fill'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}