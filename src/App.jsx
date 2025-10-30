import { useState } from "react";
import StorageForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const pendingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Mi Lista de Tareas
      </h1>

      <TodoForm
        inputValue={inputValue}
        onInputChange={(e) => setInputValue(e.target.value)}
        onSubmit={handleAddTodo}
      />

      <div className="mb-4">
        <p className="text-gray-600">
          Tareas pendientes: <span className="font-bold">{pendingCount}</span>
        </p>
      </div>

      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
