import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section
      id="contact"
      className={styles.contact}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
    >
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.contactItem}>
        <FaEnvelope className={styles.icon} />
        <a href="mailto:shaikaadil60@gmail.com" className={styles.link}>
          shaikaadil60@gmail.com
        </a>
      </p>
      <p className={styles.contactItem}>
        <FaLinkedin className={styles.icon} />
        <a
          href="https://www.linkedin.com/in/aadil-s-mohammed-9844412b6/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          S Mohammed Aadil
        </a>
      </p>
      <p className={styles.contactItem}>
        <FaGithub className={styles.icon} />
        <a
          href="https://github.com/Carl6105"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Aadil
        </a>
      </p>
    </section>
  );
};

export default Contact;
