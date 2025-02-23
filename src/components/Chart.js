import React from "react";
import LineGraph from "./LineGraph";
import BudgetChart from "./BudgetChart";

const Chart = () => {
  return (
    <div className="w-full h-[60%] flex gap-5">
      <LineGraph />
      <BudgetChart />
    </div>
  );
};

export default Chart;
