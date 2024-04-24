import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import First from "./Pages/First";

function App() {
  return (
    <>
      <div className="font-plat">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<First/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
