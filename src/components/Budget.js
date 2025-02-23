import React from "react";
import { IoAddOutline, IoMenuOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import BudgetCard from "./BudgetCard";

const Budget = () => {
  const details = [
    {
      icon: <IoAddOutline />,
      title: "add project",
    },
    {
      icon: <FiDownload />,
      title: "download report",
    },
    {
      icon: <CiCalendarDate />,
      title: "date picker",
    },
    {
      icon: <IoMenuOutline />,
      title: "filter",
    },
  ];
  const info = [
    {
      title: "Insurance App",
      name: "Verti",
      budget: "70,000",
      profit: "-2,500",
      time: "100 hours over budget",
      progress: 100,
      state: "failed",
    },
    {
      title: "neo",
      name: "bankia",
      budget: "70,000",
      profit: "4,000",
      time: "1000 sold hours",
      progress: 50,
      state: "warning",
    },
    {
      title: "VR website",
      name: "barca",
      budget: "70,000",
      profit: "4,000",
      time: "2000 sold hours",
      progress: 50,
      state: "success",
    },
    {
      title: "VR website",
      name: "barca",
      budget: "70,000",
      profit: "4,000",
      time: "1100 sold hours",
      progress: 100,
      state: "success",
    },
  ];
  return (
    <section>
      <div className="flex gap-5 items-center">
        <h1 className="text-4xl font-semibold text-[#333]">Budget Status</h1>
        <ul className="flex gap-8 items-center text-[#2E8B57] text-sm">
          {details.map((detail) => (
            <div
              className="cursor-pointer border-2 border-[#2E8B57] rounded-lg hover:bg-[#2E8B57] hover:text-white flex px-3 py-2 items-center capitalize gap-2"
              key={detail.title}
            >
              <div className="text-lg">{detail.icon}</div>
              <div>{detail.title}</div>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex w-full gap-5 my-5">
        {info.map((detail) => (
          <BudgetCard
            title={detail.title}
            name={detail.name}
            budget={detail.budget}
            profit={detail.profit}
            time={detail.time}
            progress={detail.progress}
            state={detail.state}
            key={detail.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Budget;
