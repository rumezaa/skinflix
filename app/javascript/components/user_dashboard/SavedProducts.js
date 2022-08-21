import React, { useState, useEffect } from 'react'
import ProductCard from "../products/ProductCard"
import axios from 'axios'

const SavedProducts = ({products}) => {



 return (<div className='flex flex-col items-center md:flex-none md:grid md:grid-cols-3 lg:grid-cols-4 px-10'>
    {products.map((product) => (
      <ProductCard product={product} />
    ))}
 </div>);
}

export default SavedProducts