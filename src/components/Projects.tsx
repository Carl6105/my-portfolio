import styles from '../styles/Projects.module.css';

const projects = [
  {
    name: 'WiFi Bastion',
    description: 'Detects Evil Twin attacks and MAC spoofing to secure WiFi networks.',
    techStack: ['Python', 'Network Security', 'PyWiFi'],
    github: 'https://github.com/Carl6105/wifi-bastion',
  },
  {
    name: 'Cryptographic Toolkit',
    description: 'All-in-one suite for file signing, hash analysis, JWT tampering, encryption, QR generation, and secure notes — with simulators and visualizations.',
    techStack: ['Python', 'PyQt6', 'Cryptography'],
    github: 'https://github.com/Carl6105/cryptographic-toolkit',
  },
  {
    name: 'Real Time Face Authenticator',
    description: 'A modern, secure face login system with blink detection, admin panel, face updates, and full activity tracking using MongoDB and PyQt6.',
    techStack: ['Python', 'OpenCV', 'PyQt6', 'MongoDB'],
    github: 'https://github.com/Carl6105/real-time-face-auth',
  },
  {
    name: 'Code Amplifier and Validator',
    description: 'Automatically fixes and enhances code issues for better performance.',
    techStack: ['React', 'JavaScript', 'Code Analysis'],
    github: 'https://github.com/Carl6105/app-validator',
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
        {projects.map(({ name, description, techStack, github }, index) => (
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
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
              aria-label={`View ${name} on GitHub`}
            >
              🔗 GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
