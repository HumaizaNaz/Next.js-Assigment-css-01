import styles from './Achievements.module.css';

const Achievements = () => {
  return (
    <div className={styles.achievements}>
      <h1 className={styles.heading}>Achievements</h1>
      <div className={styles.achievementsContainer}>
        <div className={styles.achievement}>
          <div className={styles.icon}>👥</div>
          <p className={styles.number}>22,565</p>
          <p className={styles.label}>Our followers</p>
        </div>
        <div className={styles.achievement}>
          <div className={styles.icon}>🎓</div>
          <p className={styles.number}>9,000</p>
          <p className={styles.label}>Trainings completed</p>
        </div>
        <div className={styles.achievement}>
          <div className={styles.icon}>👨‍💼</div>
          <p className={styles.number}>250,000</p>
          <p className={styles.label}>Trained Managers</p>
        </div>
        <div className={styles.achievement}>
          <div className={styles.icon}>📅</div>
          <p className={styles.number}>1,954</p>
          <p className={styles.label}>Since</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
