import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import First from "./Pages/Home";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
import SiteCat from "./Pages/SiteCat";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <div className="font-plat">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/:type" element={<SiteCat />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
