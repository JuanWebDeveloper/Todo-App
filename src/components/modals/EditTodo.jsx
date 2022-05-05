import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// Helpers
import { showModalEditTodo, hideModalEditTodo } from '../../helpers/modals';

// Hooks
import { useForm } from '../hooks/useForm';

export const EditTodo = () => {
  const { state } = useSelector((state) => state);

  // Handle form values
  const { formValues, setFormValues, handleInputChange } = useForm({ editTodo: '' });
  const { editTodo } = formValues;

  useEffect(() => {
    showModalEditTodo();
    const { todoDescription } = state.isEditing;
    setFormValues({ editTodo: todoDescription });
  }, []);

  return (
    <div className='modal' id='modalEdit'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4>Edit To-do</h4>
          <button type='button' className='close' aria-label='Close' onClick={hideModalEditTodo}>
            <i className='fa-solid fa-xmark'></i>
          </button>
        </div>
        <div className='modal-body'>
          <form>
            <input type='text' name='editTodo' placeholder='Todo Description' value={editTodo} onChange={handleInputChange} required />
            <button className='button'>Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
