import styles from '../styles/Certifications.module.css';

const certifications = [
  {
    name: 'Security Operations Fundamentals',
    issuer: 'Palo Alto Networks',
  },
  {
    name: 'Cloud Security Fundamentals',
    issuer: 'Palo Alto Networks',
  },
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'Palo Alto Networks',
  },
  {
    name: 'Network Security Fundamentals',
    issuer: 'Palo Alto Networks',
  },
  {
    name: 'AWS APAC – Solutions Architecture Job Simulation',
    issuer: 'Forage | Credential ID: 9C5F9QaHfKnA2etMg',
  },
  {
    name: 'Deloitte Australia – Cyber Job Simulation',
    issuer: 'Forage | Credential ID: 2yhSxyJqDJcALcq9B',
  },
  {
    name: 'Deloitte Australia – Data Analytics Job Simulation',
    issuer: 'Forage | Credential ID: Rc234uEAkPBhS9wN9',
  },
  {
    name: 'Deloitte Australia – Technology Job Simulation',
    issuer: 'Forage | Credential ID: zKsSZE3xmFRCLiXo8',
  },
  {
    name: 'Mastercard – Cybersecurity Job Simulation',
    issuer: 'Forage | Credential ID: 7NkJ4T6WLPPtCStWP',
  },
  {
    name: 'Tata Group – Cybersecurity Analyst Job Simulation',
    issuer: 'Forage',
  },
  {
    name: 'Salesforce Administrator',
    issuer: 'Salesforce',
  },
  {
    name: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM via Coursera',
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
