import styles from '../styles/navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
        <div className={styles.logo}>
            <a href="/">Zhi Yang Chen</a>
        </div>
        <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
    );
}