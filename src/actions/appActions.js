import { v4 as uuidv4 } from 'uuid';
import { types } from '../types/types';

// This function is used to create a new todo
export const actionToCreateTodo = (data) => {
  return (dispatch, getState) => {
    const newTodo = {
      id: uuidv4(),
      todoDescription: data,
      isCompleted: false,
    };

    dispatch(addNewTodo(newTodo));
    const { todos } = getState().state;

    localStorage.setItem('todos', JSON.stringify(todos));
  };
};

const addNewTodo = (todo) => ({
  type: types.createTodo,
  payload: todo,
});

// This function is used to get a todo by id
export const actionToGetTodoById = (id) => ({
  type: types.getById,
  payload: id,
});

// This function is used to cancel edit
export const actionToCancelEdit = () => ({
  type: types.cancelEdit,
});
