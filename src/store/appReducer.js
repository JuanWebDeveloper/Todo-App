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
        todos: [...state.todos, action.payload],
        isEditing: {},
        todoSearch: [...state.todoSearch],
        isSearching: state.isSearching,
      };
    case types.getById:
      return {
        todos: [...state.todos],
        isEditing: state.todos.find((todo) => todo.id === action.payload),
        todoSearch: [...state.todoSearch],
        isSearching: state.isSearching,
      };
    default:
      return state;
  }
};
