import { useDispatch } from 'react-redux';

// Actions
import { actionToGetTodoById, actionToDeleteTodo } from '../../actions/appActions';

export const SingleTodo = ({ id, todoDescription, isCompleted }) => {
  const dispatch = useDispatch();

  // Action to update todo
  const handleEdit = () => dispatch(actionToGetTodoById(id));

  // Action to delete todo
  const handleDelete = () => dispatch(actionToDeleteTodo(id));

  return (
    <div className={`single-todo ${isCompleted && 'isCompleted'}`}>
      <div className='description-todo'>{todoDescription}</div>
      <div className='actions'>
        <button className='btn-completed'>
          {isCompleted ? <i className='fa-solid fa-check complete'></i> : <i className='fa-solid fa-xmark incomplete'></i>}
        </button>
        <button className={`btn-edit ${isCompleted && 'disabled'}`} onClick={handleEdit}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button className='btn-delete' onClick={handleDelete}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </div>
  );
};
