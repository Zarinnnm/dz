import styles from "./MainPage.module.css";
import Description from "../../components/Description/Description";
import NumberItem from "../../components/NumberItem/NumberItem";

const MainPage = () => {
  const descriptionData = {
    title: "Title",
    description: "description",
  };

  const numbers = [
    { id: 1, age: 25, name: "John" },
    { id: 2, age: 30, name: "Jane" },
    { id: 3, age: 35, name: "Bob" },
  ];

  return (
    <div className={styles.mainPage}>
      <h2 className={styles.title}>MainPage</h2>
      {numbers.map((el) => (
        <NumberItem key={el.id} age={el.age} name={el.name} />
      ))}
      <Description {...descriptionData} />
    </div>
  );
};

export default MainPage;
