const initialState = {
  todos: window.localStorage.getItem("list")
    ? JSON.parse(window.localStorage.getItem("list"))
    : [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, { name: payload.name, id: payload.id }],
      };
    case "DEL":
      const newTodo = state.todos.filter((ele) => ele.id !== payload);

      return { todos: newTodo };
    case "EDIT":
      const newTod = state.todos.map((ele) => {
        if (payload.id === ele.id) {
          return { ...ele, name: payload.name };
        }
        return ele;
      });

      return { todos: newTod };

    case "CLEAR_ALL":
      return { todos: [] };

    default:
      return state;
  }
};
export default todoReducer;
