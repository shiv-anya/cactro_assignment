import React from "react";
import Card from "./UI/Card";

const InfoCard = ({ icon, number, title, state }) => {
  return (
    <Card
      className={`w-full flex flex-col justify-evenly px-5 ${
        state === "delayed" ? "text-red-500 bg-red-300" : "text-[#333]"
      }`}
    >
      <div
        className={`text-[#00ffff] text-2xl font-semibold ${
          state === "delayed" ? "text-red-600" : ""
        }`}
      >
        {icon}
      </div>
      <div className="font-bold text-5xl text-center">{number}</div>
      <div className="text-sm capitalize text-center">{title}</div>
    </Card>
  );
};

export default InfoCard;
