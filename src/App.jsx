import TodoList from "./comp/TodoList";
import TodoInp from "./comp/TodoInp";

import "./App.css";

function App() {
  return (
    <>
      <h1>Todos</h1>
      <TodoInp />
      <TodoList />
    </>
  );
}

export default App;
