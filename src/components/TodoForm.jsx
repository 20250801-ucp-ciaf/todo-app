import React from "react";
import { TodoInput } from "./ui/TodoInput";
import { TodoButton } from "./ui/TodoButton";

export const TodoForm = ({ inputValue, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="flex gap-2">
        <TodoInput
          value={inputValue}
          onChange={onInputChange}
          placeholder="Escribe una tarea..."
        />
        <TodoButton type="submit" variant="primary">
          Agregar
        </TodoButton>
      </div>
    </form>
  );
};
