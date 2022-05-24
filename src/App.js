import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import { useState,useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
function App() {
  const [loading,setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[])

  
  return (
    <>
    {loading ? <div className="load"><HashLoader color="#36D7B7" loading={loading}  size={50} /></div> :( 
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>) }
   </>
  );
}

export default App;
