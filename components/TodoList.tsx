import { FC } from "react";
import { ITodoListProps } from "../types/data";
import TodoItem from "./TodoItem";

const TodoList: FC<ITodoListProps> = (props) => {
  const { removeTodo, toggleTodo, items } = props;

  return (
    <div>
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
