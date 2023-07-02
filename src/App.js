import { useState } from 'react';
import './App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [dataTodo, setDataTodo] = useState('');

  const handleChange = (e) => {
    setDataTodo(e.target.value);
  };
  const handleClick = () => {
    setTodoList([...todoList, dataTodo]);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="title">
          <p>-App Project-</p>
          <h2>Todo List</h2>
        </div>
      </nav>
      <div className="container">
        <h3>input your todo list!</h3>
        <input onChange={handleChange} />
        <button onClick={handleClick}>input</button>
      </div>
      <div className="container">
        <h1>Todo List Result</h1>
        <div className="wrapper">
          {todoList.map((todo) => {
            return (
              <div className="todo">
                <h2>{todo}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <p>created by <span>@pravastaipo</span></p>
        <p>made with love ❤</p>
      </footer>
    </div>
  );
};

export default App;
