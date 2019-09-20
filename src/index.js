import React from "react";
import ReactDOM from "react-dom";

// Style
import "./styles.css";

// Components
import TodoContextProvider from "./components/TodoContextProvider";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

const App = () => {
  return (
    <TodoContextProvider>
      <Navbar />
      <Todos />
    </TodoContextProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
