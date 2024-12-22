import styles from "./TodosPage.module.css";
import Todo from "../../components/Todo/Todo";

const TodosPage = () => {
  const todos = ["todo 1", "todo 2", "todo 3"];

  return (
    <div className={styles.todosPage}>
      <h1>Todos Page</h1>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodosPage;
