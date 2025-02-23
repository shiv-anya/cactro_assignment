import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "./UI/Card";
import ToggleBar from "./UI/ToggleBar";

const data = [
  { date: "19 June", revenue: 1000 },
  { date: "20 June", revenue: 3500 },
  { date: "21 June", revenue: 3100 },
  { date: "22 June", revenue: 4000 },
  { date: "23 June", revenue: 5500 },
  { date: "24 June", revenue: 6600 },
  { date: "25 June", revenue: 6600 },
];

const LineGraph = () => {
  return (
    <Card className="w-[60%] bg-white h-full p-4 text-xs">
      <div className="flex justify-between w-full pb-5">
        <p className="text-gray-600">Total Revenue</p>
        <div className="flex gap-2">
          <p className="text-gray-300">Month</p>
          <ToggleBar />
          <p className="text-gray-600">Week</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(tick) => `${tick}`}
            domain={[0, "dataMax"]}
            ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000]}
          />
          <Tooltip />
          <Line
            type="linear"
            dataKey="revenue"
            stroke="#008080"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default LineGraph;
