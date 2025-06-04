import styles from '../styles/Achievements.module.css';

const Achievements = () => {
  return (
    <section id="achievements" className={styles.achievements} data-aos="fade-up">
      <h2 className={styles.heading}>Achievements</h2>
      <ul className={styles.list}>
        <li>1st Place in Open Innovation Category in MGIT Hackathon March 2025</li>
        <li>3rd Place in Open Innovation Category in Techknow 2.0 March 2025</li>
      </ul>
    </section>
  );
};

export default Achievements;
