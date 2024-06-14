import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useContext(ToDoContext);

  const liElements = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ));

  return todos.length === 0 ? (
    <p style={{ fontStyle: "italic" }}>There is no todo list</p>
  ) : (
    <ul>{liElements}</ul>
  );
}
