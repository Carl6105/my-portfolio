import {
    FaShieldAlt,
    FaBug,
    FaLock,
    FaNetworkWired,
    FaCode,
    FaCogs,
  } from 'react-icons/fa';
  
  import styles from '../styles/Skills.module.css';
  
  const skills = [
    { icon: <FaCode />, name: ' Python, Java & React' },
    { icon: <FaShieldAlt />, name: ' Ethical Hacking' },
    { icon: <FaBug />, name: ' Vulnerability Analysis & Pen Testing' },
    { icon: <FaLock />, name: ' Cryptography' },
    { icon: <FaNetworkWired />, name: ' Network Protocols & Security' },
    { icon: <FaCogs />, name: ' API & RESTful Services' },
  ];
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className={styles.skills}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
      >
        <h2 className={styles.heading}>Skills</h2>
        <ul className={styles.skillList}>
          {skills.map((skill, idx) => (
            <li key={idx} className={styles.skillItem}>
              <span className={styles.icon}>{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Skills;
  