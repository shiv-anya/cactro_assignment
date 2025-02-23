import React from "react";
import Navbar from "./components/Navbar";
import InfoBar from "./components/InfoBar";
import Budget from "./components/Budget";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <InfoBar />
        <Budget />
      </div>
    </>
  );
}

export default App;
