import { types } from '../types/types';

const initialState = {
  todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
  isEdit: {},
  todoSearch: [],
  isSearching: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.createTodo:
      return {
        todos: [...state.todos, action.payload],
        isEdit: {},
        todoSearch: [...state.todoSearch],
        isSearching: state.isSearching,
      };
    default:
      return state;
  }
};
