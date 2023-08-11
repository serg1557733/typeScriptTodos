import React, { FC } from "react";
import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: FC<ITodoItem> = (props) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;

  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button
        onClick={() => removeTodo(id)}
        style={{
          outline: "none",
          color: "red",
          background: "transparent",
          border: "none",
        }}
      >
        {" "}
        X{" "}
      </button>
    </div>
  );
};

export default TodoItem;
