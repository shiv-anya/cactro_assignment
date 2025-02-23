import React, { useState } from "react";
import EmojiSlider from "./EmojiSlider";
import Card from "./UI/Card";

const MoodBoard = () => {
  const teamMood = [
    { name: "Andrea", role: "UX Junior", value: 4 },
    { name: "Alvaro", role: "Back end developer", value: 3 },
    { name: "Juan", role: "UX Senior", value: 2 },
    { name: "Jose", role: "Marketing", value: 1 },
    { name: "Maria", role: "UX Junior", value: 0 },
  ];

  return (
    <Card className="w-full p-5 my-5 text-sm">
      <h2 className="text-xl text-[#333] font-thin">Team Mood</h2>
      {teamMood.map((member) => (
        <div
          className="border-b-2 border-gray-300 py-2 flex flex-col items-center"
          key={member.name}
        >
          <div className="w-full flex gap-5">
            <img
              src="https://picsum.photos/id/237/200/200"
              alt="team member"
              className="size-10 rounded-full"
            />
            <div>
              <p>{member.name}</p>
              <p className="text-xs text-gray-300">{member.role}</p>
            </div>
          </div>
          <EmojiSlider value={member.value} />
        </div>
      ))}
    </Card>
  );
};

export default MoodBoard;
