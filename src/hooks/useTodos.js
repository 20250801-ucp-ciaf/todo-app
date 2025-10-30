import { useState } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const getPendingCount = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    getPendingCount,
  };
}

export default useTodos;
