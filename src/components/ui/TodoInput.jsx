import React from "react";

export const TodoInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    />
  );
};
