import React from "react";
import { Routes, Route } from "react-router-dom";

import Card from "./components/Main";
import Detail from "./components/Detail";

export default function App() {
  return (
    <div className="w-full  bg-black  h-[100vh] flex justify-center items-center flex-col">
      <Routes>
        <Route path="/poke-Simulator/" element={<Card />} />
        <Route path="/poke-Simulator/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}
