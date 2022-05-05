import { v4 as uuidv4 } from 'uuid';
import { types } from '../types/types';

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
