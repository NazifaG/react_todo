import React, { createContext, useState } from "react";

const ToDoContext = createContext();

function ToDoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  
console.log(todos);


  return (
    <ToDoContext.Provider
      value={{
        todos,
        setTodos,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoProvider, ToDoContext };
