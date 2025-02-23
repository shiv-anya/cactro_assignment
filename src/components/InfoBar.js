import React from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { BiError } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import InfoCard from "./InfoCard";
const InfoBar = () => {
  const details = [
    {
      icon: <HiOutlineSquares2X2 />,
      number: 5,
      title: "total projects",
      state: "success",
    },
    {
      icon: <IoMdCheckmarkCircleOutline />,
      number: 1,
      title: "completed",
      state: "success",
    },
    {
      icon: <TfiReload />,
      number: 3,
      title: "ongoing",
      state: "success",
    },
    {
      icon: <BiError />,
      number: 1,
      title: "delayed",
      state: "delayed",
    },
    {
      icon: <LuUsers />,
      number: 5,
      title: "employees",
      state: "success",
    },
  ];
  return (
    <section className="flex w-full gap-5 my-5 h-[25%]">
      {details.map((detail) => (
        <InfoCard
          key={detail.title}
          icon={detail.icon}
          number={detail.number}
          title={detail.title}
          state={detail.state}
        />
      ))}
    </section>
  );
};

export default InfoBar;
