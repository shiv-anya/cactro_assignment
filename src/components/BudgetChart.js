import React from "react";
import { PieChart, Pie, Cell, Legend, Label } from "recharts";
import ToggleBar from "./UI/ToggleBar";

const data = [
  { name: "Over Budget", value: 19, color: "#d9534f" },
  { name: "On Budget", value: 33, color: "#5bc0de" },
  { name: "Under Budget", value: 45, color: "#5cb85c" },
];

const BudgetChart = () => {
  return (
    <div className="text-center w-[40%] bg-white text-xs p-5 flex flex-col items-center">
      <div className="flex justify-between w-full">
        <p className="text-gray-600">Budget</p>
        <div className="flex gap-2">
          <p className="text-gray-300">Probability</p>
          <ToggleBar />
          <p className="text-gray-600">Status</p>
        </div>
      </div>
      <PieChart width={250} height={250} className="flex justify-center my-5">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Label
          value="5 Total Projects"
          position="center"
          fontSize={2}
          fontWeight="bold"
          fill="#333"
        />
        <Legend />
      </PieChart>
    </div>
  );
};

export default BudgetChart;
