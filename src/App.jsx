import { useState } from "react";

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

      <form onSubmit={handleAddTodo} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe una tarea..."
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Agregar
          </button>
        </div>
      </form>

      <div className="mb-4">
        <p className="text-gray-600">
          Tareas pendientes: <span className="font-bold">{pendingCount}</span>
        </p>
      </div>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-center text-gray-400 p-4">
            No hay tareas. Agrega una para comenzar.
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-100 rounded border"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="w-5 h-5"
                />
                <span
                  className={
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
              >
                Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
