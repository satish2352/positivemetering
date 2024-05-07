import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Career from './Pages/Career'
import Header from './Components/Header'
import Home from './Pages/Home'
import ProductComp from './Components/ProductComp'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import NewsAndEvent from './Pages/NewsAndEvent'
import Blog from './Pages/Blog'

const Routing = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/product' Component={ProductComp} />
                <Route path='/career' Component={Career} />
                <Route path='/about' Component={About} />
                <Route path='/contact' Component={Contact} />
                <Route path='/service' Component={Service} />
                <Route path='/news' Component={NewsAndEvent} />
                <Route path='/blog' Component={Blog} />

                
            </Routes>
            <Footer />
        </>
    )
}

export default Routing