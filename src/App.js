import {ToDoCounter} from './ToDoCounter';
import {ToDoItem} from './ToDoItem';
import {ToDoSearch} from './ToDoSearch';
import {ToDoList} from './ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        <ToDoItem/>
      </ToDoList>
    </div>
  );
}



export default App;
