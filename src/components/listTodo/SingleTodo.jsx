import { useDispatch } from 'react-redux';

// Actions
import { actionToGetTodoById } from '../../actions/appActions';

export const SingleTodo = ({ id, todoDescription, isCompleted }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(actionToGetTodoById(id));
  };

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
        <button className='btn-delete'>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </div>
  );
};
