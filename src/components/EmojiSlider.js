import React, { useState } from "react";

const EmojiSlider = ({ value }) => {
  const [mood, setMood] = useState(value);
  const moodEmojis = ["😡", "😞", "😐", "😊", "😁"];
  const handleChange = (e) => {
    setMood(Number(e.target.value));
  };

  return (
    <div className="flex items-center w-4/5 mt-2">
      <span className="text-xl -ml-5">{moodEmojis[mood]}</span>
      <input
        type="range"
        min="0"
        max="4"
        value={mood}
        onChange={handleChange}
        className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default EmojiSlider;
