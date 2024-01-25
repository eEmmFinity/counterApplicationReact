// Counter Application
import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="main_container">
      <h1> Counter Applicaiton</h1>
      <h2>{count}</h2>
      <div className="add_remove_button">
        <button onClick={increment} className="addButton">Add</button>
        <button onClick={decrement} className="removeButton">Remove</button>
      </div>
    </div>
  );
};

 
export default Counter;
