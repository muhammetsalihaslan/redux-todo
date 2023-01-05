import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const items = useSelector((state) => state.todos.item);

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
}

export default TodoList;
