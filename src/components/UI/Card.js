import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-sm p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
