import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3 className={styles.name}>Aadil</h3>
        </div>

        <div className={styles.social}>
          <a href="https://github.com/Carl6105" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/aadil-s-mohammed-9844412b6" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:shaikaadil60@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className={styles.right}>
          <p>{new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Back to Top Button */}
        <button
          className={styles.backToTop}
          aria-label="Back to top"
          onClick={scrollToTop}
          type="button"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
