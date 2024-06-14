import { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { uniqueRandomID } from "../utils/getRandomID";
function TodoInp() {
  const { todos, setTodos } = useContext(ToDoContext);
  const [todo, setTodo] = useState("");

  //formda yenilenmeni sehifenin refresh olunmagini saxlamaq ucun
  function handleSubmit(e) {
    e.preventDefault();
    const task = {
      task: todo,
      id: uniqueRandomID(todos),
    };

    //submit butonu ise dusende her defe get setTodo-nu islet ve todonu guncelle onu bos string ele
    setTodo("");
    //setData adinda bir props yaradiriq icinde task-i oturmek ucun, ve gedib input hissede de  onu props olaraq yaziriq
    setTodos([...todos, task]);
  }

  //inputda her defe yeni bir sey yazdiqca setTodoya getsin
  function handleChange(e) {
    setTodo(e.target.value);
  }
  // console.log(todo);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="todo..."
        value={todo}
        onChange={handleChange}
      />
      <input disabled={!todo} type="submit" value="Add" />
    </form>
  );
}

export default TodoInp;
