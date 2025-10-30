import React from "react";

export const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-400 p-4">
        No hay tareas. Agrega una para comenzar.
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
