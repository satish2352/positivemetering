import React from 'react'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductComp from "./Components/ProductComp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <ProductComp />
      <Footer />
    </>
  );
}

export default App;
