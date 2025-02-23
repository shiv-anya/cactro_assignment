import React from "react";
import Navbar from "./components/Navbar";
import Budget from "./components/Budget";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <Info />
        <Budget />
      </div>
    </>
  );
}

export default App;
