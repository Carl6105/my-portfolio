import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section
      id="about"
      className={styles.about}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
    >
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.paragraph}>
        I'm <strong>Aadil</strong> — a passionate <em>Cyber Security Engineer</em> and <em>Full Stack Developer</em> dedicated to building robust and secure digital solutions. With a strong foundation in network security, ethical hacking, and software development, I thrive on identifying vulnerabilities before they become threats and developing applications that are both efficient and secure.
      </p>
      <p className={styles.paragraph}>
        My expertise spans across designing secure architectures, conducting penetration testing, and developing full-stack web applications using modern technologies like MERN Stack. I believe in writing clean, maintainable code and following best practices to deliver scalable projects.
      </p>
      <p className={styles.paragraph}>
        When I’m not coding or researching security, you’ll find me indulging in hobbies like gaming, graphic designing and video editing — activities that keep my creativity flowing and help me maintain a balanced lifestyle.
      </p>
    </section>
  );
};

export default About;
