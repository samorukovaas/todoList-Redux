import { v1 as uuidv1 } from "uuid";
import { ADD_TODO, DELETE_TODO, COMPLETED } from "./actionTypes";

const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          { id: uuidv1(), text: action.payload, completed: false },
          ...state.todos,
        ],
      };

    case DELETE_TODO: {
      const { todos } = state;
      return {
        todos: todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case COMPLETED: {
      const { todos } = state;
      return {
        todos: todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
