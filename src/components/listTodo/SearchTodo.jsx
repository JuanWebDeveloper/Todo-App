import { useDispatch } from 'react-redux';

// Actions
import { actionToSearchTodo } from '../../actions/appActions';

// Hooks
import { useForm } from '../../hooks/useForm';

export const SearchTodo = () => {
  const dispatch = useDispatch();

  // Handle to-do search
  const { formValues, handleInputChange } = useForm({ search: '' });
  const { search } = formValues;

  // Handle keypresses
  const handleKeyUp = () => dispatch(actionToSearchTodo(search));

  return (
    <div className='search-todo'>
      <form>
        <input type='text' name='search' placeholder='Search to-do' value={search} onChange={handleInputChange} onKeyUp={handleKeyUp} />
      </form>
    </div>
  );
};
