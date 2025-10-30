import React from "react";
import TodoButton from './ui/TodoButton'

export const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-100 rounded border">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5"
        />
        <span
          className={todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}
        >
          {todo.text}
        </span>
      </div>
      <TodoButton
        onClick={() => onDelete(todo.id)}
        variant="small"
      >
        Eliminar
      </TodoButton>
    </div>
  );
};
