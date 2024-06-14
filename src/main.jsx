import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToDoProvider } from "./context/ToDoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToDoProvider>
    <App />
  </ToDoProvider>
);
