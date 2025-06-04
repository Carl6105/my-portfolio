import styles from '../styles/Projects.module.css';

const projects = [
  {
    name: 'WiFi Bastion',
    description: 'Detects Evil Twin attacks and MAC spoofing to secure WiFi networks.',
    techStack: ['Python', 'Network Security', 'PyWiFi'],
  },
  {
    name: 'Phish Shield',
    description: 'Phishing detector with website IP locator to prevent cyber threats.',
    techStack: ['Python', 'Web Scraping', 'IP Geolocation'],
  },
  {
    name: 'Code Amplifier and Validator',
    description: 'Automatically fixes and enhances code issues for better performance.',
    techStack: ['React', 'JavaScript', 'Code Analysis'],
  },
  {
    name: 'Rapid RX',
    description: 'E-commerce site for medicine delivery within 30 minutes based on prescription upload. Built as a static webpage using HTML.',
    techStack: ['HTML', 'Web Design', 'E-commerce'],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className={styles.projects}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
    >
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectList}>
        {projects.map(({ name, description, techStack }, index) => (
          <article key={index} className={styles.projectCard} tabIndex={0} aria-label={`Project: ${name}`}>
            <h3 className={styles.projectName}>{name}</h3>
            <p className={styles.projectDesc}>{description}</p>
            <div className={styles.techStack}>
              {techStack.map((tech, i) => (
                <span key={i} className={styles.techTag} aria-label={`Technology used: ${tech}`}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
