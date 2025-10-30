import React from "react";

export const TodoForm = ({ inputValue, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
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
  );
};
