import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Career from './Pages/Career'
import Header from './Components/Header'
import Home from './Pages/Home'
import ProductComp from './Components/ProductComp'
import Footer from './Components/Footer'

const Routing = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/product' Component={ProductComp} />
                <Route path='/career' Component={Career} />
            </Routes>
            <Footer />
        </>
    )
}

export default Routing