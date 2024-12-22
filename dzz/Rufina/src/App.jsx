import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <MainPage />
      <AboutPage />
      <TodosPage />
    </div>
  );
}

export default App;
