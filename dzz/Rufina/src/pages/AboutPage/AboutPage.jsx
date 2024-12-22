import styles from "./AboutPage.module.css";
import Description from "../../components/Description/Description";

const AboutPage = () => {
  const descriptionData = {
    title: "Title 2",
    description: "description 2",
  };

  return (
    <div className={styles.aboutPage}>
      <h1>About Page</h1>
      <Description {...descriptionData} />
    </div>
  );
};

export default AboutPage;
