import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import First from "./Pages/Home";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="font-plat">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/product" element={<Product/>}>
              <Route path=":productId" element={<Product />} />
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
