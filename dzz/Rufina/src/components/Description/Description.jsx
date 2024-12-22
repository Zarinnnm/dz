import styles from "./Description.module.css";

const Description = ({ title, description }) => {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default Description;
