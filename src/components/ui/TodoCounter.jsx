import React from "react";

export const TodoCounter = ({ count }) => {
  return (
    <div className="mb-4">
      <p className="text-gray-600">
        Tareas pendientes: <span className="font-bold">{count}</span>
      </p>
    </div>
  );
};
