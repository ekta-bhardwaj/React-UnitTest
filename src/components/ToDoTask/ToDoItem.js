import React from "react";
import "./ToDoItem.css";

const ToDoItem = props => {
  const { item, deleteItem } = props;

  return (
    <div className="ToDoItem" data-testid="todo-item">
      <p className="ToDoItem-Text" data-testid="todo-text">
        {item.text}
      </p>
      <button
        data-testid="delete"
        className="ToDoItem-Delete"
        onClick={() => deleteItem(item.id)}
      >
        -
      </button>
    </div>
  );
};

export default ToDoItem;
