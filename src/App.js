import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = ({ bdrBtm }) => {
  const [todo, setTodo] = useState('');
  const [task, setTask] = useState([]);

  const change = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = () => {
    todo === ''
      ? alert('Please, Add Something')
      : setTask((list) => {
          return [...list, todo];
        });
    setTodo('');
  };

  const deleteItem = (id) => {
    setTask((list) => {
      return list.filter((elem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Todo Reminder</h1>
        <input
          type="text"
          value={todo}
          onChange={change}
          placeholder="Add a Item"
        />
        <button onClick={onSubmit}>+</button>
        <div style={{ width: '100%' }}>
          <div style={{ color: 'red', display: 'inline-flex' }}>
            <p className="reddot"> </p>Border item Not Owned
          </div>
          <div style={{ color: 'green', display: 'inline-flex' }}>
            <p className="grndot"> </p>Border item Owned
          </div>
        </div>
        <ol>
          {task.map((val, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                listItem={val}
                onselect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
