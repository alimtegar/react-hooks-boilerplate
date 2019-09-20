const TodoReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return getTodos(action.payload, state);
    default:
      return state;
  }
};

const getTodos = (data, state) => {
  return {
    ...state,
    todos: data
  };
};

export default TodoReducer;
