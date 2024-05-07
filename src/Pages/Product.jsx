import React from 'react'
import ProductList from '../PagesComp/ProductComponenets/ProductList'
import ProductComp from '../Components/ProductComp'
import ProductTechnicaldata from '../PagesComp/ProductComponenets/ProductTechnicaldata'

const Product = () => {
  return (
    <>
      <ProductList />
      <ProductComp />
      <ProductTechnicaldata/>  
    </>
  )
}

export default Product