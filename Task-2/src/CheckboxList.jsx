// src/CheckboxList.js
import React, { useEffect, useState } from 'react';

const CheckboxList = () => {
  const [todos, setTodos] = useState([]);
  const [checkedState, setCheckedState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
        const data = await response.json();
        setTodos(data);
        
        const initialCheckedState = {};
        data.forEach((todo) => {
          initialCheckedState[todo.id] = todo.completed;
        });
        setCheckedState(initialCheckedState);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (id) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={checkedState[todo.id] || false}
              onChange={() => handleCheckboxChange(todo.id)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxList;
