import { createContext } from "react";

const initialState = {
  todos: []
};
const TodoContext = createContext(initialState);

export default TodoContext;
