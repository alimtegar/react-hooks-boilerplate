import React from "react";
import ReactDOM from "react-dom";

// Style
import "./styles.css";

// Components
import TodoContextProvider from "./components/TodoContextProvider";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoContextProvider>
      <Navbar />
      <TodoList />
    </TodoContextProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
