import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { actionToCancelEdit } from '../../actions/appActions';

// Helpers
import { showModalEditTodo, hideModalEditTodo } from '../../helpers/modals';

// Hooks
import { useForm } from '../hooks/useForm';

export const EditTodo = () => {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state);

  // Handle form values
  const { formValues, setFormValues, handleInputChange } = useForm({ editTodo: '' });
  const { editTodo } = formValues;

  // Handle cancel editing
  const handleCancelEditing = () => {
    hideModalEditTodo();

    setTimeout(() => {
      dispatch(actionToCancelEdit());
    }, 600);
  };

  // Show and load the data you want to edit in the modal
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
          <button type='button' className='close' aria-label='Close' onClick={handleCancelEditing}>
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
