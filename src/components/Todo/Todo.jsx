import React from "react";

const Todo = ({ title, id, completed }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{title}</span>
      <span>&times;</span>
    </div>
  );
};

export default Todo;
