import styles from '../styles/Certifications.module.css';

const certifications = [
  {
    name: 'Salesforce Administrator',
    issuer: 'Salesforce',
  },
  {
    name: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM via Coursera',
  },
  {
    name: 'Innovation Ambassador (Advanced Level)',
    issuer: 'MoE’s Innovation Cell & AICTE',
  },
  {
    name: 'Security Operations Fundamentals',
    issuer: 'Palo Alto Networks',
  },
  {
    name: 'Cyber & Network Security Fundamentals',
    issuer: 'Palo Alto Networks',
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certifications} data-aos="fade-up">
      <h2 className={styles.heading}>Certifications</h2>
      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.card}>
            <h3>{cert.name}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
