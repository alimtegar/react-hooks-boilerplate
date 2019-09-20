import React, { useReducer } from "react";
import axios from "axios";
import TodoContext from "../contexts/TodoContext";
import TodoReducer from "../reducers/TodoReducer";

const TodoContextProvider = props => {
  const initialState = {
    todos: []
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const getTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        dispatch({
          type: "GET_TODOS",
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <TodoContext.Provider value={{ ...state, getTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
