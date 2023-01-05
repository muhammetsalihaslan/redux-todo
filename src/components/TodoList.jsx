import React from "react";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label></label>
          <button className="destroy"></button>
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
