// Helpers
import { showModalCreateTodo } from '../../helpers/modals';

export const ButtonAddTodo = () => {
  return (
    <div className='button-add_todo'>
      <button className='button' onClick={showModalCreateTodo}>
        <i className='fa-solid fa-plus'></i>
      </button>
    </div>
  );
};
