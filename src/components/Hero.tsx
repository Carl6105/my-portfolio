import styles from '../styles/Hero.module.css';
import profileImage from '../assets/profileIMG.jpeg'; // Place your image in /src/assets

const Hero = () => {
  return (
    <section
      id="hero"
      className={styles.hero}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out-cubic"
    >
      <div className={styles.content}>
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>S Mohammed Aadil</span>
        </h1>
        <p className={styles.subtitle}>
          Cyber Security Engineer &middot; Full Stack Developer &middot; Vibe Coder
        </p>
      </div>
    </section>
  );
};

export default Hero;
