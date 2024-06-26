import React from 'react'
import MainBanner from '../PagesComp/HomeComp/MainBanner'
import OurProducts from '../PagesComp/HomeComp/OurProducts'
import Shopnow from '../PagesComp/HomeComp/Shopnow'
import Testomonial from '../PagesComp/HomeComp/Testomonial'
import Requestcallback from '../PagesComp/HomeComp/Requestcallback'
import ProductComp from '../Components/ProductComp'
const Home = () => {
  return (
    <div>
      <MainBanner />
      <OurProducts />
      <ProductComp/>
      <Shopnow/>
      <Testomonial/>
      <Requestcallback/>
    </div>
  )
}

export default Home