import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue!== "") {
      onAddTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="container col-lg-6 m-auto col-12">
      <div className="mb-3">
        <label className="form-label">Todo-List</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button onClick={handleSubmit} className="btn btn-primary w-100">
          Submit
        </button>
      </div>
    </div>
  );
}

function TodoCard({ todo }) {
  return (
    <ul className="text-start mb-2">
      <li>
        {todo}
      </li>
    </ul>
  );
}

function TodoList({ todos }) {
  return (
    <div className="container col-lg-6 m-auto col-12 mt-4">
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoCard key={index} todo={todo} />
        ))
      ) : (
        <p style={{color:"red"}}> Todo vide !!!!!</p>
      )}
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="App">
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
