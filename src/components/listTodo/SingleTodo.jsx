export const SingleTodo = ({ id, todoDescription, isCompleted }) => {
  return (
    <div className={`single-todo ${isCompleted && 'isCompleted'}`}>
      <div className='description-todo'>{todoDescription}</div>
      <div className='actions'>
        <button className='btn-completed'>
          {isCompleted ? <i className='fa-solid fa-check complete'></i> : <i className='fa-solid fa-xmark incomplete'></i>}
        </button>
        <button className={`btn-edit ${isCompleted && 'disabled'}`}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
        <button className='btn-delete'>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </div>
    </div>
  );
};
