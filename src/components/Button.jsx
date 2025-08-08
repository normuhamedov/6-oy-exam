// Button.jsx
import React from "react";

const Button = ({ children, size = "md", onClick }) => {
  const sizeClasses = {
    sm: "px-[30px] py-[10px] text-sm",
    md: "px-4 py-[15px] text-base w-full",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-[#0075FF] cursor-pointer text-white rounded-lg shadow-md transition duration-200 hover:bg-blue-700 active:scale-95 ${sizeClasses[size]} font-[Plus Jakarta Display] font-bold text-[10px] leading-[150%] tracking-[0em]`}
    >
      {children}
    </button>
  );
};

export default Button;
