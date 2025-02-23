import React from "react";
import InfoBar from "./InfoBar";
import Chart from "./Chart";
import MoodBoard from "./MoodBoard";

const Info = () => {
  return (
    <section className="h-screen flex gap-5">
      <div className="h-full w-4/5">
        <InfoBar />
        <Chart />
      </div>
      <div className="w-1/5">
        <MoodBoard />
      </div>
    </section>
  );
};

export default Info;
