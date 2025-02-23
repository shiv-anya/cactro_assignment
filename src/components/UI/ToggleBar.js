import React, { useState } from "react";

const ToggleBar = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      onClick={toggleHandler}
      className={`w-8 h-4 rounded-full cursor-pointer transition-all ${
        isOn ? "bg-gray-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform ${
          isOn ? "transform translate-x-4" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleBar;
