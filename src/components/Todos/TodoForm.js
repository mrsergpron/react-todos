import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    text && text.charAt(0) !== " " ? addTodo(text) : setText("");
    setText("");
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button title="submit" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
export default TodoForm;