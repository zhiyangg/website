import React from 'react';
import Image from 'next/image';
import styles from '../styles/exp.module.css'; 

export default function exp({position, company, startDate, endDate, description, imgPath, imgAlt, linkURL}) {
    return (
        <main className={styles.main}>
                <div className={styles.outerCard}>
                    <a href={linkURL} target='blank'>
                        <div className={styles.innerCard}>
                            <div className={styles.imageCard}>
                                <div className={styles.image}>
                                    <Image 
                                        src={imgPath}
                                        alt={imgAlt}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                            
                            <div className={styles.body}>
                                <div className={styles.text}>
                                    <div className={styles.posiiton}>
                                        <h2>{position}</h2>
                                    </div>
                                    <div className={styles.container}>
                                        <h3>{company}</h3>
                                        <h3>{startDate} - {endDate}</h3>
                                    </div>
                                    <div className={styles.description}>
                                        {description.map((desc, index) => (
                                            <p key={index}>{desc}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
        </main>
    );
}