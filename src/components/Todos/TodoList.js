import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            delTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}
export default TodoList;
