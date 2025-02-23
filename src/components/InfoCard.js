import React from "react";
import Card from "./UI/Card";

const InfoCard = ({ icon, number, title, state }) => {
  return (
    <Card
      className={`p-5 w-full flex flex-col gap-3 ${
        state === "delayed" ? "bg-red-300" : ""
      }`}
    >
      <div
        className={`text-[#00ffff] text-2xl font-semibold ${
          state === "delayed" ? "text-red-500" : ""
        }`}
      >
        {icon}
      </div>
      <div className="text-[#333] font-bold text-5xl text-center">{number}</div>
      <div className="text-sm capitalize text-center text-[#333]">{title}</div>
    </Card>
  );
};

export default InfoCard;
