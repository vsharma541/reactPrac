import AddItem from './AddItem';
import ToDoList from './ToDoList';
import ToDoParent from './ToDoParent';

const App = () => {
  return (
    <ToDoParent>
        <AddItem />
        <ToDoList />
    </ToDoParent>
  )
}

export default App;

