import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { CreateToDoButton } from './AddToDoButton';
import { toDos } from './toDos';
import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      {/*<Heading />*/}
      <ToDoCounter completed={2} total={5} />
      <ToDoSearch />
      <ToDoList>
        {toDos.map((toDo, index) => (
          <ToDoItem
            key={index}
            description={toDo.text}
            completed={toDo.completed}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </div>
  );
}

export default App;
