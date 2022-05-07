import { useSelector } from 'react-redux';

// Components
import { SearchTodo } from '../components/listTodo/SearchTodo';
import { SingleTodo } from '../components/listTodo/SingleTodo';

const ListTodo = () => {
  const { state } = useSelector((state) => state);

  return (
    <div className='list-todo'>
      <SearchTodo />

      {/* Shown if task search is not used */}
      {!state.isSearching && (
        <div className='todo-container'>
          {state.todos.map((todo) => (
            <SingleTodo key={todo.id} {...todo} />
          ))}
        </div>
      )}

      {/* Shown if there are tasks searched */}
      {state.todoSearch.length >= 1 && (
        <div className='todo-container'>
          {state.todoSearch.map((todo) => (
            <SingleTodo key={todo.id} {...todo} />
          ))}
        </div>
      )}

      {/* It is shown if the search engine is being used but there are no tasks found */}
      {!state.todoSearch.length >= 1 && state.isSearching && state.todos.length > 0 && <div className={`no-found isActive`}>No found to-dos</div>}
    </div>
  );
};

export default ListTodo;
