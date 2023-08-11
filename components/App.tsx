import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { ITodo } from "../types/data";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e ) => {
    setValue(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
    }

    setValue("");
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((elem) => elem.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <div>
        <input
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          type="text"
          ref={inputRef}
        />
        <button onClick={addTodo} type="button">
          {" "}
          Add{" "}
        </button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
