import React from "react";
import Card from "./UI/Card";

const BudgetCard = ({ title, name, budget, profit, time, progress, state }) => {
  const getColor = (state) => {
    if (state === "failed") return "bg-red-500";
    else if (state === "warning") return "bg-yellow-500";
    else return "bg-[#2E8B57]";
  };
  return (
    <Card className="w-full text-sm">
      <div className="flex justify-between items-center">
        <div className="capitalize">
          <p className="text-xl font-semibold text-[#333]">{title}</p>
          <p className="text-gray-500 text-sm">{name}</p>
        </div>
        <div>
          <img
            alt="company profile"
            className="size-10 rounded-full"
            src="https://picsum.photos/seed/picsum/200/200"
          />
        </div>
      </div>
      <div className="text-xs my-2">
        <div className="flex w-[70%] text-gray-400 justify-between ">
          <p>Total Budget:</p>
          <p className="text-gray-600">{budget} &#8364;</p>
        </div>
        <div className="flex w-[70%] text-gray-400 justify-between ">
          <p>Profitabilty(100%):</p>
          <p className="text-gray-600">{profit} &#8364;</p>
        </div>
      </div>
      <div className={`w-full bg-gray-200 rounded-full h-3 my-3`}>
        <div
          className={`${getColor(state)} h-3 rounded-l-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-xs flex justify-between text-gray-600">
        <p>Active hours: 1.100</p>
        <p>{time}</p>
      </div>
    </Card>
  );
};

export default BudgetCard;
