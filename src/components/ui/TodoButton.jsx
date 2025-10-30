import React from "react";

export const TodoButton = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    small: "px-3 py-1 text-sm bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default TodoButton;
