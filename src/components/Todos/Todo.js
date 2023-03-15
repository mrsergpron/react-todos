import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

import styles from "./Todo.module.css";
function Todo({ todo, delTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={(e) => delTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={(e) => toggleTodo(todo.id)}
      />
    </div>
  );
}
export default Todo;
