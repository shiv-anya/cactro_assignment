import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`w-full bg-white shadow-md rounded-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
