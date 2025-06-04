import {
    FaGamepad,
    FaShieldAlt,
    FaLaptopCode,
    FaBrain,
    FaPaintBrush,
    FaVideo,
  } from 'react-icons/fa';
  import styles from '../styles/Hobbies.module.css';
  
  const Hobbies = () => {
    return (
      <section
        id="hobbies"
        className={styles.hobbies}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
      >
        <h2 className={styles.heading}>Hobbies</h2>
        <ul className={styles.list}>
          <li>
            <FaGamepad className={styles.icon} />
            <span>Desktop Gaming</span>
          </li>
          <li>
            <FaShieldAlt className={styles.icon} />
            <span>Ethical Hacking</span>
          </li>
          <li>
            <FaLaptopCode className={styles.icon} />
            <span>Designing Full Stack Applications</span>
          </li>
          <li>
            <FaBrain className={styles.icon} />
            <span>Learning about AI</span>
          </li>
          <li>
            <FaPaintBrush className={styles.icon} />
            <span>Graphic Design</span>
          </li>
          <li>
            <FaVideo className={styles.icon} />
            <span>Video Editing</span>
          </li>
        </ul>
      </section>
    );
  };
  
  export default Hobbies;
  