import styles from "./NumberItem.module.css";

const NumberItem = ({ age, name }) => {
  return (
    <div className={styles.item}>
      age: {age}, name: {name}
    </div>
  );
};

export default NumberItem;
