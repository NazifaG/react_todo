import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

function TodoItem({ todo }) {
  const { todos, setTodos } = useContext(ToDoContext);
  const [showModal, setShowModal] = useState(false);
  const [inp, setInp] = useState("");

  function handleDelete() {
    const copyArr = [...todos];
    const todosAfterDelete = copyArr.filter(
      (currentTodo) => currentTodo.id != todo.id
    );
    setTodos(todosAfterDelete);
  }


  function handleSubmit(e) {
    e.preventDefault();
    const updateTodo = {
      task: inp,
      id: todo.id,
    };
    setInp("");
    setShowModal(false);

    const copyArr = [...todos];
    const TodosAfterUpdate = copyArr.map((currentTodo) => {
      if (updateTodo.id == currentTodo.id) return updateTodo;
      return currentTodo;
    });
    setTodos(TodosAfterUpdate);
  }

  function handleModal() {
    setShowModal(true);
    setInp(todo.task);
  }

  function handleChange(e) {
    setInp(e.target.value);
  }

  return (
    <>
      {showModal ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Edit task..."
              value={inp}
              onChange={handleChange}
            />
            <input type="submit" value="Save" />
          </form>
        </>
      ) : (
        <>
          <li>{todo.task}</li>
          <button onClick={handleModal}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </>
  );
}

export default TodoItem;
