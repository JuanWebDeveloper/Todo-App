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
    case types.cancelEdit:
      return {
        todos: [...state.todos],
        isEditing: {},
        todoSearch: [...state.todoSearch],
        isSearching: state.isSearching,
      };
    case types.updateTodo:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload,
            };
          }
          return todo;
        }),
        isEditing: {},
        todoSearch: state.todoSearch.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload,
            };
          }
          return todo;
        }),
        isSearching: state.isSearching,
      };
    case types.deleteTodo:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        isEditing: {},
        todoSearch: state.todoSearch.filter((todo) => todo.id !== action.payload),
        isSearching: state.isSearching,
      };
    default:
      return state;
  }
};
