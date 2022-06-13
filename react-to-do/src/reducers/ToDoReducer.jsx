const initState = {
  todoList: [],
};

const ToDoReducer = (state = initState, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      };
    case "UpdateText":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          todo.id === state.id
            ? {
                ...todo,
                text: state.text,
              }
            : todo;
        }),
      };
    case "UpdateCompletion":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          todo.id === state.id
            ? {
                ...todo,
                completed: !state.completed,
              }
            : todo;
        }),
      };
    default:
      return state;
  }
};

export default ToDoReducer ;