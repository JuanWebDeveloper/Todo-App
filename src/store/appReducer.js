import { types } from '../types/types';

const initialState = {
  todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
  isEditing: {},
  todoSearch: [],
  isSearching: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.createTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case types.getById:
      return {
        ...state,
        isEditing: state.todos.find((todo) => todo.id === action.payload),
      };
    case types.cancelEdit:
      return {
        ...state,
        isEditing: {},
      };
    case types.updateTodo:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
        isEditing: {},
        todoSearch: state.todoSearch.length > 0 ? state.todoSearch.map((todo) => (todo.id === action.payload.id ? action.payload : todo)) : [],
      };
    case types.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        todoSearch: state.todoSearch.length > 0 ? state.todoSearch.filter((todo) => todo.id !== action.payload) : [],
      };
    case types.todoSearch:
      return {
        ...state,
        todoSearch: state.todos.filter((todo) => todo.todoDescription.toLowerCase().includes(action.payload.toLowerCase())),
        isSearching: true,
      };
    default:
      return state;
  }
};
