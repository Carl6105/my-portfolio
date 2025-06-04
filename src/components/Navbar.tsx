import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

const Navbar = ({ toggleTheme, darkMode }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <span className={styles.logoPrimary}>My</span>
        <span className={styles.logoSecondary}> Portfolio</span>
      </h1>
      <ul className={styles.links}>
        <li><a href="#about" className={styles.link}>About</a></li>
        <li><a href="#projects" className={styles.link}>Projects</a></li>
        <li><a href="#skills" className={styles.link}>Skills</a></li>
        <li><a href="#contact" className={styles.link}>Contact</a></li>
        <li>
          <a
            href="/assets/resume.pdf"
            download
            className={styles.resumeButton}
          >
            📄 Resume
          </a>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className={styles.themeToggle}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
