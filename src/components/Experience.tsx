import styles from '../styles/Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience} data-aos="fade-up">
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>

        <div className={styles.item}>
          <h3>Cyber Security Virtual Internship</h3>
          <p><strong>Platform:</strong> Palo Alto Networks</p>
          <p><strong>Duration:</strong> September 2023 – November 2023</p>
          <p>
            Completed intensive training in core cybersecurity concepts, network security, and threat detection using Palo Alto’s security platforms and tools.
          </p>
        </div>

        <div className={styles.item}>
          <h3>Nodwin DreamHack @ Hyderabad</h3>
          <p><strong>Role:</strong> Volunteer</p>
          <p><strong>Date:</strong> November 2024</p>
          <p>
            Assisted in designing and conducting interactive workshops at BYOD events, educating 150+ students on secure device usage and data protection, resulting in a 40% improvement in responsible device handling practices.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
