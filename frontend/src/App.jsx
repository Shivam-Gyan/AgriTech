import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Home,Login,Signup } from "./pages";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;