// Containers
import Layouts from './Layouts';
import Modals from './Modals';
import ListTodo from './ListTodo';

const Main = () => {
  return (
    <div className='main'>
      <Layouts>
        <div className='content'>
          <Modals />
          <ListTodo />
        </div>
      </Layouts>
    </div>
  );
};

export default Main;
