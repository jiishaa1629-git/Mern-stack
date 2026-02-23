import styles from "./About.module.css";

function About() {
  return (
    <section id="about">
      <h2>My <span className="orange">Work Skills</span></h2>

      <div className={styles.skillsGrid}>
        <div className={styles.card}>
          <h4>PowerBI</h4>
          <div className={styles.progress}><span style={{width:"95%"}}></span></div>
        </div>

        <div className={styles.card}>
          <h4>HTML&CSS</h4>
          <div className={styles.progress}><span style={{width:"90%"}}></span></div>
        </div>

        <div className={styles.card}>
          <h4>Web Development</h4>
          <div className={styles.progress}><span style={{width:"98%"}}></span></div>
        </div>

        <div className={styles.card}>
          <h4>Web Design</h4>
          <div className={styles.progress}><span style={{width:"97%"}}></span></div>
        </div>
      </div>
    </section>
  );
}

export default About;